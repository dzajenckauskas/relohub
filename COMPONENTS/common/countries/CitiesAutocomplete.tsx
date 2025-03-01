'use client'
import { OfferFormType } from '@/app/offer-new/OfferNewPage'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/system'
import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

type Props = {
    onChange?: (e: any, option: any) => void;
    form: UseFormReturn<OfferFormType, any, undefined>
    name: keyof OfferFormType;
    label: string
    countryName?: string
    disabled?: boolean;
}

const CitiesAutocomplete = ({ disabled, countryName, onChange, form, name, label }: Props) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState([])

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

    async function fetchcity(country) {
        setLoading(true);
        try {
            const res = await fetch("/api/cities-new", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ country }),
            });

            if (!res.ok) throw new Error(`Failed to fetch data. Status: ${res.status}`);

            const data = await res.json();
            setValues(data);
        } catch (error) {
            console.error(`Failed to fetch data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchcity(countryName);
    }, [countryName]);

    return (
        <Autocomplete
            disabled={disabled}
            open={open}
            loading={loading}
            popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
            clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
            disablePortal
            value={form.watch(name)}
            getOptionLabel={(option) => option || ''}
            id="combo-box-demo"
            options={values?.map((v) => v.name) ?? []}
            groupBy={(option) => option?.[0]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    name={name}
                    sx={{ pb: 2 }}
                    InputLabelProps={{
                        shrink: true,
                        sx: { fontSize: "2.4rem", fontWeight: 400, color: "black", pb: 2, top: -12, left: -8 }
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
                    error={!!form.formState.errors?.[name]?.message}
                    helperText={form.formState.errors?.[name]?.message}
                />
            )}
            // renderGroup={(params) => (
            //     <li key={params.key}>
            //         <Typography sx={{
            //             padding: '4px 14px',
            //             marginTop: 8,
            //             marginBottom: 8,
            //             textAlign: 'center',
            //             width: 56,
            //             marginLeft: 16,
            //             borderRadius: 5,
            //             color: '#fff',
            //             fontWeight: 'bold',
            //             backgroundColor: "secondary.main"
            //         }}>{params.group}</Typography>
            //         <ul style={{ padding: 0 }}>{params.children}</ul>
            //     </li>
            // )}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={onChange}
        />
    );
}

export default CitiesAutocomplete;
