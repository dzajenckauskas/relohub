'use client'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import { TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './shared/Theme'

type Props = {
    countriesData: CountriesResponseType;
}

export const CountriesDropdownList = ({ countriesData }: Props) => {
    const router = useRouter()
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

    const [open, setOpen] = useState(false);
    return (
        <Stack sx={{ backgroundColor: theme.palette.secondary.main, py: 3, pb: { xs: 4, sm: 6, md: 3 } }}>
            <MaxWidthContainer>
                <Stack direction={{ xs: 'column', md: 'row' }} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography color={"#fff"} variant='subtitle1' pb={{ xs: 2, md: 0 }}>
                        <b>Select Country</b> that you are moving to:
                    </Typography>
                    <Autocomplete
                        open={open}
                        popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
                        clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
                        disablePortal
                        getOptionLabel={(option) => option?.attributes?.name}
                        id="combo-box-demo"
                        options={countriesData?.data ?? []}
                        sx={{ maxWidth: { lg: 596, md: 552, sm: 596, }, width: '100%' }}
                        groupBy={(option) => option?.attributes?.name?.[0]}
                        renderInput={(params) => <TextField sx={{ backgroundColor: '#fff !important', borderRadius: 1 }}
                            color='info' placeholder='Please select' {...params} />}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        onOpen={(_e) => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}

                        onChange={(_e, option) => {
                            router.push(`/moving-to/${option.attributes.url}`)
                        }}
                        renderOption={(props, option) => {
                            return (
                                <li {...props} key={option.id} style={{ borderBottom: '1px solid #EBEBEB', }}>
                                    {/* // <Link passHref href={`/moving-to/${option.attributes.url}`} style={{ width: '100%' }}> */}
                                    <Stack
                                        sx={{ width: '100%', cursor: 'pointer', margin: '4px auto' }}>
                                        <Stack direction={'row'} alignItems={'center'} spacing={1}
                                            sx={{ width: '94%' }}>
                                            <Image
                                                loading="lazy"
                                                width={24}
                                                height={16}
                                                style={{ objectFit: "contain" }}
                                                src={`https://flagcdn.com/40x30/${option.attributes.iso2.toLowerCase()}.png`}
                                                alt={`${option.attributes.iso2} flag`}
                                            />
                                            <Typography key={option.id}>
                                                {option.attributes.name}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </li>


                            )
                        }}
                    />
                </Stack>
            </MaxWidthContainer >
        </Stack >
    )
}