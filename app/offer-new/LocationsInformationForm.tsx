import CitiesAutocomplete from '@/COMPONENTS/common/countries/CitiesAutocomplete';
import CountriesAutocomplete from '@/COMPONENTS/common/countries/CountriesAutocomplete';
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import FormStyledTextInput from './FormStyledTextInput';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    errors: FieldErrors<OfferFormType>
    countriesData?: CountriesResponseType;

}

const LocationsInformationForm = ({ countriesData, form, errors }: Props) => {
    const collectCountry = form.watch('collectCountry')
    const deliverCountry = form.watch('deliverCountry')

    const showCollectPostcode = collectCountry === ('United Kingdom') || collectCountry === ('United States')
    const showDeliverPostcode = deliverCountry === ('United Kingdom') || deliverCountry === ('United States')

    const checkZipOrPost = (country: string) => {
        if (country === 'United Kingdom') {
            return "Post"
        }
        if (country === 'United States') {
            return "Zip"
        }
    }
    return (
        <Stack direction="row" gap={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <CountriesAutocomplete
                    name={'collectCountry'}
                    label={'Collection country'}
                    onChange={(_event, option) => {
                        form.setValue('collectCity', null);
                        form.setValue('collectPostcode', null);
                        return form.setValue('collectCountry', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <CitiesAutocomplete
                    disabled={!collectCountry}
                    name={'collectCity'}
                    label={'Collection city'}
                    onChange={(_event, option) => {
                        return form.setValue('collectCity', option);
                    }}
                    form={form} countryName={collectCountry}
                />
                {showCollectPostcode &&
                    <FormStyledTextInput
                        label={`Collection ${checkZipOrPost(collectCountry)} Code`}
                        form={form}
                        name="collectPostcode"
                        error={!!errors.collectPostcode}
                        helperText={errors.collectPostcode?.message}
                    />}
            </Box>
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <CountriesAutocomplete
                    name={'deliverCountry'}
                    label={'Destination country'}
                    onChange={(_event, option) => {
                        form.setValue('deliverCity', null);
                        form.setValue('deliverPostcode', null);
                        return form.setValue('deliverCountry', option);
                    }}
                    form={form} countries={countriesData?.data}
                />
                <CitiesAutocomplete
                    disabled={!deliverCountry}
                    name={'deliverCity'}
                    label={'Destination city'}
                    onChange={(_event, option) => {
                        return form.setValue('deliverCity', option);
                    }}
                    form={form} countryName={deliverCountry}
                />
                {showDeliverPostcode && <FormStyledTextInput
                    label={`Collection ${checkZipOrPost(deliverCountry)} Code`}
                    form={form}
                    name="deliverPostcode"
                    error={!!errors.deliverPostcode}
                    helperText={errors.deliverPostcode?.message}
                />}
            </Box>
        </Stack>
    )
}

export default LocationsInformationForm
