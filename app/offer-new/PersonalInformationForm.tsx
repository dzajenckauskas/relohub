import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react'
import StyledTextInput from './StyledTextInput';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    errors: FieldErrors<OfferFormType>
}

const PersonalInformationForm = ({ form, errors }: Props) => {
    return (
        <Stack direction="row" gap={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <StyledTextInput
                    label="Name"
                    form={form}
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />
                <StyledTextInput
                    label="Surname"
                    form={form}
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                />
            </Box>
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <StyledTextInput
                    label="Email"
                    form={form}
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <StyledTextInput
                    label="Telephone"
                    form={form}
                    name="phone"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />
            </Box>
        </Stack>
    )
}

export default PersonalInformationForm
