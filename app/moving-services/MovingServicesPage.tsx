'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import SectionCard from '@/COMPONENTS/common/sections/SectionCard'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import MovingServicesPageHero from './MovingServicesPageHero'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Link from 'next/link'
import IconsSection from '@/COMPONENTS/common/sections/IconsSection'

type Props = {
    articleContinents?: ContinentsResponseType;
}
const MovingServicesPage = ({ articleContinents }: Props) => {
    const listContent = [
        { title: "Your Move, Your Way", text: "We understand that no two moves are alike. Our personalised approach ensures your relocation plan is tailored to your specific needs and preferences." },
        { title: "Seamless Experience, Start to Finish", text: "From the initial quote to unpacking in your new home, we handle every step of your move with meticulous attention to detail, providing a stress-free and seamless experience." },
        { title: "Industry Expertise You Can Trust", text: "Founded in 2019 by seasoned professionals with a deep understanding of the removals industry, Deliver1 brings unparalleled expertise and knowledge to your relocation." },
        { title: "Transparent and Competitive Pricing", text: "We believe in upfront and honest pricing, with no hidden fees or surprises. Our competitive rates ensure you receive exceptional value for your investment." },
        { title: "Unwavering Commitment to Customer Satisfaction", text: "Your satisfaction is our top priority. We strive to exceed expectations at every step of your move, providing responsive communication and exceptional service." },
        { title: "Global Reach, Local Expertise", text: "Whether you're moving across continents or within Europe, our extensive network of partners and in-depth knowledge of local regulations ensure a smooth and efficient transition." },
    ];

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
                    <MovingServicesPageHero />
                </MaxWidthContainer>
                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '300px',
                        mt: { lg: -16, md: -18, sm: -16, xs: 0 },
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        pointerEvents: 'none',
                        left: { lg: 0, md: 0, sm: 0 },
                        top: { lg: 0, md: 0, sm: 0 },
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
            </div>
            <CountriesDropdownList />

            <MaxWidthContainer>
                <Stack py={8} spacing={4}>
                    <Stack width={'100%'} pb={6}>
                        <Typography variant='h2' component={'h2'} sx={{
                            py: 1,
                            fontWeight: 700,
                            textAlign: 'center',
                            lineHeight: 1.2,
                            width: { xs: '100%', sm: '100%', md: '100%' },
                        }}>
                            Deliver1&apos;s Removal Services
                        </Typography>
                        <Stack alignItems={'center'}>
                            <Typography textAlign={"center"} width={{ lg: '60%', sm: '80%' }} variant='subtitle2' color={theme.palette.secondary.main}>
                                Whether you&apos;re moving across Europe or embarking on an international adventure, Deliver1 offers a range of tailored services to simplify your relocation:
                            </Typography>
                        </Stack>
                    </Stack>
                    <SectionCard
                        imgSrc='/images/moving-services/door-to-door.png'
                        imgAlt='door to door'
                        title={'European Road Freight: Door-to-Door Delivery Across the Continent'}
                        shortContent={"Our extensive road freight network ensures efficient and secure transportation of your belongings to any destination within Europe. With door-to-door delivery, we handle every aspect of the journey, from collection to final delivery, providing peace of mind and convenience."}
                    />
                    <SectionCard
                        imgSrc='/images/moving-services/sea-freight.png'
                        imgAlt='sea freight'
                        reverse
                        title='European Sea Freight: Cost-Effective Shipping for Larger Moves'
                        shortContent='For larger shipments or coastal destinations, our sea freight services offer a cost-effective and reliable solution. We manage the entire process, including customs clearance and documentation, ensuring your belongings arrive safely and on time.'
                    />
                    <SectionCard
                        imgSrc='/images/moving-services/air-freight.png'
                        imgAlt='air freight'
                        title='Air Freight: Expedited Worldwide Shipping'
                        shortContent='When time is of the essence, our air freight services provide expedited shipping to destinations worldwide. We partner with reputable carriers to ensure your belongings are handled with care and delivered promptly.'
                    />
                    <SectionCard
                        reverse
                        // imgSrc='/images/moving-services/door-to-door.png'
                        // imgAlt='door to door'
                        title='Air Courier: Door-to-Door Delivery for Urgent Shipments'
                        shortContent='For urgent or time-sensitive shipments, our air courier service offers door-to-door delivery with the fastest possible transit times. We prioritise speed and efficiency to meet your specific needs.'
                    />
                    <SectionCard
                        title='Secure Storage Solutions in Europe and Beyond'
                        shortContent={`Whether you require temporary storage during your move or a long-term solution, we offer secure and convenient storage facilities in Europe and select international locations. Your belongings will be stored in a safe and climate-controlled environment until you're ready to receive them.`}
                    />
                    <SectionCard
                        reverse
                        title='Professional Packing Services: Expert Care for Your Belongings'
                        shortContent={`Our experienced packers take the stress out of packing, ensuring your belongings are carefully wrapped, protected, and organised for safe transportation. We use high-quality packing materials and techniques to minimise the risk of damage during transit.`}
                    />
                    <SectionCard
                        title='Specialised Crating for Delicate Items'
                        shortContent={`For valuable or fragile items, we offer specialised crating services to provide an extra layer of protection. Our custom-built crates are designed to safeguard your most precious possessions, ensuring they arrive in pristine condition.`}
                    />
                    <SectionCard
                        reverse
                        title='Furniture Disassembly and Assembly'
                        shortContent={`We can disassemble your furniture before your move and reassemble it in your new home, saving you time and effort. Our team is skilled in handling a wide range of furniture types, ensuring your pieces are properly disassembled and reassembled with care.`}
                    />
                    <SectionCard
                        title='Your Move, Simplified with Deliver1'
                        shortContent={`With Deliver1's comprehensive range of removal services, your relocation is in expert hands. We tailor our solutions to your specific needs, providing a seamless and stress-free experience from start to finish.`}
                    />
                </Stack>
            </MaxWidthContainer>


            <ListSection content={listContent}
                title='Why Entrust Your Move to Deliver1?' />

            <ProcessWrapper title='How it works?' />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack>
                        <Stack py={8}>
                            <SectionCard reverse backgroundColor="#fff"
                                buttonText='View countries we cover'
                                imgSrc='/images/moving-overseas/countries-we-cover.png'
                                imgAlt='View countries we cover'
                                url='/about-us#countries-we-cover'
                                title={'Countries We Cover'}
                                shortContent={"Deliver1 can help you move to almost every country on earth - from Iceland to South Africa, and Japan to Qatar. No matter where your destination is, our extensive network and experienced team ensure a smooth and efficient relocation process."}
                            />
                        </Stack>
                        <Stack pb={8} spacing={4}>
                            <SectionCard
                                // imgSrc='/images/moving-overseas/start-journey.png'
                                // imgAlt='View countries we cover'
                                title={'Your Next Adventure Starts Today'}
                                shortContent={"Contact Deliver1 today for a free quote and consultation. Let us handle the logistics so you can focus on embracing your new life in a new country. With Deliver1, your next adventure is in expert hands."}
                            />
                            <SectionCard reverse
                                imgSrc='/images/moving-to-europe/get-in-touch-today.png'
                                imgAlt='View countries we cover'
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

export default MovingServicesPage
