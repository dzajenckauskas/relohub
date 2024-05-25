'use client'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Autocomplete, TextField, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Image from "next/image"
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './Theme'
type Props = {
    countriesdata: CountriesResponseType;
}

export const CountriesDropdownList = ({ countriesdata }: Props) => {

    const params = useParams()
    const router = useRouter()
    const GroupHeader = styled('div')(({ theme }) => ({
        // position: 'sticky',
        // top: '-8px',
        padding: '4px 14px',
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        // color: theme.palette.primary.main,
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
        <Stack sx={{ backgroundColor: theme.palette.secondary.main, py: 4 }}>
            <MaxWidthContainer>
                <Stack direction={'row'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography color={"#fff"}>
                        <b>Select Country</b> that you are moving to:
                    </Typography>

                    <Autocomplete
                        popupIcon={<ArrowDropDownIcon fontSize='large' />}
                        disablePortal
                        defaultValue={countriesdata.data.find((c) => c.attributes.url === params.slug)}
                        getOptionLabel={(option) => option.attributes.name}
                        id="combo-box-demo"
                        options={countriesdata?.data}
                        sx={{ maxWidth: 596, width: '100%' }}
                        groupBy={(option) => option.attributes.name[0]}
                        onChange={(e, option) => router.push(`/moving-to/${option.attributes.url}`)}
                        renderInput={(params) => <TextField sx={{ backgroundColor: '#fff !important', borderRadius: 1 }} color='info' placeholder='Please select' {...params} />}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        renderOption={(props, option) => {
                            return (
                                <Link key={option.id} href={`/moving-to/${option.attributes.url}`}>
                                    <li {...props} style={{ borderBottom: '1px solid #EBEBEB', paddingTop: 8, paddingBottom: 8, width: '94%', margin: '0 auto' }}>
                                        <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{ width: '100%' }}>
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
                                    </li>
                                </Link>
                            )
                        }}
                    />
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}