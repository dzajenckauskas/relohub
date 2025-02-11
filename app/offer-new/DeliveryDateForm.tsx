import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';
import localeData from 'dayjs/plugin/localeData';
import { UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';

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
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <Stack direction="row" gap={2} pb={2} pt={2} width={'100%'}>
                <Box flex={1} display="flex" flexDirection="column" gap={2} width={'100%'}>
                    <Typography variant="h2" sx={{ fontWeight: 500 }}>
                        Select <b>Your Collection</b> Date
                    </Typography>
                    <Typography>Please select the date you would prefer your items to be collected.</Typography>
                    <DateCalendar
                        sx={{
                            m: 0,
                            border: '3px solid black',
                            transform: 'scale(1.2)',
                            mt: 6,
                            ml: 4,
                            mb: 2,
                            '& .MuiSvgIcon-root': {
                                fontSize: '2.5rem', // Increase icon size
                            },
                            '& .MuiDayCalendar-weekDayLabel, & .MuiDayCalendar-day': {
                                fontSize: '1.2rem', // Increase weekday label and day number size
                            },
                        }}
                        slotProps={{
                            previousIconButton: {
                                sx: { '& svg': { fontSize: '2.5rem' } }, // Larger previous arrow
                            },
                            nextIconButton: {
                                sx: { '& svg': { fontSize: '2.5rem' } }, // Larger next arrow
                            },
                        }}
                        onChange={(v) => {
                            console.log(v?.toDate(), "Selected Date");
                            form.setValue('collectionDate', v?.toDate());
                            return v;
                        }}
                        shouldDisableDate={(date: Dayjs) =>
                            isPastOrWeekendOrFutureWorkingDay(date.toDate())
                        }
                    />
                    {form.formState?.errors?.collectionDate && (
                        <FormHelperText error>{form.formState?.errors?.collectionDate.message}</FormHelperText>
                    )}
                </Box>
            </Stack>
        </LocalizationProvider>
    );
};

export default DeliveryDateForm