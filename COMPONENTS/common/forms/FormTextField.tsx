import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UseFormReturn } from 'react-hook-form';
import { theme } from '../Theme';

type Props = {
    name: string;
    lable: string;
    type?: "number" | "text";
    size?: "medium" | "small";
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    required?: boolean;
    fullWidth?: boolean;
    form: UseFormReturn<any, any, undefined>
}

export const FormTextField = ({ multiline, rows, fullWidth, disabled, size = "medium", type = "text", lable, name, required, form }: Props) => {
    const { register, formState: { errors } } = form
    const error = errors?.[name]
    return (
        <TextField disabled={disabled} size={size}
            className={!!error?.message ?
                "animate__animated animate__headShake"
                : ""}
            type={type}
            label={<Typography component={FormLabel}
                required={required}
                variant='body1'
                color={error?.message ? 'error' : theme.palette.primary.dark}>
                {lable}
            </Typography>}
            rows={rows}
            InputLabelProps={{ shrink: true }}
            multiline={multiline}
            fullWidth={fullWidth}
            {...register(name)}
            name={name}
            error={!!error?.message}
            helperText={error?.message && `${error?.message}`}
        />
    )
}
