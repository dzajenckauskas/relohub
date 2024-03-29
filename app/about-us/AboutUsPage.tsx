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

type Props = {
    articleContinents?: ContinentsResponseType;
}
const AboutUsPage = ({ articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('europe')
    const renderCountries = countries.filter((c) => c.continent && c.continent?.toLowerCase() === active)?.map((c) => {
        const capitalizeEachWord = (str: string) => {
            return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
        };
        return (
            <Grid item xs={6} sm={4} md={3} key={c.country}>
                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                    <EastIcon fontSize='large' />
                    {capitalizeEachWord(c.country)}
                </Typography>
            </Grid>
        )
    })
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
            slogan: "door-to-door",
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

    // Move the "Europe" continent to the beginning of the array if found
    const europeIndex = articleContinents.data.findIndex(ac => ac.attributes.key === 'europe');
    if (europeIndex !== -1) {
        const europeContinent = articleContinents.data.splice(europeIndex, 1)[0];
        articleContinents.data.unshift(europeContinent);
    }
    const renderArticleContinents = articleContinents.data.filter(ac => ac.attributes.key !== 'north-america')?.map(ac => {
        const isActive = ac.attributes.key === active;
        return (
            <Button
                key={ac.id}
                onClick={() => setActive(ac.attributes.key)}
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
        <PageLayout>
            <Stack sx={{ backgroundColor: '#f1f1f1' }}>
                <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
                    <Stack>
                        <Typography variant={'h1'} sx={{ pb: 4 }}>
                            About us
                        </Typography>
                        <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ xs: 4, md: 8 }}>
                            <Stack sx={{ width: '100%' }}>
                                <Typography variant={'h2'} sx={{ pb: 2 }}>
                                    Exceptional moving services
                                </Typography>
                                <Typography variant='body1'>
                                    Deliver1 was founded by Charlie Beck and Robertas Gailaitis, who have been active in the industry since 2013. Through their extensive experience, they recognized a significant gap in the market: a scarcity of moving companies that successfully blend value for money with high-quality service. Motivated to fill this niche, Beck and Gailaitis established Deliver1 in early 2019. Their mission was clear - to offer clients exceptional moving services without compromising on affordability or quality. Since its inception, Deliver1 has been committed to redefining the moving industry by consistently delivering excellence in every aspect of its service.
                                </Typography>
                            </Stack>
                            <Stack sx={{ width: '100%', height: { md: 'auto', xs: 300 }, position: 'relative' }}>
                                <Image
                                    alt="backgorund"
                                    src={"/cover-img.jpg"}
                                    objectFit='cover'
                                    style={{ borderRadius: 4 }}
                                    objectPosition='top'
                                    fill />
                            </Stack>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
            <Stack sx={{ backgroundColor: '#fff' }}>
                <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
                    <Stack spacing={{ lg: 10, xs: 10 }} direction={{ md: 'row', xs: 'column' }} width={'100%'}>
                        <Stack sx={{ width: { lg: '55%', xs: '100%' }, }}>
                            <Typography variant={'h2'} sx={{ pb: 1 }}>
                                Services we offer
                            </Typography>
                            <Stack gap={{ xs: 1, sm: 2 }} pt={2} direction={'row'} sx={{ flexWrap: 'wrap', width: '100%' }}>
                                {renderServices}
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: { lg: '45%', xs: '100%' }, }}>
                            <Typography variant={'h2'} sx={{ pb: 2 }}>
                                Other services we offer include:
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                    <EastIcon fontSize='large' />     Storage solutions
                                </Typography>
                                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                    <EastIcon fontSize='large' />   Comprehensive professional packing
                                </Typography>
                                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                    <EastIcon fontSize='large' />   Specialized crating for delicate items
                                </Typography>
                                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                                    <EastIcon fontSize='large' />   Furniture disassembly and assembly
                                </Typography>
                            </Stack>
                            <Stack sx={{ width: '100%', height: { md: 300, xs: 200 }, position: 'relative', top: { md: 48, sm: 48, xs: 48 } }}>
                                <Image
                                    alt="backgorund"
                                    src={"/sofa2cut.png"}
                                    objectFit='contain'
                                    objectPosition='bottom'
                                    fill />
                            </Stack>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
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
        </PageLayout>
    )
}

export default AboutUsPage
