import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UseFormReturn } from 'react-hook-form';
import { isPastOrWeekendOrFutureWorkingDay } from './DeliveryDateForm';
import LocationsInformationForm from './LocationsInformationForm';
import LuggageInformationForm from './LuggageInformationForm';
import { OfferFormType } from './OfferNewPage';
import PersonalInformationForm from './PersonalInformationForm';
import ErrorMessage from './steps/ErrorMessage';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import FormHelperText from '@mui/material/FormHelperText';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    showPopUp?: boolean;
    togglePopUp: () => void;
    countriesData: CountriesResponseType;
    validateForm?: () => Promise<boolean>
}

const OfferSummaryFormCard = ({ validateForm, countriesData, form, showPopUp, togglePopUp }: Props) => {
    const hasErrors = Object.keys(form.formState.errors).length > 0;

    return (
        <Dialog
            sx={{ zIndex: 10, top: 50 }}
            open={showPopUp}
            // TransitionComponent={isMobile ? TransitionMobile : TransitionDesktop}
            keepMounted
            onClose={togglePopUp}
            PaperProps={{
                style: {

                },
            }}
        >
            <Box sx={{
                position: 'relative',
                p: 4,
                width: { xs: '95vw', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
                maxWidth: { xs: '95vw', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' }
            }}>
                {/* <InstantQuoteComponent togglePopUp={togglePopUp} title={
                } />
            */}
                <Stack alignItems={'stretch'} pb={2}>
                    <Button sx={{ minWidth: 10, alignSelf: 'flex-end', position: 'absolute', top: 3, right: 3 }} onClick={togglePopUp}>
                        <CloseIcon fontSize='large' sx={{ fontSize: 30 }} />
                    </Button>
                    <Typography variant="h2" sx={{ fontWeight: 500 }}>Edit <b>Your Information</b></Typography>
                </Stack>
                <Stack sx={{
                    pt: .5,
                    pr: '14px',
                    width: 'calc(100% + 14px)',
                    maxHeight: `calc(100vh - 320px)`,
                    overflow: 'scroll',
                }}>

                    <PersonalInformationForm form={form} errors={form.formState.errors} />
                    {/* <DeliveryDateForm form={form} /> */}


                    <LocationsInformationForm countriesData={countriesData} form={form} errors={form.formState.errors} />
                    <Stack pb={3} direction={'row'} justifyContent={'space-between'} gap={3} width={'100%'}>
                        <Stack width={'50%'}>
                            <DatePicker
                                label={"Collection date"}
                                value={form.getValues('collectionDate') ? dayjs(form.getValues('collectionDate')) : null}
                                sx={{
                                    mt: 3,
                                    minHeight: 50,
                                    backgroundColor: "#efefef", // Background color
                                    borderRadius: 1, // Rounded corners
                                    color: "black", // Text color
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Remove border
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '2.5rem', // Increase icon size
                                    },
                                    '& .MuiButtonBase-root': {
                                        position: 'relative',
                                        left: -4
                                        // fontSize: '2.5rem', // Increase icon size
                                    },
                                    '& .MuiDayCalendar-weekDayLabel, & .MuiDayCalendar-day': {
                                        fontSize: '1.2rem', // Increase weekday label and day number size
                                    },
                                }}
                                slotProps={{
                                    textField: {
                                        InputLabelProps: {
                                            shrink: true,
                                            sx: {
                                                fontSize: "2.4rem",
                                                fontWeight: 500,
                                                color: "black",
                                                pb: 2,
                                                top: -12,
                                                left: -8,
                                            },
                                        },
                                    },
                                    previousIconButton: {
                                        sx: { '& svg': { fontSize: '2.5rem' } }, // Larger previous arrow
                                    },
                                    nextIconButton: {
                                        sx: { '& svg': { fontSize: '2.5rem' } }, // Larger next arrow
                                    },
                                }}
                                onChange={(v) => {
                                    form.setValue('collectionDate', v?.toDate(), { shouldValidate: true });
                                }}
                                shouldDisableDate={(date: Dayjs) =>
                                    isPastOrWeekendOrFutureWorkingDay(date.toDate())
                                }
                            />
                            {form.formState?.errors?.collectionDate && (
                                <FormHelperText error>{form.formState?.errors?.collectionDate.message}</FormHelperText>
                            )}
                        </Stack>
                        <Stack width={'50%'}>

                        </Stack>
                    </Stack>

                    <LuggageInformationForm detailsColumn form={form} />
                </Stack>

                <Box pt={2} sx={{ width: '100%' }}>
                    <Button fullWidth onClick={async () => {
                        const isValid = validateForm && await validateForm()
                        if (isValid) {
                            togglePopUp()
                        }
                    }} variant="contained" color="secondary"
                        sx={{ px: 6, py: 2, mb: 1 }}>
                        UPDATE
                    </Button>
                    {hasErrors && (
                        <ErrorMessage message={"Check form for errors"} />
                    )}
                </Box>
            </Box>
        </Dialog>
    )
}

export default OfferSummaryFormCard
