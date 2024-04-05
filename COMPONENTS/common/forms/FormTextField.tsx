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

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: 5,
        // color: "#fff"
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        // boxShadow: !!error ? `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px` : 'none',
        // borderColor: !!error ? theme.palette.secondary.main : 'none',
        // borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        // fontSize: 16,
        width: '100%',
        padding: '14px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        // fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        // ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.secondary.main,
            // borderWidth: 2
            // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        },
        '&:error': {
            boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.secondary.main,
        },


    },
}));

export const FormTextField = ({ defaultValue, multiline, rows, fullWidth, disabled, size = "medium", type = "text", label, name, required, form }: Props) => {
    const { register, formState: { errors } } = form
    const error = errors?.[name]



    return (
        <FormControl variant="standard" color='secondary' fullWidth={fullWidth}>
            {/* <InputLabel sx={{
                color: '#fff',
            }} required={required} shrink htmlFor={`${name}-input`}> */}
            <Typography component={FormLabel}
                htmlFor={`${name}-input`}
                variant='body1'
                sx={{ fontWeight: 500 }}
                // sx={{ fontSize: "20px !important" }}
                color={error?.message ? 'error' : theme.palette.info.main}>
                {label}
            </Typography>
            {/* </InputLabel> */}
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
                    input: {
                        backgroundColor: '#fff',
                    }
                }}
                {...register(name)}
                // onChange={(e) => {
                //     form.setValue(name, e.target.value, { shouldValidate: true })
                // }}
                // value={form.getValues(name)}
                error={!!error?.message}
                defaultValue={defaultValue}
                id={`${name}-input`}
            />
            <ErrorBox error={`${error?.message ?? ''}`} />
        </FormControl >
        // <Stack>
        //     {/* <Typography component={FormLabel}
        //         required={required}
        //         // variant='body1'
        //         sx={{ fontSize: "16px !important" }}
        //         color={error?.message ? 'error' : theme.palette.primary.dark}>
        //         {label}
        //     </Typography> */}
        //     <BootstrapInput disabled={disabled} size={size}
        //         className={!!error?.message ?
        //             "animate__animated animate__headShake"
        //             : ""}
        //         type={type}
        //         // sx={{ height: 40 }}
        //         // label={<Typography component={FormLabel}
        //         //     required={required}
        //         //     // variant='body1'
        //         //     sx={{ fontSize: "16px !important" }}
        //         //     color={error?.message ? 'error' : theme.palette.primary.dark}>
        //         //     {label}
        //         // </Typography>}
        //         rows={rows}
        //         // InputLabelProps={{ shrink: true }}
        //         multiline={multiline}
        //         fullWidth={fullWidth}
        //         {...register(name)}
        //         name={name}
        //         error={!!error?.message}
        //     // helperText={error?.message && `${error?.message}`}
        //     />
        //     <ErrorBox error={error?.message && `${error?.message}`} />
        // </Stack>
    )
}
