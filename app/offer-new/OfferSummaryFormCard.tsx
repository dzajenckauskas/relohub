import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import PersonalInformationForm from './PersonalInformationForm';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import LuggageInformationForm from './LuggageInformationForm';
import LocationsInformationForm from './LocationsInformationForm';
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
// import ErrorMessage from './steps/ErrorMessage';
type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    showPopUp?: boolean;
    togglePopUp: () => void;
    countriesData: CountriesResponseType;
}

const OfferSummaryFormCard = ({ countriesData, form, showPopUp, togglePopUp }: Props) => {

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
                    pr: '14px',
                    width: 'calc(100% + 14px)',
                    maxHeight: `calc(100vh - 320px)`,
                    overflow: 'scroll',
                }}>

                    <PersonalInformationForm form={form} errors={form.formState.errors} />
                    <LocationsInformationForm countriesData={countriesData} form={form} errors={form.formState.errors} />
                    <LuggageInformationForm detailsColumn form={form} />
                </Stack>
                {/* <h2 className="instantquotewrp">
                    <span>{"Get a "}</span>
                    <span style={{ fontWeight: 800 }}>
                        <b>Fast Free Quote</b>
                    </span>
                    <span>{" now"}</span>
                </h2> */}
                <Box pt={2} sx={{ width: '100%' }}>
                    <Button fullWidth onClick={() => togglePopUp()} variant="contained" color="secondary"
                        sx={{ px: 6, py: 2, mb: 1 }}>
                        UPDATE
                    </Button>
                    {/* {form.formState.errors.hasItemsAdded?.message && (
                            <ErrorMessage message={form.formState.errors.hasItemsAdded.message} />
                        )} */}
                </Box>
            </Box>
        </Dialog>
    )
}

export default OfferSummaryFormCard
