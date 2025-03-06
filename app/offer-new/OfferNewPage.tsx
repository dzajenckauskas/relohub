"use client";
import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { capitalizeEachWord } from "@/COMPONENTS/common/shared/capitalizeEachWord";
import { CountriesResponseType } from "@/COMPONENTS/types/CountryType";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en-gb';
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import HorizontalStepper from "./HorizontalStepper";
import OfferSummaryBottomLine from "./OfferSummaryBottomLine";
import DetailsAndDatesStep from "./steps/DetailsAndDatesStep";
import InventoryStep from "./steps/InventoryStep";
import PriceOptionsStep from "./steps/PriceOptionsStep";

export type OfferFormType = {
    fullName: string;
    email: string;
    phone: string;
    something: string;
    somethingelse: string;
    collectCountry: string;
    collectCity: string;
    collectPostcode: string;
    deliverCountry: string;
    deliverCity: string;
    dialCode: string;
    countryCode: string;
    deliverPostcode: string;
    standardBox: number;
    largeBox: number;
    suitcaseSmall: number;
    suitcaseLarge: number;
    customItems: CustomItemType[];
    commonItems: CustomItemType[];
    collectionDate: Date;
    deliverBoxesDate: Date;
    emptyBoxesQuantity: number;
    hasItemsAdded: boolean;
};

export type CustomItemType = {
    name: string;
    width: string;
    height: string;
    depth: string;
    length?: string;
    weight: string;
}
// Step-based validation schemas

const customItemSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    width: yup.number().typeError('Width must be a number').positive('Width must be greater than 0').required('Width is required'),
    height: yup.number().typeError('Height must be a number').positive('Height must be greater than 0').required('Height is required'),
    depth: yup.number().typeError('Depth must be a number').positive('Depth must be greater than 0').required('Depth is required'),
    weight: yup.number().typeError('Weight must be a number').positive('Weight must be greater than 0').required('Weight is required'),
});

const phoneValidation = yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits") // ✅ Ensures only digits

const stepSchemas = [
    yup.object({
        fullName: yup
            .string()
            .matches(/^\S+\s+\S+/, "Please enter your full name (first and last name)")
            .required("Name is required"),
        email: yup
            .string()
            .matches(/^[^@]+@[^@]+\.[^@]+$/, "Invalid email format")
            .email("Invalid email")
            .required("Email is required"),
        phone: phoneValidation, // ✅ Updated validation
        collectionDate: yup.date().required("Collection date is required").typeError("Invalid date"),
        deliverCity: yup.string().required("Deliver city is required"),
        deliverCountry: yup.string().required("Deliver country is required"),
        collectCity: yup.string().required("Collection city is required"),
        collectCountry: yup.string().required("Collection country is required"),
        deliverPostcode: yup.string().when("deliverCountry", {
            is: (country) =>
                typeof country === "string" &&
                ["united kingdom", "united states"].includes(country.trim().toLowerCase()),
            then: (schema) => schema.required("Delivery postcode is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        collectPostcode: yup.string().when("collectCountry", {
            is: (country) =>
                typeof country === "string" &&
                ["united kingdom", "united states"].includes(country.trim().toLowerCase()),
            then: (schema) => schema.required("Collecty postcode is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
    }),
    yup.object({
        fullName: yup
            .string()
            .matches(/^\S+\s+\S+/, "Please enter your full name (first and last name)")
            .required("Name is required"),
        email: yup
            .string()
            .matches(/^[^@]+@[^@]+\.[^@]+$/, "Invalid email format")
            .email("Invalid email")
            .required("Email is required"),
        phone: phoneValidation, // ✅ Updated validation

        collectionDate: yup.date().required("Collection date is required").typeError("Invalid date"),
        deliverCity: yup.string().required("Deliver city is required"),
        deliverCountry: yup.string().required("Deliver country is required"),
        collectCity: yup.string().required("Collection city is required"),
        collectCountry: yup.string().required("Collection country is required"),
        deliverPostcode: yup.string().when("deliverCountry", {
            is: (country) =>
                typeof country === "string" &&
                ["united kingdom", "united states"].includes(country.trim().toLowerCase()),
            then: (schema) => schema.required("Delivery postcode is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        collectPostcode: yup.string().when("collectCountry", {
            is: (country) =>
                typeof country === "string" &&
                ["united kingdom", "united states"].includes(country.trim().toLowerCase()),
            then: (schema) => schema.required("Collecty postcode is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        customItems: yup.array().of(customItemSchema).default([]),
        hasItemsAdded: yup.boolean().when(
            ["customItems", "commonItems", "standardBox", "largeBox", "suitcaseSmall", "suitcaseLarge"],
            {
                is: (commonItems: any[], customItems: any[], standardBox: number, largeBox: number, suitcaseSmall: number, suitcaseLarge: number) => {
                    return ((commonItems?.length ?? 0) + (customItems?.length ?? 0) + (standardBox ?? 0) + (largeBox ?? 0) + (suitcaseSmall ?? 0) + (suitcaseLarge ?? 0)) <= 0;
                },
                then: () => yup.boolean().required("At least one item must be selected"),
                otherwise: () => yup.boolean().nullable(),
            }
        ),
    }),
];



type Props = {
    countriesData?: CountriesResponseType;
}
export default function OfferNewPage({ countriesData }: Props) {

    const [activeStep, setActiveStep] = useState<number | undefined>(0);
    const [error, setError] = useState<string | undefined>();

    const [prices, setPrices] = useState(null);


    const searchParams = useSearchParams();
    const dataParam = JSON.parse(searchParams.get("data"))

    const form = useForm<OfferFormType>({
        resolver: yupResolver(stepSchemas[activeStep] as any) as any, // Change schema dynamically
        mode: "onChange",
        reValidateMode: 'onChange',
        defaultValues: {
            // countryCode: "+1",
            collectCountry: capitalizeEachWord(dataParam?.from_country)
            // ?? "United Kingdom"
            ,
            collectCity: capitalizeEachWord(dataParam?.from_city)
            // ?? "London"
            ,
            collectPostcode: capitalizeEachWord(dataParam?.from_postCode)
            // ?? "HP23DS"
            ,
            deliverCountry: capitalizeEachWord(dataParam?.to_country)
            // ?? "United States"
            ,
            deliverCity: capitalizeEachWord(dataParam?.to_city)
            // ?? "Boston"
            ,
            deliverPostcode: capitalizeEachWord(dataParam?.to_postCode)
            // ?? "BO5345"
            ,

        }
    });

    const { handleSubmit, trigger } = form;


    const validateForm = async () => {
        const isValid = await trigger(Object.keys(stepSchemas[0].fields) as any); // Validate only current step fields
        return isValid
    };

    const formData = form.getValues()
    const commonItems = form.watch('commonItems')
    const customItems = form.watch('customItems')

    const transformedCustomItems = customItems?.map((v) => {
        return {
            quantity: 1,
            name: v.name,
            width: v.width,
            height: v.height,
            depth: v.depth,
            weight: v.weight,
        }
    })
    const transformedCommonItems = commonItems?.map((v) => {
        return {
            quantity: 1,
            name: v.name,
            width: v.width,
            height: v.height,
            depth: v.length,
            weight: v.weight,
        }
    })

    const convertToMySQLDate = (isoDate) => {
        if (!isoDate) return null; // Handle null/undefined gracefully

        const date = new Date(isoDate);
        if (isNaN(date.getTime())) return null; // Ensure it's a valid date

        return date.toISOString().slice(0, 19).replace('T', ' ');
    };

    const transformedData = {
        name: formData?.fullName,
        email: formData?.email,
        phone: `${formData?.dialCode ?? '+44'}${formData?.phone}`,

        from_city: formData?.collectCity,
        from_country: formData?.collectCountry,
        from_postCode: formData?.collectPostcode,

        to_city: formData?.deliverCity,
        to_country: formData?.deliverCountry,
        to_postCode: formData?.deliverPostcode,

        Collection_Date: formData?.collectionDate && convertToMySQLDate(formData?.collectionDate),

        Standard_box: formData?.standardBox,
        Large_box: formData?.largeBox,
        Suitcase_small: formData?.suitcaseSmall,
        Suitcase_large: formData?.suitcaseLarge,
        Own_items: [...transformedCustomItems ?? [], ...transformedCommonItems ?? []],

    }
    const onSubmit = async () => {
        setError(undefined)
        // console.log(transformedData, "transformedData");

        // const url = process.env.NEXT_PUBLIC_FETCH_URL;
        const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;

        if (process.env.NODE_ENV === "development") {
            console.log(transformedData, 'data');
        }
        try {
            const res = await fetch('/api/proxy', {
                method: "POST",
                headers: {
                    "http-referer": hv,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transformedData),
            });

            if (activeStep !== 0) {
                if (res.ok) {
                    const prc = await res.json();
                    if (process.env.NODE_ENV === "development") {
                        console.log(prc);
                    }

                    setActiveStep(2)

                    prc && setPrices(prc);
                }
            }
        } catch (error) {
            console.log("fetch error:", error);
            setError(error.message)
        }
    }

    const nextStep = async () => {
        const valid = await trigger(Object.keys(stepSchemas[activeStep].fields) as any); // Validate only current step fields
        if (valid) {
            if (activeStep === 0) {
                await onSubmit()
            }
            setActiveStep((prev) => prev + 1);
        }
    };

    const onInvalid: SubmitErrorHandler<OfferFormType> = (data) => {
        console.log('invalid', data, form.getValues())
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">

            <PageLayout hidePopUpButton hideFooter>
                <Stack sx={{ backgroundColor: "#efefef", minHeight: 'calc(100vh - 100px)' }}>
                    <MaxWidthContainer sx={{ px: { xl: 2, sm: 2, xs: 0 }, }}>
                        <Stack mx="auto" maxWidth="lg" width="100%">
                            <HorizontalStepper validateForm={validateForm} error={error} disablePricesButton={prices == null}
                                activeStep={activeStep} setActiveStep={setActiveStep} />

                            <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
                                {/* Step 1: Contact details & Dates */}
                                {activeStep === 0 && (
                                    <DetailsAndDatesStep
                                        form={form}
                                    />
                                )}

                                {/* Step 2: Your inventory */}
                                {activeStep === 1 && (
                                    <InventoryStep
                                        form={form}
                                    />
                                )}
                                {/* Step 3: Price options */}
                                {activeStep === 2 && (
                                    <PriceOptionsStep
                                        error={error}
                                        prices={prices}
                                        transformedData={transformedData}
                                        form={form} countriesData={countriesData}
                                        nextStep={nextStep} activeStep={activeStep}
                                    />
                                )}

                                {activeStep !== 2 && <Stack sx={{ maxWidth: { xs: "100%", md: '100%' }, width: '100%', position: 'fixed', left: 0, bottom: 0, zIndex: 99 }}>
                                    <OfferSummaryBottomLine error={error} validateForm={validateForm} countriesData={countriesData} activeStep={activeStep} nextStep={nextStep} form={form} />
                                </Stack>}
                            </form>
                        </Stack>
                    </MaxWidthContainer>
                </Stack>

            </PageLayout>
        </LocalizationProvider>
    );
}
