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
type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    showPopUp?: boolean;
    togglePopUp: () => void;
    countriesData: CountriesResponseType;
}

const OfferSummaryFormCard = ({ countriesData, form, showPopUp, togglePopUp }: Props) => {

    return (
        <Dialog
            sx={{ zIndex: 10 }}
            open={showPopUp}
            // TransitionComponent={isMobile ? TransitionMobile : TransitionDesktop}
            keepMounted
            onClose={togglePopUp}
            PaperProps={{
                style: {
                    overflow: 'visible'
                },
            }}
        >
            <Box sx={{
                position: 'relative',
                p: 4, width: { xs: '95vw', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
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
                <PersonalInformationForm form={form} errors={form.formState.errors} />
                <LocationsInformationForm countriesData={countriesData} form={form} errors={form.formState.errors} />
                <LuggageInformationForm form={form} />
                {/* <h2 className="instantquotewrp">
                    <span>{"Get a "}</span>
                    <span style={{ fontWeight: 800 }}>
                        <b>Fast Free Quote</b>
                    </span>
                    <span>{" now"}</span>
                </h2> */}
            </Box>
        </Dialog>
    )
}

export default OfferSummaryFormCard
