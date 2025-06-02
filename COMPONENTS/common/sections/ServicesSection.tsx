'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image'
import Link from 'next/link'
import { countriesData } from '../../../app/countriesData'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import Stack from "@mui/material/Stack"
type Props = {
    // articleContinents?: ContinentsResponseType;
    // countries?: CountriesResponseType;
}

export const ServicesSection = ({ }: Props) => {


    const services = [
        {
            name: "Road freight",
            slogan: "door-to-door",
            number: "01"
        },

        {
            name: "Sea freight",
            slogan: "door-to-door",
            number: "02"
        },
        {
            name: "Air freight",
            slogan: "door-to-door",
            number: "03"
        },
        {
            name: "Air freight",
            slogan: "door-to-airport",
            number: "04"
        },
        {
            name: "Air courier",
            slogan: "door-to-door",
            number: "05"
        }
    ]
    const renderServices = services.map((s) => {
        return (
            <Stack key={s.number} sx={{
                position: 'relative',
                borderRadius: 1.5,
                width: { md: 'calc(50% - 8px)', sm: 'calc(50% - 8px)', xs: 'calc(100%)' },
                p: { xs: 2, md: 3 },
                backgroundColor: theme.palette.secondary.main
            }}>
                <Typography variant='body2' sx={{ color: '#fff', position: 'absolute', right: 16, top: 16 }}>
                    {s.number}
                </Typography>
                <Typography variant='h4' component={'h2'} sx={{ color: '#fff', fontWeight: 600 }}>
                    {s.name}
                </Typography>
                <Typography variant='h4' component={'h2'} sx={{ color: '#fff', fontWeight: 600 }}>
                    {s.slogan}
                </Typography>
            </Stack>
        )
    })
    return (
        <Stack sx={{ backgroundColor: '#fff' }} id={'services'}>
            <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
                <Stack spacing={{ lg: 10, xs: 8 }} direction={{ md: 'row', xs: 'column' }} width={'100%'}>
                    <Stack sx={{ width: { lg: '55%', xs: '100%' }, }}>
                        <Typography variant={'h2'} sx={{ pb: 2 }}>
                            Services we offer
                        </Typography>
                        <Stack gap={{ xs: 1, sm: 2 }} pt={2} direction={'row'} sx={{ flexWrap: 'wrap', width: '100%' }}>
                            {renderServices}
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: { lg: '45%', xs: '100%' }, }}>
                        <Typography variant={'h2'} sx={{ pb: 3 }}>
                            Other services we offer include:
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                <EastIcon fontSize='large' color='secondary' />     Storage solutions
                            </Typography>
                            <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                <EastIcon fontSize='large' color='secondary' />   Comprehensive professional packing
                            </Typography>
                            <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                <EastIcon fontSize='large' color='secondary' />   Specialized crating for delicate items
                            </Typography>
                            <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                <EastIcon fontSize='large' color='secondary' />   Furniture disassembly and assembly
                            </Typography>
                        </Stack>
                        <Stack sx={{ width: '100%', height: { md: 300, xs: 200 }, position: 'relative', top: { md: 48, sm: 48, xs: 48 } }}>
                            {/* <Image
                                alt="backgorund"
                                src={"/sofa2cut.png"}
                                style={{ objectFit: "contain", objectPosition: 'bottom' }}
                                fill /> */}
                        </Stack>
                    </Stack>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}