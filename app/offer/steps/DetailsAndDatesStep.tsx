import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import DeliveryDateForm from '../DeliveryDateForm';
import { OfferFormType } from '../OfferNewPage';
import PersonalInformationForm from '../PersonalInformationForm';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
}

const DetailsAndDatesStep = ({ form, }: Props) => {

    return (
        <Card sx={{ p: { xs: 2, md: 4 }, pb: 0, width: "100%", mx: "auto", mb: { xs: '80px', md: '120px' } }}>
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
                    <Stack sx={{ position: 'relative', zIndex: 2 }} direction={'row'} width={'100%'} justifyContent={'flex-start'}>
                        <DeliveryDateForm form={form} />
                    </Stack>
                </Stack>

            </Stack>
            {/* <Stack direction={'row'}
                sx={{
                    zIndex: 1,
                    transform: { xs: 'scale(.7)', sm: 'scale(1)' },
                    position: 'relative',
                    mt: { xs: -4, sm: 2, md: -12 },
                    left: { xs: -100, sm: -20, md: -20 },
                    bottom: { xs: -50, sm: 10, md: -34 },
                }}>
                <Stack sx={{
                }}>
                    <Image
                        alt="background"
                        src={"/deliveri-2-1.png"}
                        width={700}
                        height={260}
                        style={{
                            objectFit: "contain"

                        }}
                    />
                </Stack>
            </Stack> */}
        </Card>
    )
}

export default DetailsAndDatesStep
