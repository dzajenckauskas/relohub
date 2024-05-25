'use client'
import { Autocomplete, TextField, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './Theme'
import Image from "next/image";
import { styled, lighten, darken } from '@mui/system';

type Props = {
    countriesdata: CountriesResponseType;
}

export const CountriesDropdownList = ({ countriesdata }: Props) => {
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
                <Stack direction={'row'} width={'100%'} justifyContent={'flex-end'}>
                    <Autocomplete
                        disablePortal
                        getOptionLabel={(option) => option.attributes.name}
                        id="combo-box-demo"
                        options={countriesdata?.data}
                        sx={{ width: 300 }}
                        groupBy={(option) => option.attributes.name[0]}
                        onChange={(e, option) => router.push(`/moving-to/${option.attributes.url}`)}
                        renderInput={(params) => <TextField sx={{ backgroundColor: '#fff !important', borderRadius: 1 }} placeholder='Select country' {...params} />}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        renderOption={(props, option) => {
                            return (
                                <Link href={`/moving-to/${option.attributes.url}`}>
                                    <li {...props} key={option.id} style={{ borderBottom: '1px solid #EBEBEB', paddingTop: 8, paddingBottom: 8, width: '94%', margin: '0 auto' }}>
                                        <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{ width: '100%' }}>
                                            <Image
                                                loading="lazy"
                                                width={24}
                                                height={16}
                                                style={{ objectFit: "contain" }}
                                                src={`https://flagcdn.com/w20/${option.attributes.iso2.toLowerCase()}.png`}
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