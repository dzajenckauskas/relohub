'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import IconsSection from '@/COMPONENTS/common/sections/IconsSection'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import SectionCard from '@/COMPONENTS/common/sections/SectionCard'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import RelocationServicesPageHero from './RelocationServicesPageHero'

type Props = {
    countriesData?: CountriesResponseType;
}
const RelocationServicesPage = ({ countriesData }: Props) => {
    const iconsSection2Content = [
        { title: "Global Reach", text: "Deliver1 connects you with countries worldwide, handling shipping, paperwork, and logistics for a smooth moving experience.", icon: 'icon7.png' },
        { title: "Experienced Team", text: "Founded in 2019, we've perfected our processes to make your international move stress-free and efficient.", icon: 'icon8.png' },
        { title: "Door-to-Door Service", text: "We take care of everything from your current home to your new one, so you can focus on your new adventure.", icon: 'icon9.png' },
        { title: "Skilled Professionals", text: "Our team provides top packing materials and uses best practices to pack and transport your belongings safely.", icon: 'icon10.png' },
        { title: "Complete Management", text: "We manage all the details, including packing lists, shipments, and customs, so you don’t have to worry.", icon: 'icon11.png' },
        { title: "Secure Storage", text: "With secure storage facilities, your belongings are safe even if your plans change.", icon: 'icon12.png' },
        { title: "Protection Plans", text: "Our comprehensive insurance options means your belongings are covered, giving you peace of mind regardless of your budget or destination.", icon: 'icon13.png' },
        { title: "Quick and Easy Moves", text: "Our team works efficiently to pack and unpack your items, ensuring minimal disruption to your life.", icon: 'icon14.png' },
    ];

    const listContent = [
        { title: "Currency Exchange: Simple, Secure, and Stress-Free", text: "Tired of hidden fees and confusing exchange rates? Our currency exchange service offers competitive, bank-beating rates with transparent pricing. Make fast, secure transfers 24/7, buy currency in advance, and set rate alerts to get the best value for your money. With our highly-rated, established partners, your funds are always in safe hands." },
        { title: "Pet Relocation: Bespoke Travel for Your Furry Friends", text: "Moving with pets? Our premium door-to-door pet relocation service takes care of everything, from vaccinations and flight bookings to arrival at your new home. We offer flexible arrangements, including air and road transport, excess baggage assistance, and an accompanied pet program for a stress-free journey for your beloved companions." },
        { title: "Temporary Accommodation: Your Home Away from Home", text: "Finding suitable temporary housing can be a daunting task. Our personalised matchmaking service takes your unique needs into account, offering comfortable and spacious accommodations with all the amenities you need to feel at home. Our cost-effective and time-saving solutions ensure a hassle-free transition while you search for your permanent residence." },
        { title: "Area Orientation: Discover Your New Neighborhood with Ease", text: "Navigating a new environment can be overwhelming. Our area orientation service provides a full-day tour led by a local consultant, introducing you to the neighbourhood, amenities, and local culture. We personalise the tour to your interests, ensuring you gain valuable insights and feel confident in your new surroundings." },
        { title: "Home Search Assistance: Find Your Dream Home Faster", text: "Our dedicated team of experts understands the local real estate market inside out. We conduct thorough research and arrange viewings of properties that match your criteria, helping you find your ideal home quickly and efficiently. We also provide negotiation support to ensure you get the best deal possible." },
        { title: "Settling In: We're Here to Support You Every Step of the Way", text: "Relocating involves more than just finding a place to live. Our settling-in services help you navigate the practicalities of your new life. From opening bank accounts and transferring driving licences to finding doctors, dentists, and schools, we ensure a smooth transition for you and your family." },
        { title: "School Search: Expert Guidance for Your Child's Education", text: "Choosing the right school is crucial for your child's future. Our personalised school search service takes into account your child's needs and preferences, providing a curated list of schools and arranging visits to help you make an informed decision." },
        { title: "Your Relocation, Simplified with Deliver1", text: "At Deliver1, we believe that relocation should be an exciting adventure, not a stressful ordeal. Our comprehensive range of services is designed to support you every step of the way, ensuring a smooth and successful transition to your new home." },
    ];


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
                    <RelocationServicesPageHero />
                </MaxWidthContainer>
                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: { lg: '350px', md: 300, sm: 310 },
                        mt: { lg: -22, md: -20, sm: -12, xs: 0 },
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        pointerEvents: 'none',
                        left: { lg: -200, md: -160, sm: 0 },
                        top: { lg: '1px', md: '1px', sm: '1px' },
                    }}>
                        <Image
                            src={"/RelocationServices.svg"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: 'bottom'
                            }}
                            alt="Relocation services"
                            priority
                        />
                    </Stack>
                </Stack>
            </div>
            <CountriesDropdownList countriesData={countriesData} />

            <MaxWidthContainer sx={{ py: 8 }}>
                <SectionCard title={'Relocation Assistance'}>
                    <Typography>
                        Moving to a new country is an adventure filled with excitement and new beginnings. At Deliver1, we understand the challenges that come with relocating, and we&apos;re here to make your journey as smooth as possible.
                        <br />
                        <br />
                        Our relocation services are designed to support you every step of the way, ensuring a seamless transition to your new home.
                        <br />
                        <br />
                        Whether you&apos;re navigating currency exchange, planning your pet&apos;s journey, searching for temporary or permanent housing, or adjusting to a new culture, our experienced team is dedicated to providing personalised solutions that meet your unique needs.
                        <br />
                        <br />
                        With Deliver1,  you&apos;re embarking on your new chapter with confidence and peace of mind.
                    </Typography>
                </SectionCard>
            </MaxWidthContainer>

            <ListSection content={listContent}
                title='Relocation Services Offered by Deliver1' />

            <MaxWidthContainer>
                <Stack py={8}>
                    <SectionCard reverse backgroundColor="#fff"
                        buttonText='Login to customer portal'
                        url='https://admin.deliver1.co.uk/customerPortal/'
                        title={'How to Book'}>
                        <Typography>
                            Your move with Deliver1 opens the door to more than just exceptional service. Head over to your <Link passHref href={'https://admin.deliver1.co.uk/customerPortal/'} style={{ color: theme.palette.secondary.main }}>customer portal</Link> – your one-stop shop for managing your move – and discover a world of additional services designed to make your relocation even smoother.
                            <br />
                            <br />
                            As a valued Deliver1 customer, you&apos;ll also enjoy exclusive benefits, like 10% discounts on many of our popular relocation services. It&apos;s our way of saying thank you for choosing us for your big move!
                        </Typography>
                    </SectionCard>
                </Stack>
            </MaxWidthContainer>


            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack pb={8} pt={8} spacing={4} width={'100%'}>
                        <SectionCard
                            buttonText='Get in Touch'
                            url='#get-in-touch'
                            title={'Get in Touch'}
                        >
                            <Stack>
                                <Typography variant='body1' sx={{ pt: 1 }}>
                                    Contact us now to discuss your moving and storage needs and discover how Deliver1 can make your relocation a success.
                                    <br />
                                    <br />
                                    <b>
                                        Phone: <Link style={{ color: theme.palette.secondary.main }} href="tel:+443330907053">0333 090 7053</Link><br />
                                        Email: <Link style={{ color: theme.palette.secondary.main }} href="mailto:hello@deliver1.co.uk">hello@deliver1.co.uk</Link> <br />
                                        Working Hours: <span style={{ fontWeight: 400 }}>Mon - Sat: 08:00 - 17:00; Sun: <span style={{ color: theme.palette.secondary.main }}>Closed</span></span><br />
                                    </b>
                                </Typography>
                            </Stack>
                        </SectionCard>
                    </Stack>
                </MaxWidthContainer>
            </Stack>

            <IconsSection lg={3} md={3} sm={6} xs={12} backgroundColor={'#fff'}
                color='#000' align={'flex-start'} textAlign={'left'}
                title={"Our goal will always be a moving experience"}
                content={iconsSection2Content} />
            <VideoArea hideIcons />
            <LatestArticles />
        </PageLayout>
    )
}

export default RelocationServicesPage
