'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import MovingEuropePageHero from './MovingEuropePageHero'
import SectionCard from '../moving-overseas/SectionCard'
import TextSection from '../moving-overseas/TextSection'
import Typography from '@mui/material/Typography'
import { theme } from '@/COMPONENTS/common/shared/Theme'

type Props = {
    articleContinents?: ContinentsResponseType;
}
const MovingEuropePage = ({ articleContinents }: Props) => {

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
                    <MovingEuropePageHero />
                </MaxWidthContainer>

                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "900px",
                        height: '300px',
                        mt: { lg: -21, md: -21, sm: -19, xs: 0 },
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        pointerEvents: 'none',
                        top: { lg: '1px', md: '1px', sm: '1px' },
                    }}>
                        <Image
                            src={"/WithinEurope.svg"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: 'bottom'
                            }}
                            alt="mowing within europe"
                            priority
                        />
                    </Stack>
                </Stack>

            </div>
            <CountriesDropdownList />
            <MaxWidthContainer>
                <Stack py={5} spacing={4}>
                    <SectionCard reverse
                        title={'European Removals Made Easy with Deliver1'}
                        shortContent={"Moving to a new country in Europe is an exciting adventure, and at Deliver1, we're dedicated to making your move seamless and stress-free. With our comprehensive European removals service, we take care of every detail, allowing you to focus on exploring your new home."}
                    />
                    <SectionCard
                        title='Simple and Efficient Moving Process'
                        shortContent='We understand that every move is unique. Our intuitive online platform simplifies your move, making it easy to plan, book, and manage your European relocation. From obtaining a quote to tracking your belongings, everything is handled online, ensuring a streamlined and personalised experience.' />

                </Stack>
            </MaxWidthContainer>
            <TextSection title={`Extensive European Network`}
                text={`Our trusted network of experienced professionals across Europe provides you with the local expertise and resources needed for a smooth move. We are well-versed in customs regulations and the logistical challenges associated with European removals, ensuring your belongings arrive safely and on time.`} />


            <MaxWidthContainer>
                <Stack py={5} gap={{ sm: 6, xs: 4 }} direction={{ md: 'row', xs: 'column' }}>
                    <Typography variant='h2' component={'h2'} width={{ md: '30%', xs: '100%' }}>
                        Complete European <br /> Moving Solutions
                    </Typography>
                    <Stack spacing={2} pt={1}>
                        <Stack direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                            sx={{ borderBottom: '1px solid #c2c2c2', pb: 2 }}>
                            <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main} sx={{ width: { sm: '35%', xs: '100%' }, fontWeight: 500 }}>
                                Professional Packing
                            </Typography>
                            <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                                Our expert team ensures your possessions are meticulously packed and protected for their journey.
                            </Typography>
                        </Stack>
                        <Stack direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                            sx={{ borderBottom: '1px solid #c2c2c2', pb: 2 }}>
                            <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main} sx={{ width: { sm: '35%', xs: '100%' }, fontWeight: 500 }}>
                                Flexible Transport Options
                            </Typography>
                            <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                                Choose from road or sea freight options to suit your timeline and budget.
                            </Typography>
                        </Stack>
                        <Stack direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                            sx={{ borderBottom: '1px solid #c2c2c2', pb: 2 }}>
                            <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main} sx={{ width: { sm: '35%', xs: '100%' }, fontWeight: 500 }}>
                                Secure Storage
                            </Typography>
                            <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                                We offer safe and convenient storage solutions in your home country and your new European destination.
                            </Typography>
                        </Stack>
                        <Stack direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                            sx={{ borderBottom: '1px solid transparent', pb: 2 }}>
                            <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main} sx={{ width: { sm: '35%', xs: '100%' }, fontWeight: 500 }}>
                                Specialised Services
                            </Typography>
                            <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                                We provide tailored services for delicate items, furniture disassembly and assembly, and more.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </MaxWidthContainer>
        </PageLayout>
    )
}

export default MovingEuropePage
