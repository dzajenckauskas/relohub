"use client";
import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { capitalizeEachWord } from "@/COMPONENTS/common/shared/capitalizeEachWord";
import { CountriesResponseType } from "@/COMPONENTS/types/CountryType";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import HorizontalStepper from "./HorizontalStepper";
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

const stepSchemas = [
    yup.object({
        fullName: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string().nullable(),
        collectionDate: yup.date().required('Collection date is required'),
    }),
    yup.object({
        customItems: yup.array().of(customItemSchema).default([]),
        hasItemsAdded: yup.boolean().when(['customItems', 'commonItems', 'standardBox', 'largeBox', 'suitcaseSmall', 'suitcaseLarge'], {
            is: (commonItems: any[], customItems: any[], standardBox: number, largeBox: number, suitcaseSmall: number, suitcaseLarge: number) => {
                const invalid = ((commonItems?.length ?? 0) + (customItems?.length ?? 0) + (standardBox ?? 0) + (largeBox ?? 0) + (suitcaseSmall ?? 0) + (suitcaseLarge ?? 0)) <= 0
                console.log(invalid, "invalid");

                return invalid
            },
            then: () => yup.boolean().required(('At least one item must be selected')),
            otherwise: () => yup.boolean().nullable()
        }),
    }),
    yup.object({}),
];



type Props = {
    countriesData?: CountriesResponseType;
}
export default function OfferNewPage({ countriesData }: Props) {
    const [activeStep, setActiveStep] = useState<number | undefined>(0);


    const searchParams = useSearchParams();
    const dataParam = JSON.parse(searchParams.get("data"))

    const form = useForm<OfferFormType>({
        resolver: yupResolver(stepSchemas[activeStep] as any) as any, // Change schema dynamically
        mode: "onTouched",
        reValidateMode: 'onChange',
        defaultValues: {
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

            // fullName: "John Rambo",
            // email: 'johhnyboy@rambo.com',
            // phone: '07123903433',

            // standardBox: 1,
            // suitcaseLarge: 1,
            // suitcaseSmall: 2,
            // largeBox: 4,
            // customItems: [
            //     {
            //         name: 'Sack of potatoes',
            //         width: '200',
            //         height: '200',
            //         depth: '200',
            //         weight: '200',
            //     }
            // ],
            // emptyBoxesQuantity: 0,
            // collectionDate: new Date('2025-02-24'),
        }
    });

    const { handleSubmit, formState: { errors }, trigger, control } = form;

    const nextStep = async () => {
        console.log(form.getValues(), "form.getValues()");

        const valid = await trigger(Object.keys(stepSchemas[activeStep].fields) as any); // Validate only current step fields
        // console.log(stepSchemas[activeStep].fields, "stepSchemas[activeStep].fields");

        if (valid) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const onSubmit = (data: OfferFormType) => {
        console.log("Form Data:", data)
        setActiveStep(undefined)
    }
    const onInvalid: SubmitErrorHandler<OfferFormType> = (data) => {
        console.log('invalid', data, form.getValues())
    }

    return (
        <PageLayout hidePopUpButton>
            <Stack sx={{ backgroundColor: "#efefef" }}>
                <MaxWidthContainer>
                    <Stack mx="auto" maxWidth="lg" width="100%">
                        <HorizontalStepper activeStep={activeStep} setActiveStep={setActiveStep} />

                        <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
                            {/* Step 1: Contact details & Dates */}
                            {activeStep === 0 && (
                                <DetailsAndDatesStep form={form} countriesData={countriesData} nextStep={nextStep} activeStep={activeStep} />
                            )}

                            {/* Step 2: Your inventory */}
                            {activeStep === 1 && (
                                <InventoryStep form={form} countriesData={countriesData} nextStep={nextStep} activeStep={activeStep} />
                            )}

                            {/* Step 3: Price options */}
                            {activeStep === 2 && (
                                <PriceOptionsStep form={form} countriesData={countriesData} nextStep={nextStep} activeStep={activeStep} />


                            )}

                            {/* Step 4: Submitted */}
                            {activeStep === undefined && (
                                <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 10 }}>
                                    <Typography variant="h2" sx={{ fontWeight: 500 }}><b>Thank you</b> for submission</Typography>
                                    <Stack direction="row" gap={2} pb={2} pt={4}>
                                        <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                            {/* <FormStyledTextInput
                                                label="Something Else"
                                                form={form}
                                                name="somethingelse"
                                                error={!!errors.somethingelse}
                                                helperText={errors.somethingelse?.message}
                                            /> */}
                                        </Box>
                                    </Stack>
                                    <Button onClick={() => {
                                        form.reset()
                                        setActiveStep(0)
                                    }} variant="contained" color="secondary"
                                        sx={{ px: 6, py: 2 }}>
                                        Submit again
                                    </Button>
                                </Card>
                            )}
                        </form>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
        </PageLayout>
    );
}
