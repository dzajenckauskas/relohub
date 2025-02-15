import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import LuggageInformationForm from '../LuggageInformationForm';
import { OfferFormType } from '../OfferNewPage';
import OfferSummary from '../OfferSummary';
import FormHelperText from '@mui/material/FormHelperText';

type Props = {
    countriesData?: CountriesResponseType;
    form: UseFormReturn<OfferFormType, any, undefined>;
    nextStep: () => Promise<void>;
    activeStep: number;
}

const InventoryStep = ({ form, nextStep, countriesData, activeStep }: Props) => {
    return (
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
                    {/* {form.formState.errors.customItems?.message && (
                        <FormHelperText error>{form.formState.errors.customItems.message}</FormHelperText>
                    )}

                    {form.formState.errors.standardBox?.message && (
                        <FormHelperText error>{form.formState.errors.standardBox.message}</FormHelperText>
                    )} */}
                    {form.formState.errors.hasItemsAdded?.message && (
                        <FormHelperText error>{form.formState.errors.hasItemsAdded.message}</FormHelperText>
                    )}
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
    )
}

export default InventoryStep
