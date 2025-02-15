import TextField from '@mui/material/TextField';

type Props = {
    form: any;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    name: string;
    label?: string;
    autoFocus?: boolean;
    onChange?: (v: any) => void;
    error?: boolean;
    helperText?: string;
}

const FormStyledTextInput = ({ helperText, error, autoFocus, onChange, required, form, disabled, name, label, fullWidth }: Props) => {
    const { register } = form;

    return (
        <TextField
            sx={{ pb: 2 }}
            autoFocus={autoFocus}
            required={required}
            label={label}
            {...register(name)}
            error={error}
            helperText={helperText}
            fullWidth={fullWidth}
            InputLabelProps={{
                shrink: true, // Keeps label above input
                sx: {
                    fontSize: "2.4rem",
                    fontWeight: 500,
                    color: "black", pb: 2, top: -12, left: -8,
                }, // Bold label with margin
            }}
            FormHelperTextProps={{
                sx: {
                    position: 'relative',
                    left: -8
                    // fontSize: "1rem", // Adjust font size
                    // fontWeight: 500, // Adjust font weight
                    // color: "red", // Change color
                    // mt: 1, // Add margin to separate from input
                },
            }}
            InputProps={{
                sx: {
                    // mb: 2,
                    minHeight: 50,
                    backgroundColor: "#efefef", // Background color
                    borderRadius: 1, // Rounded corners
                    color: "black", // White text
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove border
                },
            }}

            inputProps={{
                // sx: { padding: "10px", color: "black" }, // Padding and white text
            }}
        />

    )
}

export default FormStyledTextInput
