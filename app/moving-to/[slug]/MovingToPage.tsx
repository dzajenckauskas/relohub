'use client'
import { FlagIllustration } from '@/COMPONENTS/FlagIllustration'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { ExpandButton } from '@/COMPONENTS/common/ExpandButton'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import IconsSection from '@/COMPONENTS/common/sections/IconsSection'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import SectionCard from '@/COMPONENTS/common/sections/SectionCard'
import { ServicesSection } from '@/COMPONENTS/common/sections/ServicesSection'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import { CountriesResponseType, CountryResponseType } from '@/COMPONENTS/types/CountryType'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'next-share'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MovingToPageHero from './MovingToPageHero'
import "/STYLES/svg-style.css"
import { InstantQuoteComponent } from '@/COMPONENTS/common/InstantQuoteComponent'

type Props = {
    articleContinents?: ContinentsResponseType;
    country?: CountryResponseType;
    countriesdata?: CountriesResponseType;
}
const MovingToPage = ({ articleContinents, country, countriesdata }: Props) => {
    const listContent = [
        { title: "Professional Handling Services", text: "Our skilled team will meticulously handle your possessions, using high-quality materials and proven techniques to safeguard your items throughout their journey.", icon: 'icon10.png' },
        { title: "Stress-Free Door-to-Door Delivery", text: "Sit back and relax as we manage every aspect of your move, from collection at your current residence to delivery and unpacking at your new home in Spain.", icon: 'icon9.png' },
        { title: "Expert Customs Clearance", text: "We streamline the customs clearance process, taking care of all necessary paperwork and documentation to minimise delays and ensure a smooth arrival for your shipment.", icon: 'icon14.png' },
    ];
    const listContent2 = [
        { title: "Real-Time Shipment Tracking", text: "Stay connected with your belongings every step of the way, with up-to-date tracking information and notifications directly to your device." },
        { title: "Personalised Service for Your Unique Needs", text: "We understand that no two moves are alike. Our team will work closely with you to design a customised moving plan that caters to your specific requirements and budget." },
        { title: "24/7 Customer Support", text: "We're here for you whenever you need us. Our dedicated customer support team is available around the clock to answer your questions, address any concerns, and provide expert guidance throughout your moving journey." },
        { title: "Experience the Deliver1 Difference", text: "At Deliver1, we believe that moving to Spain should be an exciting adventure, not a stressful ordeal. Choose us for a seamless, transparent, and personalised moving experience that exceeds your expectations." },
        { title: "Ready to Start Your Journey?", text: "Contact us today for a free, no-obligation quote and let us help you turn your dream of living in Spain into a reality." },
    ];

    const [clicked, setclicked] = useState(null);


    const renderFAQs = country.data.attributes.faqs?.map((faq) => {
        return (
            <div className="faqfaqliner" key={faq.id}>
                <div className="faqfaqinsidetop" style={{ cursor: 'pointer' }} onClick={() => {
                    setclicked(
                        clicked === faq.question ? null : faq.question,
                    );
                }}>
                    <Typography variant={'h4'} component={'p'} sx={{ fontWeight: 700, pr: 2, color: theme.palette.secondary.main }}>{faq.question}</Typography>
                    <ExpandButton
                        active={clicked === faq.question}
                        setActive={setclicked}
                        onClick={() => {
                            setclicked(
                                clicked === faq.question ? null : faq.question,
                            );
                        }}
                    />
                </div>

                {clicked === faq.question ? (
                    <p className="faqfaqinsidep">{faq.answer}</p>
                ) : null}
            </div>
        )
    })
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
            <MaxWidthContainer>
                <Stack py={5} spacing={4}>
                    <SectionCard reverse
                        title={`Removals to ${country.data.attributes.name} with Deliver1`}
                        shortContent={`Welcome to Deliver1 - Your reliable partner for stress-free and efficient international removals to ${country.data.attributes.name}. Whether you are relocating for work, family, or adventure, our comprehensive moving services ensure your belongings reach safely and on time.`}
                    />
                    <SectionCard
                        title={'Experience and Expertise You Can Trust'}
                        shortContent={`With over 20 years of combined experience in international removals, Deliver1 is your trusted partner in navigating the complexities of moving to ${country.data.attributes.name}. Our team of experts possesses in-depth knowledge of ${country.data.attributes.name}'s logistics and customs regulations, ensuring a seamless and efficient transition for your belongings.`}
                    />
                </Stack>
            </MaxWidthContainer>

            <IconsSection lg={4} md={4} sm={6} xs={12} backgroundColor={'#ededed'}
                color='#000' align={'flex-start'} textAlign={'left'}
                title={"Comprehensive Moving Services Tailored to You"}
                content={listContent} />

            <ProcessWrapper title='How it works?' />

            <ListSection content={listContent2}
                title='A Customer-Centric Approach That Puts You First' />



            {/* <MaxWidthContainer>
                <Typography component={'div'} className='dynamicContent' sx={{ py: 8 }} dangerouslySetInnerHTML={{ __html: country?.data.attributes.fullContent }} />
            </MaxWidthContainer> */}

            <MaxWidthContainer sx={{ pb: { xs: 4, md: 8 }, flexDirection: 'column', }}>
                <Stack sx={{
                    mx: 'auto',
                    mb: { xs: 4, md: 6 },
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 600 },
                    justifyContent: 'flex-end',
                    borderRadius: '5px',
                    overflow: 'hidden'
                }}>
                    {/* <Image
                            priority
                            src={`${process.env.NEXT_PUBLIC_API_URL}${article?.data?.attributes?.image?.data?.attributes?.url ?? article?.data?.attributes?.image?.data?.attributes?.url}`}
                            alt={article?.data?.attributes?.image?.data?.attributes?.alternativeText ?? article?.data?.attributes?.title}
                            fill
                            objectFit="cover"
                        /> */}
                    <Stack
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '70%',
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                        }}
                    />
                    {/* <Stack direction={{ xs: 'column-reverse', md: 'column' }} sx={{ px: 2, pb: 3, position: 'relative', zIndex: 2, mx: { xs: 0, md: 'auto' } }}>
                            <Typography sx={{ maxWidth: 'md', position: 'relative', zIndex: 2, textAlign: { xs: 'left', sm: 'left', md: 'center' }, color: '#fff', fontSize: { xs: 28, sm: 34, md: 42 } }}
                                variant='h1' fontWeight={700}>{article?.data?.attributes?.title}</Typography>

                            <Stack direction={'row'} justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'center' }} pt={3} alignItems={'center'} spacing={2}>
                                <Typography ref={textRef}
                                    sx={{
                                        color: '#fff', fontSize: 14, textTransform: 'uppercase',
                                        fontWeight: 500, letterSpacing: 1
                                    }}>
                                    {category} {continent && <>• {continent}</>} • {formattedDate}
                                </Typography>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}
                                    sx={{
                                        display: { xs: 'none', md: 'flex' }
                                    }}>
                                    <Stack direction={'row'} spacing={1.5} px={2} sx={{ justifyContent: 'center' }}>
                                        <WhatsappShareButton
                                            url={url}
                                            title={article?.data?.attributes?.title}
                                            separator=":: "
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <WhatsAppIcon sx={{ fontSize: 22 }} />
                                            </Stack>
                                        </WhatsappShareButton>
                                        <FacebookShareButton
                                            url={url}
                                            quote={article?.data?.attributes?.title}
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <FacebookIcon color={'#000'} />
                                            </Stack>
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url={url}
                                            title={article?.data?.attributes?.title}
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <XIcon color='#000' />
                                            </Stack>
                                        </TwitterShareButton>
                                    </Stack>

                                    <Box id="share-box" sx={{ width: '60px', height: '1px', backgroundColor: '#fff' }}></Box>
                                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>
                                        {'Share this article'}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack> */}
                </Stack>
                <Stack sx={{ maxWidth: 'md', }}>
                    <Typography component={'div'} className='dynamicContent' dangerouslySetInnerHTML={{ __html: country?.data.attributes.fullContent }} />
                </Stack>
                <Stack width={'100%'} sx={{ maxWidth: 'md', px: { xs: 2, md: 0 } }}>
                    {/* <Stack direction={'row'} justifyContent={'flex-start'} width={'100%'}>
                            <Typography sx={{
                                mt: 4,
                                width: 'fit-content',
                                fontSize: 14,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color: theme.palette.secondary.main,
                                cursor: 'pointer',
                                fontWeight: 600,
                                textAlign: 'left',
                                ':hover': { color: theme.palette.secondary.dark }
                            }}>
                                <Link aria-label="Back to articles"
                                    href={`/guides/${countriesdata?.data?.attributes?.articleCategory?.data.attributes.key}`} passHref>
                                    Back to articles
                                </Link>
                            </Typography>
                        </Stack> */}
                    <Stack direction={'row'} justifyContent={'flex-start'} pt={4} alignItems={'center'} spacing={2}>
                        {/* <Stack direction={'row'} spacing={1.5}>
                                <WhatsappShareButton
                                    url={url}
                                    title={article?.data?.attributes?.title}
                                    separator=":: "
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                        <WhatsAppIcon sx={{ fontSize: 22, color: '#fff' }} />
                                    </Stack>
                                </WhatsappShareButton>
                                <FacebookShareButton
                                    url={url}
                                    quote={article?.data?.attributes?.title}
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>

                                        <FacebookIcon color={'#fff'} />
                                    </Stack>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={url}
                                    title={article?.data?.attributes?.title}
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                        <XIcon color='#fff' />
                                    </Stack>
                                </TwitterShareButton>
                            </Stack> */}
                        {/* <Box sx={{ width: { sm: 90, xs: 30 }, height: '1px', backgroundColor: '#000' }}></Box>
                            <Typography sx={{ color: '#000', fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>
                                {'Share this article'}
                            </Typography> */}
                    </Stack>
                    <Stack direction='row' justifyContent={'center'} width={'100%'} sx={{ mt: 8, maxWidth: 'sm', mx: 'auto' }}>
                        <Stack maxWidth={{ md: 'none', xs: 'sm' }}
                            sx={{
                                width: '100%',
                                mx: 'auto',
                                p: { md: 6, xs: 2 },
                                mb: 3,
                                backgroundColor: '#fff',
                                borderRadius: 2,
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                            }}>
                            <InstantQuoteComponent />
                        </Stack>
                    </Stack>

                    <Stack direction={'row'} sx={{
                        width: '100%',
                        maxWidth: { md: 900, xs: 600 },
                        height: { md: 300, sm: 250, xs: 200 },
                        mt: { lg: -15, md: -16, sm: -14, xs: 0 },
                        mb: { md: '-64px', xs: '-32px' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        pointerEvents: 'none',
                        left: { lg: 0, md: 0, sm: 20, xs: 0 },
                        // top: { lg: 0, md: 0, sm: 0 },
                    }}>
                        <Image
                            src={"/MovingServices.svg"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: 'bottom'
                            }}
                            alt="Movin services"
                            priority
                        />
                    </Stack>
                </Stack>
            </MaxWidthContainer>





            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack >
                        <Stack py={8}>
                            <SectionCard
                                textWidth={'80%'}
                                buttonText='Get in touch'
                                url='#get-in-touch'
                                title={'Get Started Today!'}
                            >
                                <Stack>
                                    <Typography variant='body1' sx={{ pt: 1 }} component={'div'}>
                                        Ready to make your move to Spain? Contact us now for a free quote and let Deliver1 take the stress out of your international relocation.
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
            <ServicesSection />
            <section className="faqglobalwrp">
                <MaxWidthContainer>
                    <div className="faqinsidewrp">
                        <p className="faqwrphowitworksp">F.A.Q</p>
                        <h2 className="processwrptheprocess">
                            Frequently Asked Questions
                        </h2>

                        <div className="faqfaqwrp">
                            {renderFAQs}
                        </div>
                    </div>
                </MaxWidthContainer>
            </section>
            <VideoArea hideIcons />


            <LatestArticles />
        </PageLayout>
    )
}

export default MovingToPage
