'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import EastIcon from '@mui/icons-material/East'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useState } from 'react'
type Props = {
    articleContinents?: ContinentsResponseType;
    countries?: CountriesResponseType;
}

export const CoveredCountriesSection = ({ articleContinents, countries }: Props) => {
    const [active, setActive] = useState<string | undefined>('europe')
    const renderCountries = countries?.data?.filter((c) => c?.attributes?.continent && c?.attributes?.continent?.toLowerCase() === active?.toLowerCase())?.map((c) => {
        const capitalizeEachWord = (str: string) => {
            return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
        };
        return (
            <Grid item xs={6} sm={4} md={3} key={c?.id}>
                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                    <EastIcon fontSize='large' color='secondary' />
                    {capitalizeEachWord(c?.attributes?.name)}
                </Typography>
            </Grid>
        )
    })


    // Move the "Europe" continent to the beginning of the array if found
    const europeIndex = articleContinents.data.findIndex(ac => ac.attributes.key === 'europe');
    if (europeIndex !== -1) {
        const europeContinent = articleContinents.data.splice(europeIndex, 1)[0];
        articleContinents.data.unshift(europeContinent);
    }
    const renderArticleContinents = articleContinents?.data?.map(ac => {
        const isActive = ac.attributes.key === active;
        return (
            <Button
                key={ac.id}
                onClick={() => setActive(ac.attributes.name)}
                style={{
                    padding: '12px 22px',
                    borderRadius: '2px',
                    fontSize: 12,
                    cursor: 'pointer',
                    backgroundColor: isActive ? '#e71d5e' : '#d9d9d9',
                    color: isActive ? '#fff' : '#e71d5e',
                    textTransform: 'uppercase'
                }}>
                {ac.attributes.name}
            </Button>
        );
    });


    return (

        <Stack sx={{ backgroundColor: '#f1f1f1' }}>
            <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', pt: 6, pb: 10 }}>
                <Stack sx={{ width: '100%' }}>
                    <Typography variant={'h2'} sx={{ pb: 1 }}>
                        Countries that we cover:
                    </Typography>
                    <Stack direction={'row'} gap={1} pt={1} sx={{ flexWrap: 'wrap' }}>
                        {renderArticleContinents}
                    </Stack>

                    <Grid container spacing={1} pt={4}>
                        {renderCountries}
                    </Grid>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}