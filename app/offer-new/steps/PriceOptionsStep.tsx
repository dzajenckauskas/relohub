import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import NoPricePopup from '../NoPricePopup';
import { OfferFormType } from '../OfferNewPage';
import OfferSummary from '../OfferSummary';
import PriceOffer from '../PriceOffer';
import PriceOfferNew from '../PriceOfferNew';
import Divider from '@mui/material/Divider';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);

type Props = {
    countriesData?: CountriesResponseType;
    form: UseFormReturn<OfferFormType, any, undefined>;
    nextStep: () => Promise<void>;
    activeStep: number;
    prices: any;
    transformedData: any;
    error: string;
}

const PriceOptionsStep = ({ error, transformedData, form, nextStep, countriesData, activeStep, prices }: Props) => {
    console.log(error, "ERROR");

    return (
        <Card sx={{ p: 4, pb: 0, width: "100%", mx: "auto", mb: 10 }}>
            <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                    {
                        prices?.length !== 0 &&
                        <>
                            <Stack gap={2}>

                                <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Price Options</b></Typography>
                                <Divider />
                            </Stack>
                            <Elements stripe={stripePromise}>
                                <PriceOfferNew
                                    activeStep={activeStep}
                                    form={form}
                                    state={transformedData}
                                    prices={prices}
                                // prices={{
                                //     price: {
                                //         ROAD: 123,
                                //         SEA: 234,
                                //         'AIR COURIER': 345,
                                //         "AIR FREIGHT (TO-AIRPORT)": 456,
                                //         "AIR FREIGHT (TO-DOOR)": 687,
                                //     }
                                // }}
                                />
                            </Elements>
                        </>
                    }
                    {
                        prices?.length === 0 &&
                        <>
                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Request <b>has been received</b></Typography>
                            <NoPricePopup />
                        </>
                    }
                    {/* <Box>
                        <Button onClick={nextStep} variant="contained" color="secondary"
                            sx={{ px: 6, py: 2 }}>
                            Next step
                        </Button>
                        {error && <ErrorMessage message={error} />}
                    </Box> */}

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
