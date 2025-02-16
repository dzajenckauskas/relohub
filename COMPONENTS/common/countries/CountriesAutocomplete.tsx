'use client'
import { CountryDataType } from '@/COMPONENTS/types/CountryType'
import { OfferFormType } from '@/app/offer-new/OfferNewPage'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import { TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Image from "next/image"
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

type Props = {
    countries: CountryDataType[];
    onChange?: (e: any, option: any) => void;
    form: UseFormReturn<OfferFormType, any, undefined>
    name: keyof OfferFormType;
    label: string
    disabled?: boolean;
}

const CountriesAutocomplete = ({ countries, onChange, form, name, label, disabled }: Props) => {
    const [open, setOpen] = useState(false);
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

    return (
        <Autocomplete
            disabled={disabled}
            open={open}
            popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
            clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
            disablePortal
            value={form.watch(name)}
            getOptionLabel={(option) => option || ''}
            id="combo-box-demo"
            options={countries?.map((v) => v.attributes.name) ?? []}
            groupBy={(option) => option?.[0]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    name={name}
                    sx={{ pb: 2 }}
                    InputLabelProps={{
                        shrink: true,
                        sx: { fontSize: "2.4rem", fontWeight: 500, color: "black", pb: 2, top: -12, left: -8 }
                    }}
                    FormHelperTextProps={{ sx: { position: 'relative', left: -8 } }}
                    InputProps={{
                        ...params.InputProps,
                        sx: {
                            minHeight: 50,
                            backgroundColor: "#efefef",
                            borderRadius: 1,
                            color: "black",
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" }
                        },
                    }}
                />
            )}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={onChange}
            renderOption={(props, option) => {
                const filteredOption = countries?.find((v) => v.attributes.name === option)
                return (
                    <li {...props} key={filteredOption?.id} style={{ borderBottom: '1px solid #EBEBEB' }}>
                        <Stack sx={{ width: '100%', cursor: 'pointer', margin: '4px auto' }}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{ width: '94%' }}>
                                <Image
                                    loading="lazy"
                                    width={24}
                                    height={16}
                                    style={{ objectFit: "contain" }}
                                    src={`https://flagcdn.com/40x30/${filteredOption?.attributes?.iso2.toLowerCase()}.png`}
                                    alt={`${filteredOption?.attributes?.iso2} flag`}
                                />
                                <Typography>{option}</Typography>
                            </Stack>
                        </Stack>
                    </li>
                )
            }}
        />
    )
}

export default CountriesAutocomplete
