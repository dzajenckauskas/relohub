import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UseFormReturn } from 'react-hook-form';
import { theme } from '../Theme';
import { FormControl, InputBase, InputLabel, Stack, alpha, styled } from '@mui/material';
import ErrorBox from '../ErrorBox';

type Props = {
    name: string;
    defaultValue?: string;
    label: string;
    type?: "number" | "text";
    size?: "medium" | "small";
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    required?: boolean;
    fullWidth?: boolean;
    form: UseFormReturn<any, any, undefined>
}

export const BootstrapInput = styled(InputBase)(({ theme, error }) => ({
    'label + &': {
        marginTop: 5,
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid',
        boxShadow: error ? `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px` : 'none',
        borderColor: error ? theme.palette.secondary.main : 'none',
        width: '100%',
        padding: '14px 12px',
        '&:focus': {
            boxShadow: `${alpha(theme.palette.info.main, 0.15)} 0px 0px 0px 3px`,
            borderColor: theme.palette.info.main,
        },
    },
}));

export const FormTextField = ({ defaultValue, multiline, rows, fullWidth, disabled, size = "medium", type = "text", label, name, required, form }: Props) => {
    const { register, formState: { errors } } = form
    const error = errors?.[name]

    return (
        <FormControl variant="standard" color='info' fullWidth={fullWidth}>
            <Typography component={FormLabel}
                htmlFor={`${name}-input`}
                variant='body1'
                sx={{ fontWeight: 500 }}
                color={error?.message ? 'error' : theme.palette.info.main}>
                {label}
            </Typography>
            <BootstrapInput
                type={type}
                fullWidth={fullWidth}
                required={required}
                disabled={disabled}
                size={size}
                multiline={multiline}
                rows={rows}
                sx={{
                    marginBottom: -1.5,
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                    },
                    "& input[type=number]": {
                        MozAppearance: "textfield",
                    },
                }}
                {...register(name)}
                error={!!error?.message}
                defaultValue={defaultValue}
                id={`${name}-input`}
            />
            <ErrorBox error={`${error?.message ?? ''}`} />
        </FormControl >
    )
}
