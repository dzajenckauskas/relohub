'use client'
import Stack from '@mui/material/Stack'
import React from 'react'
import { CountriesResponseType } from '../types/CountryType'
import Link from 'next/link'
import { Typography } from '@mui/material'
import { MaxWidthContainer } from '../common/MaxWidthContainer'
import { theme } from '../common/Theme'

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
                {renderCountriesLinks}
            </MaxWidthContainer>
        </Stack>
    )
}