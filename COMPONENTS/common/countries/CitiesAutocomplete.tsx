'use client'
import { CountryDataType } from '@/COMPONENTS/types/CountryType'
import { OfferFormType } from '@/app/offer-new/OfferNewPage'
import StyledTextInput from '@/app/offer-new/StyledTextInput'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import { TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

type Props = {
    onChange?: (e: any, option: any) => void;
    form: UseFormReturn<OfferFormType, any, undefined>
    name: keyof OfferFormType;  // 👈 Ensure name is a valid key
    label: string
    countryName?: string
}
const CitiesAutocomplete = ({ countryName, onChange, form, name, label }: Props) => {
    const [loading, setLoading] = useState(false);
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

    const [values, setValues] = useState()
    async function fetchcity(country) {
        setLoading(true)


        try {
            let res = await fetch("/api/cities", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ country }),
            });
            console.log('revalidate');

            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
            if (res.ok) {
                let data = await res.json();
                console.log(data, "DATA");
                setValues(data)
                setLoading(false)
                // let letters = [];
                // let letter;
                // for (const [i, el] of data.entries()) {
                //     if (el.name.charAt(0).toLowerCase() !== letter) {
                //         letter = el.name.charAt(0).toLowerCase();

                //         letters.push(letter.toUpperCase());
                //         data.splice(i, 0, letter);
                //     }
                // }

                // setcitiesletters(letters);
                // if (ft === "from") {
                //     setcitiesfrom(data);
                // } else {
                //     setcitiesto(data);
                // }
                // setfetching(false);
            }
            return res.json();
        } catch (error) {
            // Handle any errors that occur during fetch operation
            throw new Error(`Failed to fetch data: ${error.message}`);
        }






    }

    return (
        <Autocomplete
            open={open}
            loading={loading}
            popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
            clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
            disablePortal
            value={form.watch(name as keyof OfferFormType)}
            getOptionLabel={(option) => option || ''}
            id="combo-box-demo"
            options={values?.map((v) => v.name) ?? []}
            groupBy={(option) => option?.[0]}
            renderInput={(params) => <TextField
                // type='standard'
                label={label}
                name={name}
                // InputLabelProps={{
                //     shrink: true, // Keeps label above input
                //     sx: {
                //         fontSize: "2.4rem",
                //         fontWeight: 500,
                //         color: "black", pb: 2, top: -12, left: -8,
                //     }, // Bold label with margin
                // }}

                // FormHelperTextProps={{
                //     sx: {
                //         position: 'relative',
                //         left: -8
                //         // fontSize: "1rem", // Adjust font size
                //         // fontWeight: 500, // Adjust font weight
                //         // color: "red", // Change color
                //         // mt: 1, // Add margin to separate from input
                //     },
                // }}
                // InputProps={{
                //     sx: {
                //         // mb: 2,
                //         minHeight: 50,
                //         backgroundColor: "#efefef !important", // Background color
                //         borderRadius: 1, // Rounded corners
                //         color: "black", // White text
                //         "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove border
                //     },
                // }}

                color='info'
                placeholder='Please select'
                {...params}
            />}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
            onOpen={async (_e) => {
                fetchcity(countryName)
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}

            onChange={onChange}
            renderOption={(props, option) => {
                const filteredOption = values?.find((v) => v.name === option)
                return (
                    <li {...props} key={option} style={{ borderBottom: '1px solid #EBEBEB', }}>
                        {/* // <Link passHref href={`/moving-to/${option.attributes?.url}`} style={{ width: '100%' }}> */}
                        <Stack
                            sx={{ width: '100%', cursor: 'pointer', margin: '4px auto' }}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1}
                                sx={{ width: '94%' }}>
                                {/* <Image
                                loading="lazy"
                                width={24}
                                height={16}
                                style={{ objectFit: "contain" }}
                                src={`https://flagcdn.com/40x30/${filteredOption.attributes?.iso2.toLowerCase()}.png`}
                                alt={`${filteredOption.attributes?.iso2} flag`}
                            /> */}
                                <Typography key={filteredOption.id}>
                                    {option}
                                </Typography>
                            </Stack>
                        </Stack>
                    </li>


                )
            }}
        />
    )
}

export default CitiesAutocomplete
