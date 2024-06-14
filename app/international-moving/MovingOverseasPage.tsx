'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import Stack from '@mui/material/Stack'
import Image from "next/image"
import { ServicesSection } from '../../COMPONENTS/common/sections/ServicesSection'
import MovingOverseasPageHero from './MovingOverseasPageHero'
import SectionCard from '../../COMPONENTS/common/sections/SectionCard'
import TextSection from '@/COMPONENTS/common/sections/TextSection'
import IconsSection from '@/COMPONENTS/common/sections/IconsSection'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import Typography from '@mui/material/Typography'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Link from 'next/link'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'next-share'
type Props = {
    countriesData?: CountriesResponseType;
}
const MovingOverseasPage = ({ countriesData }: Props) => {
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
        { title: "Professional Packing", text: "Our expert movers ensure your belongings are safe during transit and delivered in one piece." },
        { title: "Flexible Transport Options", text: "Choose from air, sea, or road transport to fit your schedule and budget." },
        { title: "Pet Relocation", text: "Your pets are part of the family, and our specialised pet relocation services ensure they travel safely and comfortably." },
        { title: "Secure Storage", text: "We offer safe storage options both at home and abroad." },
    ];
    const iconsSectionContent = [
        { title: "Convenient Online Customer Portal", text: "Manage your move easily from your computer or phone.", icon: 'icon1.png' },
        { title: "Experienced Professionals", text: "Our team has extensive expertise in international relocations.", icon: 'icon2.png' },
        { title: "Competitive Pricing", text: "Exceptional service that fits your budget.", icon: 'icon3.png' },
        { title: "Personalised Service", text: "Customised moving plans tailored to your unique needs.", icon: 'icon4.png' },
        { title: "Comprehensive Solutions", text: "From packing to storage, we cover all aspects of your move.", icon: 'icon5.png' },
        { title: "Reliable and Trustworthy", text: "Founded by industry veterans committed to high standards and customer satisfaction.", icon: 'icon6.png' },
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
            <CountriesDropdownList countriesData={countriesData} />

            <MaxWidthContainer>
                <Stack py={5} spacing={4}>
                    <SectionCard reverse
                        imgSrc='/images/moving-overseas/international-removals-with-deliver1.png'
                        imgAlt='international removals with deliver1'
                        title={'International Removals with Deliver1'}
                        shortContent={"Relocating to another country is an exciting but challenging experience. At Deliver1, we're dedicated to making your international move smooth and stress-free. With our comprehensive services, we handle all the details so you can focus on starting your new adventure."}
                    />
                    <SectionCard url='#get-in-touch'
                        objectPosition='top'
                        imgSrc='/images/moving-overseas/simple-and-efficient-moving.png'
                        imgAlt='simple and efficient moving'
                        buttonText={'Get in touch'}
                        title='Simple and Efficient Moving Process'
                        shortContent='At Deliver1, we understand that every move is unique. Our intuitive customer portal simplifies the process, allowing you to plan, book, and manage your move easily. From getting a quote to tracking your belongings, everything is handled online, ensuring a quick and seamless experience tailored to your needs.' />
                </Stack>
            </MaxWidthContainer>

            <IconsSection mobileCenter lg={3} md={3} sm={6} xs={12} backgroundColor={'#ededed'}
                color='#000' align={'flex-start'} textAlign={'left'}
                title={"Our goal will always be a moving experience"}
                content={iconsSection2Content} />

            <TextSection title={`Extensive Removal Network`}
                text={`Our network ensures that no matter where you're moving, we have the local expertise and resources to manage your move efficiently. Our experienced team is well-versed in customs regulations and logistical challenges of international relocations.`} />

            <ListSection content={listContent}
                title='Complete Moving Solutions' />

            <ProcessWrapper title='How it works?' />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack py={8} spacing={6}>
                        <SectionCard reverse
                            url='#get-in-touch'
                            buttonText={'Get in touch'}
                            imgSrc='/cover-img.jpg'
                            objectPosition={'top'}
                            imgAlt='our background'
                            title={'Our background'}
                            shortContent={"Relocating to another country is an exciting but challenging experience. At Deliver1, we're dedicated to making your international move smooth and stress-free. With our comprehensive services, we handle all the details so you can focus on starting your new adventure."}
                        />
                        <SectionCard
                            imgSrc='/images/moving-overseas/customer-portal.png'
                            imgAlt='customer-portal'
                            objectPosition={'left'}
                            title='Simple and Intuitive Customer Portal'
                            shortContent='At Deliver1, we understand that every move is unique. Our intuitive customer portal simplifies the process, allowing you to plan, book, and manage your move easily. From getting a quote to tracking your belongings, everything is handled online, ensuring a quick and seamless experience tailored to your needs.' />
                    </Stack>
                </MaxWidthContainer>
            </Stack>

            <ServicesSection />

            <IconsSection title={"Why Choose Deliver1 for Your European Move?"}
                lg={4}
                content={iconsSectionContent} />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack>
                        <Stack py={8}>
                            <SectionCard reverse backgroundColor="#fff"
                                sm='column'
                                buttonText='View countries we cover'
                                url='/about-us#countries-we-cover'
                                imgSrc='/images/moving-overseas/countries-we-cover.png'
                                imgAlt='countries we cover'
                                title={'Countries We Cover'}
                                shortContent={"Deliver1 can help you move to almost every country on earth. No matter where your destination is, our extensive network and experienced team ensure a smooth and efficient relocation process."}
                            />
                        </Stack>
                        <Stack pb={8}>
                            <SectionCard
                                objectPosition='top'
                                sm='column'
                                imgSrc='/images/moving-overseas/start-journey.png'
                                imgAlt='start journey'
                                buttonText='Get Started'
                                url='#countries-we-cover'
                                title={'Start Your Journey Today'}
                            >
                                <Stack>
                                    <Typography variant='body1' sx={{ pt: 1 }} component={'div'} >
                                        Ready to move? Contact us today for a free quote and consultation. Let us handle the logistics so you can focus on your new life abroad. With Deliver1, your international move is in expert hands.
                                        <br />
                                        <br />
                                        Contact us now to discuss your moving needs and see how Deliver1 can make your international relocation a success. We’re excited to help you start this new chapter in your life.
                                        <br />
                                        <br />
                                        <Typography variant='subtitle1' fontWeight={600} pb={1}>
                                            Follow Us on Social Media:
                                        </Typography>
                                        <Stack direction={'row'} pb={2} spacing={2}>
                                            <Link style={{ color: theme.palette.secondary.main }} href={'https://www.facebook.com/deliver1uk/'}><FacebookIcon /></Link>
                                            <Link style={{ color: theme.palette.secondary.main }} href={'https://uk.linkedin.com/company/deliver1'}><LinkedinIcon /></Link>
                                            <Link style={{ color: theme.palette.secondary.main }} href={'https://www.instagram.com/deliver1_uk/'}><InstagramIcon /></Link>
                                        </Stack>
                                        <Typography variant='subtitle1' fontWeight={600} pb={1}>
                                            Contact Us:
                                        </Typography>
                                        <b>
                                            Phone: <Link style={{ color: theme.palette.secondary.main }} href="tel:+443330907053">0333 090 7053</Link><br />
                                            Email: <Link style={{ color: theme.palette.secondary.main }} href="mailto:hello@deliver1.co.uk">hello@deliver1.co.uk</Link> <br />
                                            Working Hours: <span style={{ fontWeight: 400 }}>Mon - Sat: 08:00 - 17:00; Sun: <span style={{ color: theme.palette.secondary.main }}>Closed</span></span><br />
                                        </b>
                                    </Typography>
                                </Stack>
                            </SectionCard>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
            <VideoArea hideIcons />
            <LatestArticles />
        </PageLayout>
    )
}

export default MovingOverseasPage
