"use client";
import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import HorizontalStepper from "./HorizontalStepper";
import OfferSummary from "./OfferSummary";
import StyledTextInput from "./StyledTextInput";
import { capitalizeEachWord } from "@/COMPONENTS/common/shared/capitalizeEachWord";
import PersonalInformationForm from "./PersonalInformationForm";
import { CountriesResponseType } from "@/COMPONENTS/types/CountryType";
import LuggageItemRow from "./LuggageItemRow";
import { Add } from "@mui/icons-material";
import { theme } from "@/COMPONENTS/common/shared/Theme";
import AddItemForm from "./AddItemForm";
import CloseIcon from '@mui/icons-material/Close';

export type OfferFormType = {
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
    standardBox: number;
    largeBox: number;
    suitcaseSmall: number;
    suitcaseLarge: number;
    customItems: CustomItemType[]
};

type CustomItemType = {
    name: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
}
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
            firstName: "John",
            lastName: "Rambo",
            email: 'johhnyboy@rambo.com',
            phone: '07123903433',
            collectCountry: capitalizeEachWord(dataParam?.from_country) ?? "United Kingdom",
            collectCity: capitalizeEachWord(dataParam?.from_city) ?? "London",
            collectPostcode: capitalizeEachWord(dataParam?.from_postCode) ?? "HP23DS",
            deliverCountry: capitalizeEachWord(dataParam?.to_country) ?? "United States",
            deliverCity: capitalizeEachWord(dataParam?.to_city) ?? "Boston",
            deliverPostcode: capitalizeEachWord(dataParam?.to_postCode) ?? "BO5345",
        }
    });

    const { handleSubmit, formState: { errors }, trigger, control } = form;

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


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'customItems'
    });
    console.log(fields, "fields");

    const customItems = form.watch('customItems')
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
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Personal</b> Details</Typography>
                                            <PersonalInformationForm form={form} errors={errors} />
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
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
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Boxes & Luggage</b> Details</Typography>
                                            <Stack direction="row" gap={2} pb={2} pt={2} >
                                                <Box flex={1} display="flex" flexDirection="column" gap={3}>
                                                    <LuggageItemRow
                                                        primaryText="Standard"
                                                        secondaryText="Box"
                                                        dimensions="41 x 41 x 41 cm"
                                                        maxWeight="20"
                                                        form={form}
                                                        name={'standardBox'}
                                                    />
                                                    <LuggageItemRow
                                                        primaryText="Large"
                                                        secondaryText="Box"
                                                        dimensions="51 x 51 x 51 cm"
                                                        maxWeight="30"
                                                        form={form}
                                                        name={'largeBox'}
                                                    />
                                                    <LuggageItemRow
                                                        primaryText="Suitcase"
                                                        secondaryText="Small"
                                                        dimensions="18 x 32 x 45 cm"
                                                        maxWeight="20"
                                                        form={form}
                                                        name={'suitcaseSmall'}
                                                    />
                                                    <LuggageItemRow
                                                        primaryText="Suitcase"
                                                        secondaryText="Large"
                                                        dimensions="36 x 47 x 70 cm"
                                                        maxWeight="30"
                                                        form={form}
                                                        name={'suitcaseLarge'}
                                                    />
                                                    <Stack>
                                                        <Box pb={1}>
                                                            <Divider />
                                                        </Box>

                                                        {/* {!addItem && */}
                                                        {/* {addItem && */}
                                                        <>
                                                            {fields?.reverse()?.map((ci, i) => {
                                                                return <Stack alignItems={'stretch'} pb={2}>
                                                                    <Button sx={{
                                                                        minWidth: 10, alignSelf: 'flex-end',
                                                                        //  position: 'relative', top: 3, right: 3
                                                                    }}
                                                                        onClick={() => remove(i)}
                                                                    >
                                                                        <CloseIcon fontSize='large' sx={{ fontSize: 20 }} />
                                                                    </Button>
                                                                    <AddItemForm form={form} errors={form.formState.errors} index={i} />
                                                                    <Box sx={{ pt: 1 }}>
                                                                        <Divider />
                                                                    </Box>
                                                                </Stack>
                                                            })}
                                                        </>

                                                        {/* } */}
                                                        <Stack
                                                            pt={1}
                                                            onClick={async () => await append({} as CustomItemType)}

                                                            direction={'row'}
                                                            sx={{ cursor: 'pointer' }}
                                                            justifyContent={'center'} alignItems={'center'} gap={2}>
                                                            <Add fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                                                            <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                                                                ADD YOUR OWN ITEM
                                                            </Typography>
                                                        </Stack>
                                                        <Box pt={2}>
                                                            <Divider />
                                                        </Box>

                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
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
                                    <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} pb={2} width={'100%'}>
                                        <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
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
                                        <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%' }}>
                                            <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
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
