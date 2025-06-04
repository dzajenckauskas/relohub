import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { UseFormReturn } from 'react-hook-form';
import NoPricePopup from '../NoPricePopup';
import { OfferFormType } from '../OfferNewPage';
import OfferSummary from '../OfferSummary';
import PriceOfferNew from '../PriceOfferNew';
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

const PriceOptionsStep = ({ transformedData, form, countriesData, activeStep, prices }: Props) => {
    return (
        <Card sx={{ p: { xs: 2, md: 4 }, pb: 0, width: "100%", mx: "auto", mb: '120px' }}>
            <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                <Stack direction="column" gap={2} pb={2} width={'100%'} maxWidth={{ xs: '100%', md: "70%" }}>
                    {
                        prices?.price?.length !== 0 &&
                        <>

                            <Elements stripe={stripePromise}>
                                <PriceOfferNew
                                    activeStep={activeStep}
                                    form={form}
                                    state={transformedData}
                                    prices={prices}
                                // prices={{
                                //     ROAD: 123,
                                //     SEA: 234,
                                //     'AIR COURIER': 345,
                                //     "AIR FREIGHT (TO-AIRPORT)": 456,
                                //     "AIR FREIGHT (TO-DOOR)": 687,
                                // }}
                                />
                            </Elements>
                        </>
                    }
                    {
                        prices?.price?.length === 0 &&
                        <>
                            <Stack gap={2}>
                                <Typography variant="h2" sx={{ fontWeight: 500 }}>Request <b>has been received</b></Typography>
                                <Divider />
                            </Stack>
                            <NoPricePopup />
                        </>
                    }
                </Stack>
                <Stack sx={{ maxWidth: { xs: "100%", md: '30%' }, width: '100%', position: 'relative', height: '100%' }}>
                    <OfferSummary countriesData={countriesData} activeStep={activeStep} form={form} />
                    {/* <Stack sx={{ position: 'relative', mt: -5, bottom: -60, right: 2, width: '100%' }}>
                        <Image
                            alt="background"
                            src={"/illustration-3.svg"}
                            style={{
                                objectFit: "contain"
                            }}
                            width={320}
                            height={320}
                        />
                    </Stack> */}
                </Stack>
            </Stack>
        </Card>
    )
}

export default PriceOptionsStep
