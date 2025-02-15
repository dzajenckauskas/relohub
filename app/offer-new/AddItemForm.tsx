import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import StyledTextInput from './StyledTextInput';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { OfferFormType } from './OfferNewPage';
import FormHelperText from '@mui/material/FormHelperText';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
    errors: FieldErrors<OfferFormType>;
    index: number;
};

const AddItemForm = ({ form, errors, index }: Props) => {
    console.log(errors.customItems?.[index]?.name, "errors.customItems?.[index]?.nameerrors.customItems?.[index]?.name");

    return (
        <Stack direction="column" gap={2}>
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <StyledTextInput
                    label="Custom Item Name"
                    form={form}
                    name={`customItems.${index}.name`}
                    error={!!errors.customItems?.[index]?.name}
                    helperText={errors.customItems?.[index]?.name?.message}
                />
            </Box>
            <Box flex={1} display="flex" flexDirection="row" gap={2}>
                <StyledTextInput
                    label="Width (cm)"
                    form={form}
                    name={`customItems.${index}.width`}
                    error={!!errors.customItems?.[index]?.width}
                    helperText={errors.customItems?.[index]?.width?.message}
                />
                <StyledTextInput
                    label="Height (cm)"
                    form={form}
                    name={`customItems.${index}.height`}
                    error={!!errors.customItems?.[index]?.height}
                    helperText={errors.customItems?.[index]?.height?.message}
                />
                <StyledTextInput
                    label="Depth (cm)"
                    form={form}
                    name={`customItems.${index}.depth`}
                    error={!!errors.customItems?.[index]?.depth}
                    helperText={errors.customItems?.[index]?.depth?.message}
                />
                <StyledTextInput
                    label="Weight (kg)"
                    form={form}
                    name={`customItems.${index}.weight`}
                    error={!!errors.customItems?.[index]?.weight}
                    helperText={errors.customItems?.[index]?.weight?.message}
                />
            </Box>
            {errors.customItems?.[index]?.message && (
                <FormHelperText error>{errors.customItems[index].message}</FormHelperText>
            )}
        </Stack>
    );
};

export default AddItemForm;
