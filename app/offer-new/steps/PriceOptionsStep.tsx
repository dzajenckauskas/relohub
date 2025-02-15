import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import { OfferFormType } from '../OfferNewPage';
import OfferSummary from '../OfferSummary';

type Props = {
    countriesData?: CountriesResponseType;
    form: UseFormReturn<OfferFormType, any, undefined>;
    nextStep: () => Promise<void>;
    activeStep: number;
}

const PriceOptionsStep = ({ form, nextStep, countriesData, activeStep }: Props) => {
    return (
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
                            style={{
                                objectFit: "contain"
                            }}
                            width={320}
                            height={320}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}

export default PriceOptionsStep
