'use client'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './Theme'

type Props = {
    countriesdata: CountriesResponseType;
}

export const CountriesDropdownList = ({ countriesdata }: Props) => {
    const renderCountriesLinks = countriesdata?.data?.map((c) => {
        return (
            <Typography sx={{ color: '#fff' }} key={c.id}>
                <Link href={`/moving-to/${c.attributes.url}`}>{c.attributes.name}</Link>
            </Typography>
        )
    })
    return (
        <Stack sx={{ backgroundColor: theme.palette.secondary.main, py: 4 }}>
            <MaxWidthContainer>
                <Stack direction={'row'} width={'100%'} justifyContent={'flex-end'}>
                    {renderCountriesLinks}
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}