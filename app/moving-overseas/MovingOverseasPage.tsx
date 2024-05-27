'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import Stack from '@mui/material/Stack'
import Image from "next/image"
import MovingOverseasPageHero from './MovingOverseasPageHero'
import SectionCard from './SectionCard'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { ServicesSection } from '../about-us/ServicesSection'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'

const MovingOverseasPage = () => {
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
                    <MovingOverseasPageHero />
                </MaxWidthContainer>
                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '400px',
                        mt: { lg: -24, md: -24, sm: -24, xs: 0 },
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        pointerEvents: 'none',
                        top: { lg: 0, md: 0, sm: 0 },
                    }}>
                        <Image
                            src={"/Overseas.svg"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: 'bottom'
                            }}
                            alt="moving overseas"
                            priority
                        />
                    </Stack>
                </Stack>
            </div>
            <CountriesDropdownList />


            <MaxWidthContainer>

                <Stack py={5} spacing={4}>
                    <SectionCard reverse
                        title={'International Removals with Deliver1'}
                        shortContent={"Relocating to another country is an exciting but challenging experience. At Deliver1, we're dedicated to making your international move smooth and stress-free. With our comprehensive services, we handle all the details so you can focus on starting your new adventure."}
                    />
                    <SectionCard url='#get-in-touch'
                        buttonText={'Get in touch'}
                        title='Simple and Efficient Moving Process'
                        shortContent='At Deliver1, we understand that every move is unique. Our intuitive customer portal simplifies the process, allowing you to plan, book, and manage your move easily. From getting a quote to tracking your belongings, everything is handled online, ensuring a quick and seamless experience tailored to your needs.' />
                </Stack>
            </MaxWidthContainer>


            {/* 
            
            */}


            <Stack sx={{ backgroundColor: '#252420' }}>
                <MaxWidthContainer sx={{ py: 8 }}>
                    <Stack alignItems={'center'}>
                        {<Typography variant='h2' component={'h2'} sx={{
                            py: 1,
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 700,
                            lineHeight: 1.2,
                            width: { xs: '100%', sm: '80%', md: '50%' },
                            // minHeight: { xs: 0, md: '102px' }
                        }}>
                            {`Extensive Removal Network`}
                        </Typography>}

                        <Typography variant='body1'
                            sx={{
                                textAlign: 'center',
                                pt: 1, color: '#fff',
                                width: { md: '50%', sm: '80%', xs: '80%' },
                            }}
                        >
                            {`Our network ensures that no matter where you're moving, we have the local expertise and resources to manage your move efficiently. Our experienced team is well-versed in customs regulations and logistical challenges of international relocations.`}
                        </Typography>
                        <Typography sx={{
                            mt: 2,
                            height: '100%',
                            // width: 'fit-content',
                            width: { md: 'max-content', sm: 'fit-content', xs: 'fit-content' },
                            fontSize: 14,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            justifySelf: 'flex-end',
                            color: theme.palette.secondary.main,
                            cursor: 'pointer',
                            // backgroundColor: '#fff',
                            backgroundColor: "transparent",
                            fontWeight: 600,
                            ':hover': { color: theme.palette.secondary.dark }
                        }}>
                            <Link aria-label="Get in touch" passHref href={'#get-in-touch'}
                                style={{
                                    paddingTop: 16, display: 'flex',
                                    justifyContent: 'center', width: '100%',
                                }}>
                                <Button variant='contained' color='secondary'
                                    aria-label="Get in touch"
                                    size="large"
                                    sx={{
                                        width: '100%', px: 4
                                    }}>
                                    {'CONTACT US'}
                                </Button>
                            </Link>
                        </Typography>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
            <ProcessWrapper title='How it works?' />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack py={5} spacing={4}>
                        <SectionCard reverse
                            url='#get-in-touch'
                            buttonText={'Get in touch'}
                            title={'Our background'}
                            shortContent={"Relocating to another country is an exciting but challenging experience. At Deliver1, we're dedicated to making your international move smooth and stress-free. With our comprehensive services, we handle all the details so you can focus on starting your new adventure."}
                        />
                        <SectionCard
                            title='Simple and Intuitive Customer Portal'
                            shortContent='At Deliver1, we understand that every move is unique. Our intuitive customer portal simplifies the process, allowing you to plan, book, and manage your move easily. From getting a quote to tracking your belongings, everything is handled online, ensuring a quick and seamless experience tailored to your needs.' />
                    </Stack>
                </MaxWidthContainer>
            </Stack>

            <ServicesSection />

            {/* 

*/}

        </PageLayout>
    )
}

export default MovingOverseasPage
