'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { theme } from '@/COMPONENTS/common/Theme'
import { countries } from '@/COMPONENTS/main_page/heroInputs'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
type Props = {
    articleContinents?: ContinentsResponseType;
}
const AboutUsPage = ({ articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('europe')
    const renderCountries = countries.filter((c) => c.continent && c.continent?.toLowerCase() === active)?.map((c) => {
        const capitalizeEachWord = (str) => {
            return str.replace(/\b\w/g, (char) => char.toUpperCase());
        };
        return (
            <Stack key={c.country}>
                <Typography>
                    <EastIcon />  {capitalizeEachWord(c.country)}
                </Typography>
            </Stack>
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
                width: { sm: 'calc(50% - 8px)', xs: 'calc(100% - 8px)' },
                p: 3,
                backgroundColor: theme.palette.secondary.main
            }}>
                <Typography variant='body2' sx={{ color: '#fff', position: 'absolute', right: 16, top: 16 }}>
                    {s.number}
                </Typography>
                <Typography variant='h3' sx={{ color: '#fff', fontWeight: 600 }}>
                    {s.name}
                </Typography>
                <Typography variant='h3' sx={{ color: '#fff', fontWeight: 600 }}>
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
    const renderArticleContinents = articleContinents.data.map(ac => {
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
                        <Typography variant={'h1'} sx={{ pb: 2 }}>
                            About us
                        </Typography>
                        <Stack direction={'row'}>
                            <Stack sx={{ width: '50%' }}>
                                <Typography variant={'h2'} sx={{ pb: 1 }}>
                                    Exceptional moving services
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    Deliver1 was founded by Charlie Beck and Robertas Gailaitis, who have been active in the industry since 2013. Through their extensive experience, they recognized a significant gap in the market: a scarcity of moving companies that successfully blend value for money with high-quality service. Motivated to fill this niche, Beck and Gailaitis established Deliver1 in early 2019. Their mission was clear - to offer clients exceptional moving services without compromising on affordability or quality. Since its inception, Deliver1 has been committed to redefining the moving industry by consistently delivering excellence in every aspect of its service.
                                </Typography>
                            </Stack>
                            <Stack sx={{ width: '50%' }}>
                            </Stack>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
            <Stack sx={{ backgroundColor: '#fff' }}>
                <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
                    <Stack spacing={10} direction={'row'} width={'100%'}>
                        <Stack sx={{ width: '50%', }}>
                            <Typography variant={'h2'} sx={{ pb: 1 }}>
                                Services we offer
                            </Typography>
                            <Stack gap={2} pt={2} direction={'row'} sx={{ flexWrap: 'wrap', width: '100%' }}>
                                {renderServices}
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: '50%' }}>
                            <Typography variant={'h2'} sx={{ pb: 2 }}>
                                Other services we offer include:
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant='body1'>
                                    <EastIcon />     Storage solutions
                                </Typography>
                                <Typography variant='body1'>
                                    <EastIcon />   Storage solutions
                                </Typography>
                                <Typography variant='body1'>
                                    <EastIcon />   Storage solutions
                                </Typography>
                                <Typography variant='body1'>
                                    <EastIcon />   Storage solutions
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
            <Stack sx={{ backgroundColor: '#f1f1f1' }}>
                <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
                    <Stack sx={{ width: '100%' }}>
                        <Typography variant={'h2'} sx={{ pb: 1 }}>
                            Countries that we cover:
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            {renderArticleContinents}
                        </Stack>

                        <Stack spacing={1} pt={2}>
                            {renderCountries}
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
        </PageLayout>
    )
}

export default AboutUsPage
