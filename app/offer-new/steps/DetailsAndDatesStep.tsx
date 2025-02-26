import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import DeliveryDateForm from '../DeliveryDateForm';
import { OfferFormType } from '../OfferNewPage';
import PersonalInformationForm from '../PersonalInformationForm';
import ErrorMessage from './ErrorMessage';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
}

const DetailsAndDatesStep = ({ form, }: Props) => {

    return (
        <Card sx={{ p: { xs: 2, md: 4 }, pb: 0, width: "100%", mx: "auto", mb: 24 }}>
            <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 0, md: 6 }} width={'100%'}>
                <Stack direction={{ xs: 'column', md: "row" }} justifyContent={'space-between'}
                    pb={2} width={'100%'} gap={{ xs: 5, md: 10 }}
                    maxWidth={{ xs: '100%', md: "100%" }}>
                    <Stack gap={3} width={'100%'} position={'relative'} sx={{
                        mb: 0

                    }}>
                        <Stack gap={2}>
                            <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Personal</b> Details</Typography>
                            <Divider />
                        </Stack>
                        <PersonalInformationForm form={form} errors={form.formState.errors} />

                    </Stack>
                    <Stack direction={'row'} width={'100%'} justifyContent={'flex-start'}>
                        <DeliveryDateForm form={form} />
                    </Stack>
                </Stack>

            </Stack>
            {/* {hasErrors && <ErrorMessage message={'Check form for errors'} />} */}

            {/* <Box pb={4} pt={2}>
                <Button onClick={nextStep} variant="contained" color="secondary"
                    sx={{ px: 6, py: 2 }}>
                    Next step
                </Button>
                {hasErrors && <ErrorMessage message={'Check form for errors'} />}

            </Box> */}
            <Stack direction={'row'}
                sx={{
                    position: 'relative',
                    mt: { xs: 0, md: -8 },
                    bottom: { xs: -20, md: -34 },
                    // minHeight: 300,
                    // right: { xs: 0, md: -100 },
                    // width: '100%'
                }}>
                <Stack sx={{
                    // position: 'absolute', mt: 2, bottom: -24,
                    // right: 0,
                    //  right: { xs: -210, md: 135 },
                    // width: '100%'
                }}>
                    <Image
                        alt="background"
                        // src={"/illustration-2.svg"}
                        src={"/deliveri-2-1.png"}
                        width={700}
                        height={260}
                        style={{
                            objectFit: "contain"

                        }}
                    />
                </Stack>
            </Stack>
        </Card>
    )
}

export default DetailsAndDatesStep
