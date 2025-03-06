import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    fullWidth?: boolean;
    label?: string;
    onChange?: (v: any) => void;
    placeholder?: string;
    value?: string;
    startIcon?: React.ReactNode; // Allows passing a custom icon
}

const StyledTextInput = ({ value, onChange, label, fullWidth, placeholder, startIcon }: Props) => {
    return (
        <TextField
            sx={{ pb: 2 }}
            label={label}
            value={value}
            placeholder={'Search for more items'}
            fullWidth={fullWidth}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
                sx: {
                    fontSize: "2.4rem",
                    fontWeight: 500,
                    color: "black",
                    pb: 2,
                    top: -12,
                    left: -8,
                },
            }}
            FormHelperTextProps={{
                sx: {
                    position: 'relative',
                    left: -8,
                },
            }}
            InputProps={{
                sx: {
                    minHeight: 50,
                    backgroundColor: "#efefef",
                    borderRadius: 1,
                    color: "black",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                },
                startAdornment: (
                    <InputAdornment position="start">
                        {startIcon || (
                            <IconButton edge="start" size='large' disableFocusRipple disableRipple disableTouchRipple>
                                <SearchIcon fontSize='large' />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default StyledTextInput;
