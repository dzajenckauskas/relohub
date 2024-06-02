'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import ProcessWrapper from '@/COMPONENTS/main_page/ProcessWrapper'
import Stack from '@mui/material/Stack'
import Image from "next/image"
import { ServicesSection } from '../about-us/ServicesSection'
import MovingOverseasPageHero from './MovingOverseasPageHero'
import SectionCard from './SectionCard'
import TextSection from './TextSection'

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


            <TextSection title={`Extensive Removal Network`} text={`Our network ensures that no matter where you're moving, we have the local expertise and resources to manage your move efficiently. Our experienced team is well-versed in customs regulations and logistical challenges of international relocations.`} />
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
