import Stack from '@mui/material/Stack';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import StyledTextInput from './StyledTextInput';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    errors: FieldErrors<OfferFormType>
}

const PersonalInformationForm = ({ form }: Props) => {
    const { formState: { errors } } = form
    return (
        <Stack direction="column" gap={3} pt={2} width={'100%'}>
            <StyledTextInput
                label="First and Last Name"
                fullWidth
                form={form}
                name="fullName"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
            />
            <Stack gap={4} direction={'row'}>
                <StyledTextInput
                    fullWidth
                    label="Email"
                    form={form}
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <StyledTextInput
                    fullWidth
                    label="Telephone"
                    form={form}
                    name="phone"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />
            </Stack>
        </Stack>
    )
}

export default PersonalInformationForm
