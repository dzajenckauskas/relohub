'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { countriesData } from '../countriesData'
import { ServicesSection } from './ServicesSection'
import { CoveredCountriesSection } from './CoveredCountriesSection'

type Props = {
    articleContinents?: ContinentsResponseType;
    countries?: CountriesResponseType;
}

const AboutUsPage = ({ articleContinents, countries }: Props) => {



    const dd = countriesData()

    // console.log(), "dd");
    // const renderdata = dd.map((c) => {
    //     return {
    //         data: {
    //             name: c.name,
    //             iso2: c.iso2,
    //             url: c.name?.toLowerCase(),
    //             collection: true,
    //             destination: true,
    //             continent: "Europe",
    //             seo: {
    //                 seoTitle: `Moving to or from ${c.name}`,
    //                 seoDescription: `Moving to or from ${c.name}`,
    //                 seoKeywords: `Moving to or from ${c.name}`
    //             },
    //             // cities: c.cities
    //         }
    //     }
    // })




    const post = async () => {

        // renderdata.forEach(async (d) => {
        //     console.log(d)
        //     try {
        //         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/countries`, d);
        //         console.log('API Response:', response.request);
        //     } catch (error) {
        //         console.error('Error calling external API:', error);
        //     }
        // })
    }

    return (
        <PageLayout>
            {/* 
            <button onClick={() => post()}>
                POST
            </button> */}
            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack sx={{
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Stack direction={'row'} justifyContent={'flex-start'} spacing={.5} sx={{
                            paddingTop: '10px',
                            marginBottom: '20px',
                            alignItems: 'center',
                        }}>
                            <Link passHref href={'/'}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    Home
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {'/'}
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 400, }}>
                                {"About us"}
                            </Typography>
                        </Stack>
                        <Typography variant='h1' sx={{ pb: 2 }}>{"About us"}</Typography>
                    </Stack>
                </MaxWidthContainer>
                <MaxWidthContainer sx={{ display: 'flex', flexDirection: 'column', pb: 6 }}>
                    <Stack>
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
            <ServicesSection />
            <CoveredCountriesSection articleContinents={articleContinents} countries={countries} />
        </PageLayout>
    )
}

export default AboutUsPage
