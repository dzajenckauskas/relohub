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

type Props = {
    articleContinents?: ContinentsResponseType;
}
const MovingToPage = ({ articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('europe')
    const renderCountries = countries.filter((c) => c.continent && c.continent?.toLowerCase() === active)?.map((c) => {
        const capitalizeEachWord = (str: string) => {
            return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
        };
        return (
            <Grid item xs={6} sm={4} md={3} key={c.country}>
                <Typography variant='body1' sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                    <EastIcon fontSize='large' color='secondary' />
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
                    <MovingToPageHero />
                </MaxWidthContainer>
                {/* <Postheroimages /> */}

                <section className="globalWrapperheropostimage">
                    <FlagIllustration country={'lt'} />
                    {/* <Image
                        src={"/deliveri-1-1.png"}
                        width={180}
                        height={163}
                        style={{ objectFit: "contain" }}
                        alt="human carying box"
                        className="heropostimagecaryingimg"
                        priority
                    />

                    <Image
                        src={"/deliveri-2-1.png"}
                        width={594}
                        height={226}
                        style={{
                            objectFit: "contain",
                        }}
                        alt="human carying stuff"
                        priority
                        className="heropostimagecaryingsofaimg"
                    /> */}
                </section>

            </div>
        </PageLayout >
    )
}

export default MovingToPage
