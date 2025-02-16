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
import NoPricePopup from "@/COMPONENTS/offer_page/nopricepopup";
import OfferPopup from "@/COMPONENTS/offer_page/offerPopup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
                return invalid
            },
            then: () => yup.boolean().required(('At least one item must be selected')),
            otherwise: () => yup.boolean().nullable()
        }),
    }),
    // yup.object({}),
];



type Props = {
    countriesData?: CountriesResponseType;
}
export default function OfferNewPage({ countriesData }: Props) {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);

    const [activeStep, setActiveStep] = useState<number | undefined>(0);

    const [showPopUp, setShowPopUp] = useState(false);
    const [showpopupofprices, setshowpopupofprices] = useState(false);
    const [nopricepopup, setshownopricepopup] = useState(false);
    const [prices, setprices] = useState(null);


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
        const valid = await trigger(Object.keys(stepSchemas[activeStep].fields) as any); // Validate only current step fields
        if (valid) {
            setActiveStep((prev) => prev + 1);
        }
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
            depth: v.width,
            weight: v.weight,
        }
    })
    const transformedCommonItems = commonItems?.map((v) => {
        return {
            quantity: 1,
            name: v.name,
            width: v.width,
            height: v.height,
            depth: v.width,
            weight: v.weight,
        }
    })
    const transformedData = {
        name: formData?.fullName,
        email: formData?.email,
        phone: formData?.phone,

        from_city: formData?.collectCity,
        from_country: formData?.collectCountry,
        from_postCode: formData?.collectPostcode,

        to_city: formData?.deliverCity,
        to_country: formData?.deliverCountry,
        to_postCode: formData?.deliverPostcode,

        Collection_Date: formData?.collectionDate,

        Standard_box: formData?.standardBox,
        Large_box: formData?.largeBox,
        Suitcase_small: formData?.suitcaseSmall,
        Suitcase_large: formData?.suitcaseLarge,
        Own_items: [...transformedCustomItems ?? [], ...transformedCommonItems ?? []],

    }
    const onSubmit = async (data: OfferFormType) => {
        // {
        //     "name": "TEST",
        //     "Empty_Box_Delivery_Date": "",
        //     "email": "TEST@TEST",
        //     "from_city": "abades",
        //     "from_country": "spain",
        //     "to_city": "aiseau",
        //     "to_country": "belgium",
        //     "Standard_box": "1",
        //     "Large_box": "1",
        //     "Suitcase_small": "1",
        //     "Suitcase_large": "1",
        //     "Own_items": [
        //       {
        //         "id": "1739707814201",
        //         "quantity": "1",
        //         "name": "TEST",
        //         "width": "123",
        //         "height": "123",
        //         "depth": "123",
        //         "weight": "123"
        //       }
        //     ],
        //     "phone": "TEST",
        //     "from_postCode": "",
        //     "to_postCode": "",
        //     "Collection_Date": "2025-02-28"
        //   }

        console.log(transformedData, "transformedData");

        const url = process.env.NEXT_PUBLIC_FETCH_URL;
        const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;

        if (process.env.NODE_ENV === "development") {
            console.log(transformedData, 'data');
            setShowPopUp(!showPopUp)
            console.log(showPopUp, 'showPopUp');
        }
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "http-referer": hv,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transformedData),
            });

            if (res.ok) {
                const prc = await res.json();
                setShowPopUp(!showPopUp)

                if (process.env.NODE_ENV === "development") {
                    console.log(prc);
                }

                if (prc.price.length === 0) {
                    setshownopricepopup(true);
                } else {
                    setprices(prc);
                    setshowpopupofprices(true);
                }
            }
        } catch (error) {
            console.log("fetch error:", error);
        }

        console.log("Form Data:", data)
        setActiveStep(2)
        // setActiveStep(undefined)
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

                            {/* {(!showPopUp
                                && showpopupofprices
                            ) ? ( */}
                            <Elements stripe={stripePromise}>
                                <OfferPopup
                                    hidePopup={(v) => {
                                        setshowpopupofprices(v);
                                    }}
                                    state={transformedData}
                                    prices={prices}
                                />
                            </Elements>
                            {/* ) 
                            : null} */}
                            {/* {(!showPopUp
                                && nopricepopup
                            ) ? ( */}
                            {/* <NoPricePopup
                                setshownopricepopup={(v) => {
                                    setshownopricepopup(v);
                                }}
                            /> */}
                            {/* ) : null} */}
                        </form>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
        </PageLayout>
    );
}
