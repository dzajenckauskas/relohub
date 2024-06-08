'use client'
import { FlagIllustration } from '@/COMPONENTS/FlagIllustration'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import { CountriesResponseType, CountryResponseType } from '@/COMPONENTS/types/CountryType'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import MovingToPageHero from './MovingToPageHero'
import "/STYLES/svg-style.css"
import SectionCard from '@/COMPONENTS/common/sections/SectionCard'
import IconsSection from '@/COMPONENTS/common/sections/IconsSection'
import TextSection from '@/COMPONENTS/common/sections/TextSection'
import ListSection from '@/COMPONENTS/common/sections/ListSection'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import { ServicesSection } from '@/COMPONENTS/common/sections/ServicesSection'
import Typography from '@mui/material/Typography'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import VideoArea from '@/COMPONENTS/main_page/videoarea'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles'
import Link from 'next/link'
import { useState } from 'react'
import { ExpandButton } from '@/COMPONENTS/common/ExpandButton'

type Props = {
    articleContinents?: ContinentsResponseType;
    country?: CountryResponseType;
    countriesdata?: CountriesResponseType;
}
const MovingToPage = ({ articleContinents, country, countriesdata }: Props) => {
    const iconsSection2Content = [
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet.", icon: 'icon7.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet.", icon: 'icon8.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet.", icon: 'icon9.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante.", icon: 'icon10.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante.", icon: 'icon11.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum.", icon: 'icon12.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante.", icon: 'icon13.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante.", icon: 'icon14.png' },
    ];
    const listContent = [
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum." },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa." },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante." },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada." },
    ];
    const iconsSectionContent = [
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa.", icon: 'icon1.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada.", icon: 'icon2.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa.", icon: 'icon3.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa.", icon: 'icon4.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa.", icon: 'icon5.png' },
        { title: "Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: 'icon6.png' },
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
                        title={'Lorem ipsum dolor sit amet, consectetur'}
                        shortContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
                    />
                    <SectionCard url='#get-in-touch'
                        buttonText={'Get in touch'}
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        shortContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' />
                </Stack>
            </MaxWidthContainer>

            <IconsSection lg={3} md={3} sm={6} xs={12} backgroundColor={'#ededed'}
                color='#000' align={'flex-start'} textAlign={'left'}
                title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                content={iconsSection2Content} />

            <TextSection title={`Lorem ipsum dolor sit amet`}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`} />
            <ListSection content={listContent}
                title='Lorem ipsum dolor sit amet.' />

            <ProcessWrapper title='How it works?' />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack py={5} spacing={4}>
                        <SectionCard reverse
                            url='#get-in-touch'
                            buttonText={'Get in touch'}
                            title={'Lorem ipsum'}
                            shortContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet."}
                        />
                        <SectionCard
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            shortContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' />
                    </Stack>
                </MaxWidthContainer>
            </Stack>

            <ServicesSection />

            <IconsSection title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"} content={iconsSectionContent} />

            <Stack sx={{ backgroundColor: '#efefef' }}>
                <MaxWidthContainer>
                    <Stack>
                        <Stack py={8}>
                            <SectionCard reverse backgroundColor="#fff"
                                buttonText='Lorem ipsum dolor'
                                url='/about-us#countries-we-cover'
                                title={'Lorem ipsum dolor sit amet'}
                                shortContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar."}
                            />
                        </Stack>
                        <Stack pb={8}>
                            <SectionCard
                                buttonText='Lorem ipsum dolor'
                                url='#countries-we-cover'
                                title={'Lorem ipsum dolor sit'}
                            >
                                <Stack>
                                    <Typography variant='body1' sx={{ pt: 1 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa. Quisque in tellus malesuada, blandit enim vestibulum, dictum ante. Nulla bibendum massa id dui pulvinar, sed sollicitudin purus imperdiet.
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
