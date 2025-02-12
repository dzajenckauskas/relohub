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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DeliveryDateForm from "./DeliveryDateForm";
import HorizontalStepper from "./HorizontalStepper";
import LuggageInformationForm from "./LuggageInformationForm";
import OfferSummary from "./OfferSummary";
import PersonalInformationForm from "./PersonalInformationForm";
import Image from "next/image";

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
    collectionDate: Date;
    deliverBoxesDate: Date;
    emptyBoxesQuantity: number;
};

export type CustomItemType = {
    name: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
}
// Step-based validation schemas

const customItemSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    width: yup.string().required('Width is required'),
    height: yup.string().required('Height is required'),
    depth: yup.string().required('Depth is required'),
    weight: yup.string().required('Weight is required'),
});

const stepSchemas = [
    yup.object({
        fullName: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string().nullable(),
        collectionDate: yup.date().required('Collection date is required'),
    }),
    yup.object({
        standardBox: yup.number().min(0),
        largeBox: yup.number().min(0),
        suitcaseSmall: yup.number().min(0),
        suitcaseLarge: yup.number().min(0),
        customItems: yup.array().of(customItemSchema).test(
            'custom-items-required',
            'All custom item fields are required',
            (customItems) => {
                if (customItems && customItems.length > 0) {
                    return customItems.every(item =>
                        item.name &&
                        item.width &&
                        item.height &&
                        item.depth &&
                        item.weight
                    );
                }
                return true;
            }
        ),
    }).test(
        'at-least-one-box',
        'At least one box or suitcase must be greater than 0',
        (values) =>
            (values.standardBox || 0) > 0 ||
            (values.largeBox || 0) > 0 ||
            (values.suitcaseSmall || 0) > 0 ||
            (values.suitcaseLarge || 0) > 0
    ),
    yup.object({
    }),
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
        defaultValues: {
            collectCountry: capitalizeEachWord(dataParam?.from_country) ?? "United Kingdom",
            collectCity: capitalizeEachWord(dataParam?.from_city) ?? "London",
            collectPostcode: capitalizeEachWord(dataParam?.from_postCode) ?? "HP23DS",
            deliverCountry: capitalizeEachWord(dataParam?.to_country) ?? "United States",
            deliverCity: capitalizeEachWord(dataParam?.to_city) ?? "Boston",
            deliverPostcode: capitalizeEachWord(dataParam?.to_postCode) ?? "BO5345",

            fullName: "John Rambo",
            email: 'johhnyboy@rambo.com',
            phone: '07123903433',

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
            // deliverBoxesDate: new Date('2025-02-20'),
        }
    });

    const { handleSubmit, formState: { errors }, trigger, control } = form;

    const nextStep = async () => {
        console.log(form.getValues(), "form.getValues()");

        const valid = await trigger(Object.keys(stepSchemas[activeStep].fields) as any); // Validate only current step fields
        console.log(stepSchemas[activeStep].fields, "stepSchemas[activeStep].fields");

        if (valid) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const onSubmit = (data: OfferFormType) => {
        console.log("Form Data:", data)
        setActiveStep(undefined)
    }


    return (
        <PageLayout hidePopUpButton>
            <Stack sx={{ backgroundColor: "#efefef" }}>
                <MaxWidthContainer>
                    <Stack mx="auto" maxWidth="lg" width="100%">
                        <HorizontalStepper activeStep={activeStep} setActiveStep={setActiveStep} />

                        <form onSubmit={handleSubmit((data) => {
                            onSubmit(data)
                        })} noValidate>
                            {/* Step 1: Contact details & Dates */}
                            {activeStep === 0 && (
                                <Card sx={{ p: 4, pb: 0, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Personal</b> Details</Typography>
                                            <PersonalInformationForm form={form} errors={errors} />
                                            <Stack direction={'row'} justifyContent={'flex-start'}>
                                                <DeliveryDateForm form={form} />
                                            </Stack>
                                            <Box>
                                                <Button onClick={nextStep} variant="contained" color="secondary"
                                                    sx={{ px: 6, py: 2 }}>
                                                    Next step
                                                </Button>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%', position: 'relative' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
                                            <Stack sx={{ position: 'relative', mt: 2, bottom: -24, right: 135, width: '100%' }}>
                                                <Image
                                                    alt="background"
                                                    src={"/illustration-2.svg"}
                                                    objectFit="contain"
                                                    width={500}
                                                    height={310}
                                                />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Card>
                            )}

                            {/* Step 2: Your inventory */}
                            {activeStep === 1 && (
                                <Card sx={{ p: 4, pb: 0, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Boxes & Luggage</b> Details</Typography>
                                            <LuggageInformationForm form={form} />
                                            <Box>
                                                <Button onClick={nextStep} variant="contained" color="secondary"
                                                    sx={{ px: 6, py: 2 }}>
                                                    Next step
                                                </Button>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%', position: 'relative' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
                                            <Stack sx={{ position: 'relative', mt: 0, bottom: -10, right: 150, width: '100%' }}>
                                                <Image
                                                    alt="background"
                                                    src={"/illustration-1.svg"}
                                                    objectFit="contain"
                                                    width={480}
                                                    height={250}
                                                />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Card>
                            )}

                            {/* Step 3: Price options */}
                            {activeStep === 2 && (
                                <Card sx={{ p: 4, pb: 0, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Price Options</b></Typography>
                                            {/* <LuggageInformationForm form={form} /> */}
                                            <Box>
                                                <Button onClick={nextStep} variant="contained" color="secondary"
                                                    sx={{ px: 6, py: 2 }}>
                                                    Next step
                                                </Button>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%', position: 'relative', height: '100%' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
                                            <Stack sx={{ position: 'relative', mt: -4, bottom: -50, right: 2, width: '100%' }}>
                                                <Image
                                                    alt="background"
                                                    src={"/illustration-3.svg"}
                                                    objectFit="contain"
                                                    width={320}
                                                    height={320}
                                                />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Card>
                            )}

                            {/* Step 4: Submitted */}
                            {activeStep === undefined && (
                                <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 10 }}>
                                    <Typography variant="h2" sx={{ fontWeight: 500 }}><b>Thank you</b> for submission</Typography>
                                    <Stack direction="row" gap={2} pb={2} pt={4}>
                                        <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                            {/* <StyledTextInput
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
