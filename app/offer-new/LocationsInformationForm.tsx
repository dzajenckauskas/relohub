import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react'
import StyledTextInput from './StyledTextInput';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList';
import CountriesAutocomplete from '@/COMPONENTS/common/countries/CountriesAutocomplete';
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import CitiesAutocomplete from '@/COMPONENTS/common/countries/CitiesAutocomplete';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    errors: FieldErrors<OfferFormType>
    countriesData?: CountriesResponseType;

}

const LocationsInformationForm = ({ countriesData, form, errors }: Props) => {
    return (
        <Stack direction="row" gap={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <CountriesAutocomplete
                    name={'collectCountry'}
                    label={'Collection country'}
                    onChange={(_event, option) => {
                        return form.setValue('collectCountry', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <CitiesAutocomplete
                    name={'collectCity'}
                    label={'Collection city'}
                    onChange={(_event, option) => {
                        return form.setValue('collectCity', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <StyledTextInput
                    //  ::TODO zip/post code if uk/us
                    label="Collection Post Code"
                    form={form}
                    name="collectPostcode"
                    error={!!errors.collectPostcode}
                    helperText={errors.collectPostcode?.message}
                />
            </Box>
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <CountriesAutocomplete
                    name={'deliverCountry'}
                    label={'Destination country'}
                    onChange={(_event, option) => {
                        return form.setValue('collectCountry', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <CitiesAutocomplete
                    name={'deliverCity'}
                    label={'Destination city'}
                    onChange={(_event, option) => {
                        return form.setValue('deliverCity', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <StyledTextInput
                    //  ::TODO zip/post code if uk/us
                    label="Destination Post Code"
                    form={form}
                    name="deliverPostcode"
                    error={!!errors.deliverPostcode}
                    helperText={errors.deliverPostcode?.message}
                />
            </Box>
        </Stack>
    )
}

export default LocationsInformationForm
