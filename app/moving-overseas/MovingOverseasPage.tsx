'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import Postheroimages from '@/COMPONENTS/main_page/postheroimages'
import MovingOverseasPageHero from './MovingOverseasPageHero'
import Image from "next/image";
import Stack from '@mui/material/Stack'

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

                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4 }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '400px',
                        // display: 'flex',
                        mt: -18,
                        // alignItems: 'flex-start',
                        position: 'relative',
                        left: '-60px',
                        pointerEvents: 'none',
                        top: '1px'
                    }}>
                        <Image
                            src={"/Overseas.svg"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: 'bottom'
                            }}
                            alt="human carying stuff"
                            priority
                            className="heropostimagecaryingsofaimg"
                        />
                    </Stack>
                </Stack>
            </div>
            <CountriesDropdownList />
        </PageLayout>
    )
}

export default MovingOverseasPage
