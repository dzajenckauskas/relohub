'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import IconsSection from '../../COMPONENTS/common/sections/IconsSection'
import SectionCard from '../../COMPONENTS/common/sections/SectionCard'
import MovingEuropePageHero from './MovingEuropePageHero'
import TextSection from '@/COMPONENTS/common/sections/TextSection'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'

type Props = {
    articleContinents?: ContinentsResponseType;
}
const MovingEuropePage = ({ articleContinents }: Props) => {
    const processContent = [
        { title: "Get a Free Quote", txt: "Request a personalised quote online", top: -45 },
        { title: "Packing Materials", txt: "We deliver packing materials if you need them", top: -18 },
        { title: "Pack Your Goods", txt: "Pack your belongings, then fill in our easy to use customer portal", top: -32 },
        { title: "Collection", txt: "We collect your packed items from your doorstep", top: -80 },
        { title: "Transport and Updates", txt: "We keep you informed every step of the way as your belongings are transported to your new European home", top: -46 },
    ];
    const iconsSectionContent = [
        { title: "Convenient Online Customer Portal", text: "Manage your move effortlessly from any device", icon: 'icon1.png' },
        { title: "European Expertise", text: "Our team possesses extensive knowledge of European removals", icon: 'icon2.png' },
        { title: "Competitive Pricing", text: "Premium service at a price that fits your budget", icon: 'icon3.png' },
        { title: "Personalised Service", text: "Customised moving plans tailored to your specific needs", icon: 'icon4.png' },
        { title: "Comprehensive Solutions", text: "We cover every aspect of your European move, from packing to storage", icon: 'icon5.png' },
        { title: "Reliable and Trustworthy", text: "Founded by industry veterans committed to excellence and customer satisfaction", icon: 'icon6.png' },
    ];
    const listContent2 = [
        { title: "European Road Freight", text: "Efficient and reliable door-to-door transport across the continent.", icon: 'icon7.png' },
        { title: "European Sea Freight", text: "Cost-effective door-to-door shipping for larger moves or coastal destinations.", icon: 'icon8.png' },
        { title: "Storage Solutions in Europe", text: "Secure storage options in your home country and your new European residence.", icon: 'icon9.png' },
        { title: "Professional Packing", text: "Expert packing services designed to protect your belongings during transit.", icon: 'icon10.png' },
        { title: "Specialised Crating", text: "Bespoke crating solutions for fragile or valuable items.", icon: 'icon11.png' },
        { title: "Furniture Disassembly and Assembly", text: "Hassle-free dismantling and reassembly of your furniture.", icon: 'icon12.png' },
    ];
    const listContent = [
        { title: "Professional Packing", text: "Our expert team ensures your possessions are meticulously packed and protected for their journey." },
        { title: "Flexible Transport Options", text: "Choose from road or sea freight options to suit your timeline and budget." },
        { title: "Secure Storage", text: "We offer safe and convenient storage solutions in your home country and your new European destination." },
        { title: "Specialised Services", text: "We provide tailored services for delicate items, furniture disassembly and assembly, and more." },
    ];
    const iconsSectionContent2 = [
        { title: "Global Reach", text: "Deliver1 connects you with countries worldwide, handling shipping, paperwork, and logistics for a smooth moving experience.", icon: 'icon7.png' },
        { title: "Experienced Team", text: "Founded in 2019, we've perfected our processes to make your international move stress-free and efficient.", icon: 'icon8.png' },
        { title: "Door-to-Door Service", text: "We take care of everything from your current home to your new one, so you can focus on your new adventure.", icon: 'icon9.png' },
        { title: "Skilled Professionals", text: "Our team provides top packing materials and uses best practices to pack and transport your belongings safely.", icon: 'icon10.png' },
        { title: "Complete Management", text: "We manage all the details, including packing lists, shipments, and customs, so you don’t have to worry.", icon: 'icon11.png' },
        { title: "Secure Storage", text: "With secure storage facilities, your belongings are safe even if your plans change.", icon: 'icon12.png' },
        { title: "Protection Plans", text: "Our comprehensive insurance options means your belongings are covered, giving you peace of mind regardless of your budget or destination.", icon: 'icon13.png' },
        { title: "Quick and Easy Moves", text: "Our team works efficiently to pack and unpack your items, ensuring minimal disruption to your life.", icon: 'icon14.png' },
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

            <ListSection content={listContent} title='Complete European Moving Solutions' />

            <ProcessWrapper title='How it works?' content={processContent} />

            <IconsSection title={"Why Choose Deliver1 for Your European Move?"} content={iconsSectionContent} />

            <MaxWidthContainer>
                <Stack py={5} spacing={4}>
                    <SectionCard
                        buttonText='Get in touch'
                        url='#get-in-touch'
                        title='Our background'
                        shortContent='Charlie Beck and Robertas Gailaitis founded Deliver1 in 2019. With extensive industry experience since 2013, they saw a need for moving services that combine value for money with high quality. Deliver1 was created to fill this gap, offering exceptional services without compromising on affordability.' />
                </Stack>
            </MaxWidthContainer>
            <ListSection content={listContent2} title='Services Tailored for Your European Move' />

            <MaxWidthContainer>
                <Stack py={5} spacing={4}>
                    <SectionCard
                        title={'European Destinations We Cover'}
                        shortContent={"Deliver1 specialises in European removals, offering comprehensive services to and from all countries within the European Union and beyond. Whether you're moving to a bustling city centre in Spain or a charming countryside village in Sweden, our network and expertise ensure a seamless relocation across Europe."}
                    />
                    <SectionCard reverse title='Your European Journey Starts Today'>
                        <Typography variant='body1' sx={{ pt: 1 }}>
                            Ready to embark on your European adventure? Contact Deliver1 today for a free quote and consultation.
                            <br />
                            <br />
                            Let us handle the logistics so you can focus on embracing your new life in Europe. With Deliver1, your European move is in expert hands.
                        </Typography>
                    </SectionCard>
                    <SectionCard title={'Get in Touch'} buttonText='Get in touch' url='#get-in-touch'>
                        <Stack>
                            <Typography variant='body1' sx={{ pt: 1 }}>
                                Contact us now to discuss your European moving needs and discover how Deliver1 can make your relocation a success.
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
            <IconsSection lg={3} md={3} sm={6} xs={12} backgroundColor={'#ededed'} color='#000' align={'flex-start'} textAlign={'left'}
                title={"Services Tailored for Your European Move"} content={iconsSectionContent2} />
            <VideoArea hideIcons />
            <LatestArticles />
        </PageLayout>
    )
}

export default MovingEuropePage
