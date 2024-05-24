'use client'
import { Autocomplete, TextField, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './Theme'

type Props = {
    countriesdata: CountriesResponseType;
}

export const CountriesDropdownList = ({ countriesdata }: Props) => {
    const router = useRouter()

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
                        onChange={(e, option) => router.push(`/moving-to/${option.attributes.url}`)}
                        renderInput={(params) => <TextField sx={{ color: '#fff' }} placeholder='Select coutntry' {...params} />}
                        renderOption={(props, option) => {
                            return (
                                <Link href={`/moving-to/${option.attributes.url}`}>
                                    <li {...props} key={option.id}>
                                        <Typography key={option.id}>
                                            {option.attributes.name}
                                        </Typography>
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