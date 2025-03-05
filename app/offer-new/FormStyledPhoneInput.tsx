'use client'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import {
    InputAdornment,
    Popper,
    TextField,
    Typography
} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import i18nCountries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json"; // Load English names
import { CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js";
import Image from "next/image";
import { useState } from 'react';
import { Controller } from "react-hook-form";
i18nCountries.registerLocale(enLocale);
import { useRef } from 'react';

const countryList = getCountries()
    .map((code) => ({
        code,
        name: i18nCountries.getName(code, "en"), // Get country name
        dialCode: `+${getCountryCallingCode(code as CountryCode)}`,
        flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`
    }))
    .sort((a, b) => parseInt(a.dialCode.substring(1)) - parseInt(b.dialCode.substring(1)));


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
    const [open, setOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        code: 'GB', dialCode: '+44', flag: "https://flagcdn.com/w40/gb.png", name: ''
    });
    const GroupHeader = styled('div')(({ theme }) => ({
        padding: '4px 14px',
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        width: 56,
        marginLeft: 16,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: theme.palette.secondary.main
    }));

    const GroupItems = styled('ul')({
        padding: 0,
    });

    const CustomPopper = (props) => {
        return (
            <Popper
                {...props}
                placement='bottom-start'
                sx={{
                    width: { xs: '100% !important', sm: '100% !important' },
                    maxWidth: { xs: '500px !important', sm: '240px !importnat' },
                    marginLeft: '-14px !important', // Fine-tune the positioning, if needed

                }}
            />
        );
    }
    const filterOptions = (options, state) => {
        state.inputValue.toLowerCase()
        return options?.filter((v) => v.name?.toLowerCase()?.includes(state.inputValue.toLowerCase()) || v.code?.toLowerCase()?.includes(state.inputValue.toLowerCase()) || v.dialCode?.toLowerCase()?.includes(state.inputValue.toLowerCase()))
    };
    const inputRef = useRef<HTMLInputElement | null>(null); // Create a reference

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <TextField
                    inputRef={inputRef}
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
                                <Autocomplete
                                    disabled={disabled}
                                    open={open}
                                    sx={{ width: 120 }}
                                    PopperComponent={CustomPopper}
                                    filterOptions={filterOptions}
                                    popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
                                    clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
                                    disablePortal
                                    value={selectedCountry}
                                    getOptionLabel={(option) => `${option.dialCode || ''}`}
                                    id="combo-box-demo"
                                    options={
                                        countryList?.map((v) => v) ??
                                        []}
                                    groupBy={(option) => option?.name?.[0]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            InputProps={{
                                                ...params.InputProps,
                                                sx: {
                                                    minHeight: 50,
                                                    backgroundColor: "#efefef",
                                                    borderRadius: 1,
                                                    color: "black",
                                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" }
                                                },
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={{ position: 'relative', left: -9 }}>
                                                        <Image
                                                            loading="lazy"
                                                            width={20}
                                                            height={15}
                                                            style={{ objectFit: "contain" }}
                                                            src={selectedCountry?.flag}
                                                            alt={selectedCountry?.code}
                                                        />
                                                    </InputAdornment>)
                                            }}
                                            name={name}
                                            InputLabelProps={{
                                                shrink: true,
                                                sx: { fontSize: "2.4rem", fontWeight: 400, color: "black", pb: 2, top: -12, left: -8 }
                                            }}
                                        />
                                    )}
                                    renderGroup={(params) => (
                                        <li key={params.key}>
                                            <GroupHeader>{params.group}</GroupHeader>
                                            <GroupItems>{params.children}</GroupItems>
                                        </li>
                                    )}
                                    disableClearable
                                    onOpen={() => setOpen(true)}
                                    onClose={() => setOpen(false)}
                                    onChange={(_e, v) => {
                                        if (v) {

                                            setSelectedCountry(v)
                                            form.setValue("dialCode", v.dialCode); // ✅ Set dialCode instead of country code
                                            form.setValue("countryCode", v.code); // ✅ Set dialCode instead of country code

                                            // 🔹 Focus the parent TextField after selection
                                            setTimeout(() => {
                                                inputRef.current?.focus();
                                            }, 100); // Small delay to ensure focus works
                                        }
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option?.code} style={{ borderBottom: '1px solid #EBEBEB' }}>
                                                <Stack sx={{ width: '100%', cursor: 'pointer', margin: '4px auto' }}>
                                                    <Stack direction={'row'} alignItems={'flex-start'} spacing={1} sx={{ width: '94%' }}>
                                                        <Image
                                                            loading="lazy"
                                                            width={24}
                                                            height={16}
                                                            style={{ objectFit: "contain" }}
                                                            src={option?.flag}
                                                            alt={option?.code}
                                                        />
                                                        <Typography sx={{
                                                            maxWidth: 220,
                                                            textWrap: 'wrap',
                                                            lineHeight: 1.1
                                                        }}><b>{option?.dialCode}</b> {option?.name}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </li>
                                        )
                                    }}
                                />

                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
};

export default FormStyledPhoneInput;
