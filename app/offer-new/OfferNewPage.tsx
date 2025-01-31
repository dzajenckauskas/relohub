"use client";
import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import HorizontalStepper from "./HorizontalStepper";
import OfferSummary from "./OfferSummary";
import StyledTextInput from "./StyledTextInput";
import { capitalizeEachWord } from "@/COMPONENTS/common/shared/capitalizeEachWord";

type OfferFormType = {
    firstName: string;
    lastName: string;
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
};

// Step-based validation schemas
const stepSchemas = [
    yup.object({
        firstName: yup.string().required("Name is required"),
        lastName: yup.string().required("Surname is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string().nullable(),
    }),
    yup.object({
        something: yup.string().required("This field is required"),
    }),
    yup.object({
        somethingelse: yup.string().required("This field is required"),
    }),
];

export default function OfferNewPage() {
    const [activeStep, setActiveStep] = useState<number | undefined>(0);


    const searchParams = useSearchParams();
    const dataParam = JSON.parse(searchParams.get("data"))

    const form = useForm<OfferFormType>({
        resolver: yupResolver(stepSchemas[activeStep] as any) as any, // Change schema dynamically
        mode: "onTouched",
        defaultValues: {
            firstName: "John",
            lastName: "Rambo",
            email: 'johhnyboy@rambo.com',
            phone: '07123903433',
            collectCountry: capitalizeEachWord(dataParam.from_country) ?? "United Kingdom",
            collectCity: capitalizeEachWord(dataParam.from_city) ?? "London",
            collectPostcode: capitalizeEachWord(dataParam.from_postCode) ?? "HP23DS",
            deliverCountry: capitalizeEachWord(dataParam.to_country) ?? "United States",
            deliverCity: capitalizeEachWord(dataParam.to_country) ?? "Boston",
            deliverPostcode: capitalizeEachWord(dataParam.to_postCode) ?? "BO5345",
        }
    });

    const { handleSubmit, formState: { errors }, trigger } = form;

    const nextStep = async () => {
        const valid = await trigger(Object.keys(stepSchemas[activeStep].fields) as any); // Validate only current step fields
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
                            {/* Step 1: Personal Info */}
                            {activeStep === 0 && (
                                <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 8 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "60%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Personal</b> Details</Typography>
                                            <Stack direction="row" gap={2} pb={2} pt={2} >
                                                <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                                    <StyledTextInput
                                                        label="Name"
                                                        form={form}
                                                        name="firstName"
                                                        error={!!errors.firstName}
                                                        helperText={errors.firstName?.message}
                                                    />
                                                    <StyledTextInput
                                                        label="Surname"
                                                        form={form}
                                                        name="lastName"
                                                        error={!!errors.lastName}
                                                        helperText={errors.lastName?.message}
                                                    />
                                                </Box>
                                                <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                                    <StyledTextInput
                                                        label="Email"
                                                        form={form}
                                                        name="email"
                                                        error={!!errors.email}
                                                        helperText={errors.email?.message}
                                                    />
                                                    <StyledTextInput
                                                        label="Telephone"
                                                        form={form}
                                                        name="phone"
                                                        error={!!errors.phone}
                                                        helperText={errors.phone?.message}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '40%' }, width: '100%' }}>
                                            <OfferSummary activeStep={activeStep} form={form} />
                                        </Stack>
                                    </Stack>
                                    <Button onClick={nextStep} variant="contained" color="secondary"
                                        sx={{ px: 6, py: 2 }}>
                                        Next step
                                    </Button>
                                </Card>
                            )}

                            {/* Step 2: Some Info */}
                            {activeStep === 1 && (
                                <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 8 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "60%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Boxes & Luggage</b> Details</Typography>
                                            <Stack direction="row" gap={2} pb={2} pt={2} >
                                                <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                                    <StyledTextInput
                                                        label="Something"
                                                        form={form}
                                                        name="something"
                                                        error={!!errors.something}
                                                        helperText={errors.something?.message}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '40%' }, width: '100%' }}>
                                            <OfferSummary activeStep={activeStep} form={form} />
                                        </Stack>
                                    </Stack>
                                    <Button onClick={nextStep} variant="contained" color="secondary"
                                        sx={{ px: 6, py: 2 }}>
                                        Next step
                                    </Button>
                                </Card>
                            )}

                            {/* Step 3: Final Info */}
                            {activeStep === 2 && (
                                <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 10 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 8 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "60%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Final</b> Details</Typography>
                                            <Stack direction="row" gap={2} pb={2} pt={2} >
                                                <Box flex={1} display="flex" flexDirection="column" gap={2}>
                                                    <StyledTextInput
                                                        label="Something else"
                                                        form={form}
                                                        name="somethingelse"
                                                        error={!!errors.somethingelse}
                                                        helperText={errors.somethingelse?.message}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '40%' }, width: '100%' }}>
                                            <OfferSummary activeStep={activeStep} form={form} />
                                        </Stack>
                                    </Stack>
                                    <Button type="submit" variant="contained" color="secondary"
                                        sx={{ px: 6, py: 2 }}>
                                        Submit
                                    </Button>
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
