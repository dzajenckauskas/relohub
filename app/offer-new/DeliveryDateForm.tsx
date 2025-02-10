import { theme } from '@/COMPONENTS/common/shared/Theme';
import { Remove } from '@mui/icons-material';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';
import localeData from 'dayjs/plugin/localeData';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import LuggageItemRow from './LuggageItemRow';
import { OfferFormType } from './OfferNewPage';
import FormHelperText from '@mui/material/FormHelperText';

dayjs.extend(localeData);

// Set the locale globally
dayjs.locale('en-gb');

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
}

function isPastOrWeekendOrFutureWorkingDay(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = date.getDay();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 2);
    return (
        date < today ||
        day === 0 ||  // Sunday
        day === 6 ||  // Saturday
        (date >= today && date <= futureDate)
    );
}


const DeliveryDateForm = ({ form }: Props) => {
    const [deliverBoxes, setDeliverBoxes] = useState(false)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <Stack direction="row" gap={2} pb={2} pt={2} width={'100%'}>
                <Box flex={1} display="flex" flexDirection="column" gap={3} width={'100%'}>

                    {/* {!deliverBoxes && */}
                    <>
                        <Typography variant="h2" sx={{ fontWeight: 500 }}>Select <b>Your  Collection</b> Date</Typography>
                        <Typography>Please select the date you would prefer your items to be collected. <br />
                            <b>(collection is between 9am and 6pm daily.)</b></Typography>
                        <DateCalendar
                            sx={{ m: 0 }}
                            slotProps={{
                            }}
                            onChange={(v) => {
                                console.log(v?.toDate(), "Selected Date");
                                form.setValue('collectionDate', v?.toDate())
                                return v;
                            }}
                            // value={dayjs(form.getValues('collectionDate'))}
                            shouldDisableDate={(date: Dayjs) =>
                                isPastOrWeekendOrFutureWorkingDay(date.toDate())
                            }
                        />
                        {form.formState?.errors?.collectionDate && (
                            <FormHelperText error>{form.formState?.errors?.collectionDate.message}</FormHelperText>
                        )}

                    </>

                    <Stack>
                        <Box pb={1}>
                            <Divider />
                        </Box>

                        {deliverBoxes &&
                            <Stack
                                pt={1}
                                onClick={() => {
                                    setDeliverBoxes(false)
                                    form.setValue('deliverBoxesDate', null)
                                    form.setValue('emptyBoxesQuantity', undefined)
                                }}
                                direction={'row'}
                                sx={{ cursor: 'pointer' }}
                                justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                                <Remove fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                                <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                                    I DONT'T NEED EMPTY BOXES
                                </Typography>
                            </Stack>}
                        {!deliverBoxes &&
                            <Stack
                                pt={1}
                                onClick={() => setDeliverBoxes(true)}
                                direction={'row'}
                                sx={{ cursor: 'pointer' }}
                                justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                                <Add fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                                <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                                    I NEED EMPTY BOXES FOR DELIVERY
                                </Typography>
                            </Stack>}


                    </Stack>
                    {deliverBoxes && <>
                        <Typography>Please select quantity and the date you would prefer <br /> your <b>empty boxes to be delivered:</b></Typography>
                        <LuggageItemRow form={form} dimensions={'100 x 80 x 60 cm'} maxWeight={'20'} primaryText={'Cardboard box'} secondaryText={'Large'} name={'emptyBoxesQuantity'} />
                        <DateCalendar
                            slotProps={{

                            }}
                            sx={{ m: 0 }}
                            onChange={(v) => {
                                console.log(v?.toDate(), "Selected Date");
                                form.setValue('deliverBoxesDate', v?.toDate())
                                return v;
                            }}
                            shouldDisableDate={(date: Dayjs) =>
                                isPastOrWeekendOrFutureWorkingDay(date.toDate())
                            }
                        />
                        {form.formState?.errors?.deliverBoxesDate && (
                            <FormHelperText error>{form.formState?.errors?.deliverBoxesDate.message}</FormHelperText>
                        )}

                    </>}

                </Box>
            </Stack>
        </LocalizationProvider>
    );
}

export default DeliveryDateForm;
