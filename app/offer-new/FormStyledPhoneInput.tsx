import { ArrowDropDown } from "@mui/icons-material";
import {
    Box,
    InputAdornment,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js";
import { Controller } from "react-hook-form";

const countryList = getCountries()
    .map((code) => ({
        code,
        dialCode: `+${getCountryCallingCode(code as CountryCode)}`,
        flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`
    }))
    .sort((a, b) => parseInt(a.dialCode.substring(1)) - parseInt(b.dialCode.substring(1))); // ✅ Sort by numeric dial code


type Props = {
    form: any;
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
};

const FormStyledPhoneInput = ({ form, name, label, required, disabled, fullWidth, error, helperText }: Props) => {
    const handleCountryChange = (e: any) => {
        const newCountry = e.target.value;
        const countryData = countryList.find(c => c.code === (newCountry ?? 'US'));

        if (countryData) {
            // setSelectedCountry(newCountry);
            form.setValue("dialCode", countryData.dialCode); // ✅ Set dialCode instead of country code
            form.setValue("countryCode", countryData.code); // ✅ Set dialCode instead of country code
        }
    };

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <TextField
                    fullWidth={fullWidth}
                    required={required}
                    disabled={disabled}
                    error={error}
                    helperText={helperText}
                    label={label}
                    sx={{
                        backgroundColor: "transparent", // ✅ Keep background transparent
                        borderRadius: 1,
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#efefef", // ✅ Background only for input
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove border
                        },
                        ".MuiFormHelperText-root": {
                            position: 'relative',
                            left: -8
                        }
                    }}
                    {...field}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            fontSize: "2.4rem",
                            fontWeight: 400,
                            color: "black",
                            pb: 2,
                            top: -12,
                            left: -8
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Select
                                    value={form.watch('countryCode') ?? 'US'}
                                    onChange={handleCountryChange}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        minWidth: "40px !important",
                                        width: 100,
                                        borderRadius: "5px",
                                        position: 'relative',
                                        right: 13,
                                        '.MuiSelect-iconOutlined': {
                                            transform: 'scale(2)'
                                        },
                                    }}
                                    // disableUnderline
                                    IconComponent={ArrowDropDown}
                                >
                                    {countryList.map(({ code, dialCode, flag }) => (
                                        <MenuItem key={code} value={code}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <img src={flag} alt={code} width={20} height={15} />
                                                {dialCode} {/* ✅ Displaying dial code */}
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
};

export default FormStyledPhoneInput;
