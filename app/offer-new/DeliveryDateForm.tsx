import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';
import localeData from 'dayjs/plugin/localeData';
import { Controller, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Divider from '@mui/material/Divider';
import { theme } from '@/COMPONENTS/common/shared/Theme';

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
        <Stack gap={2} width="100%">
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Select Your <b>Collection</b> Date
            </Typography>
            {/* <Divider /> */}
            <Typography variant="body1" color="text.secondary">
                Please select the date you would prefer your items to be collected
            </Typography>

            <Controller
                name="collectionDate"
                control={form.control}
                rules={{ required: 'Please select a date' }}
                render={({ field }) => (
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '100%', mt: 2 }}>
                        <DateCalendar
                            {...field}
                            value={field.value ? dayjs(field.value) : null}
                            onChange={(date: Dayjs | null) => field.onChange(date?.toISOString())}
                            disablePast
                            views={['day']}
                            shouldDisableDate={(date: Dayjs) =>
                                isPastOrWeekendOrFutureWorkingDay(date.toDate())
                            }
                            sx={{
                                width: '100%', // Make calendar full-width
                                maxWidth: '100%', // Ensure it does not shrink
                                borderRadius: '3px',
                                minHeight: 'fit-content',
                                // padding: 2,
                                // overflow: 'hidden',
                                border: `1px solid ${theme.palette.divider}`,
                                // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                '.MuiPickersCalendarHeader-root': {
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                    px: 4,
                                    mt: 4,
                                    pb: 4

                                },
                                '.MuiPickersCalendarHeader-label': {
                                    fontSize: '3rem'
                                },
                                '.MuiDayCalendar-header': {
                                    display: 'flex',
                                    width: '100% !important',
                                    justifyContent: 'space-between',
                                    pb: 2
                                    // p: 2,
                                    // justifyContent: 'center',
                                    // fontWeight: 'bold',
                                    // padding: '14px', // Larger click area
                                },
                                '.MuiPickersArrowSwitcher-root button': {
                                    color: '#D81B60',
                                    fontSize: '3rem',
                                },
                                '.MuiDayCalendar-root': {
                                    p: 4,
                                    overflow: 'none',
                                    minHeight: '450px !important',
                                    // height: '1000px !important',
                                    width: '100%', // Make sure the days container is also full width
                                },
                                '.MuiPickersSlideTransition-root': {
                                    minWidth: '100%', // Ensure the transition animation does not shrink width
                                },
                                '.MuiDayCalendar-weekContainer': {
                                    width: '100% !important',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                },
                                '.MuiDayCalendar-weekDayLabel': {
                                    fontSize: '2rem !important',
                                    fontWeight: 500,
                                    color: theme.palette.primary.main

                                },
                                '.MuiPickersDay-root': {
                                    fontWeight: 400,
                                    fontSize: '2rem',
                                    marginBottom: '10px',
                                    mt: 1
                                    // marginX: '9%', // Larger click area
                                    // width: '30px', // Ensures even spacing for full width layout
                                    // height: '30px', // Ensures even spacing for full width layout
                                },
                                '.MuiPickersDay-today': {
                                    border: '2px solid #D81B60',
                                },
                                '.MuiDayCalendar-slideTransition': {
                                    overflowX: 'visible'
                                },
                                '.MuiPickersDay-daySelected': {
                                    backgroundColor: '#D81B60 !important',
                                    color: '#fff !important',
                                    borderRadius: '50%',
                                    fontSize: '2rem',
                                },
                                '.MuiTypography-caption': {
                                    fontSize: '1.2rem',
                                },
                            }}
                        />
                    </Box>
                )}
            />
        </Stack>
    );
};

export default DeliveryDateForm