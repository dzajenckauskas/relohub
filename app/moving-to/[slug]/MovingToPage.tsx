'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { theme } from '@/COMPONENTS/common/Theme'
import { countries } from '@/COMPONENTS/main_page/heroInputs'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image'
import Link from 'next/link'
import Postheroimages from '@/COMPONENTS/main_page/postheroimages'
import MovingToPageHero from './MovingToPageHero'
import { FlagIllustration } from '@/COMPONENTS/FlagIllustration'
import "/STYLES/svg-style.css";
import { CountriesResponseType, CountryResponseType } from '@/COMPONENTS/types/CountryType'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'

type Props = {
    articleContinents?: ContinentsResponseType;
    country?: CountryResponseType;
    countriesdata?: CountriesResponseType;
}
const MovingToPage = ({ articleContinents, country, countriesdata }: Props) => {
    return (
        <PageLayout>
            <div className="bckimagewrp">
                <div className="heroareaimgwrp">
                    <Image
                        className="herobckgimg"
                        alt="backgorund"
                        src={"/herobg.svg"}
                        fill
                    />
                </div>
                <MaxWidthContainer>
                    <MovingToPageHero country={country} />
                </MaxWidthContainer>
                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '400px',
                        mt: { lg: -18, md: -18, sm: -18, xs: 0 },
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        pointerEvents: 'none',
                        top: { lg: 0, md: 0, sm: 0 },
                    }}>
                        <FlagIllustration iso={country?.data?.attributes?.iso2?.toLowerCase()} />
                    </Stack>
                </Stack>
            </div>
            <CountriesDropdownList />
        </PageLayout>
    )
}

export default MovingToPage
