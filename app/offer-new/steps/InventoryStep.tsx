import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import CommonItemsForm from '../CommonItemsForm';
import LuggageInformationForm from '../LuggageInformationForm';
import { OfferFormType } from '../OfferNewPage';
import ErrorMessage from './ErrorMessage';
type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
    error?: string;
}

const InventoryStep = ({ form, error }: Props) => {
    return (
        <Card sx={{ p: 4, width: "100%", mx: "auto", mb: 36, pb: 0 }}>
            <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 4, md: 8 }} width={'100%'} maxWidth={{ xs: '100%', md: "100%" }}>
                    <Stack width={'100%'}>
                        <Typography variant="h2" sx={{ fontWeight: 500, pb: 1 }}>Your <b>Boxes & Luggage</b> Details</Typography>
                        <Divider />
                        <LuggageInformationForm form={form} />
                    </Stack>
                    <Stack width={'100%'}>
                        <Typography variant="h2" sx={{ fontWeight: 500, pb: 1 }}><b>Furniture</b> and <b>Appliances</b></Typography>
                        <Divider sx={{ mb: 2 }} />
                        <CommonItemsForm form={form} />
                    </Stack>
                    {/* <Box pb={4} pt={2}>
                        <Button
                            // onClick={nextStep}
                            type='submit' variant="contained" color="secondary"
                            sx={{ px: 6, py: 2, mb: 1 }}>
                            Next step
                        </Button>
                        {form.formState.errors.hasItemsAdded?.message && (
                            <ErrorMessage message={form.formState.errors.hasItemsAdded.message} />
                        )}
                        
                    </Box> */}
                </Stack>
            </Stack>

            <Stack sx={{ maxWidth: { xs: "100%", md: '100%' }, width: '100%', position: 'relative', zIndex: 0 }}>
                {/* <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} /> */}
                {/* {form.formState?.errors?.hasItemsAdded && (
                    <ErrorMessage message={form.formState?.errors?.hasItemsAdded.message} />)} */}
                <Stack sx={{ position: 'relative', mt: -8, bottom: -14, right: { xs: 0, md: -50 }, width: '100%' }}>
                    <Image
                        alt="background"
                        src={"/illustration-1.svg"}
                        style={{
                            objectFit: "contain"
                        }}
                        width={480}
                        height={250}
                    />
                </Stack>
            </Stack>

        </Card>
    )
}

export default InventoryStep
