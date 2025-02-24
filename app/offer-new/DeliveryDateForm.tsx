import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
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

export function isPastOrWeekendOrFutureWorkingDay(date: Date) {
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
        <Stack direction="row" gap={2} pb={2} width={'100%'}>
            <Box flex={1} display="flex" flexDirection="column" gap={2} width={'100%'}>
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                    Select <b>Your Collection</b> Date
                </Typography>
                <Typography>Please select the date you would prefer your items to be collected.</Typography>
                <DateCalendar
                    value={form.getValues('collectionDate') ? dayjs(form.getValues('collectionDate')) : null} // Convert Date to Dayjs
                    sx={{
                        m: 0,
                        border: '3px solid black',
                        // transform: 'scale(1.2)',
                        mt: 2,
                        // ml: 4,
                        // mb: 2,
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
                        form.setValue('collectionDate', v?.toDate(), { shouldValidate: true }); // Ensure it's stored as Date and triggers validation
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
    );
};

export default DeliveryDateForm