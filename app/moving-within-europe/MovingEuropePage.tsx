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
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import Grid from '@mui/material/Grid'
import IconsSection from './IconsSection'
import ListSection from './ListSection'

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
    const iconsSection2Content = [
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

            <IconsSection backgroundColor={'#ededed'} color='#000' align={'flex-start'} textAlign={'left'}
                title={"Services Tailored for Your European Move"} content={iconsSection2Content} />
        </PageLayout>
    )
}

export default MovingEuropePage
