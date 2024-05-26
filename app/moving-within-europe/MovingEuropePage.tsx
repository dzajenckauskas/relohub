'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import Postheroimages from '@/COMPONENTS/main_page/postheroimages'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Image from 'next/image'
import MovingEuropePageHero from './MovingEuropePageHero'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import Stack from '@mui/material/Stack'

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

                <Stack sx={{ margin: '0 auto', maxWidth: 'xl', px: 4 }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '200px',
                        // display: 'flex',
                        mt: -8,
                        // alignItems: 'flex-start',
                        position: 'relative',
                        // right: '0px',
                        pointerEvents: 'none',
                        top: '1px'
                    }}>
                        <Image
                            src={"/WithinEurope.svg"}
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

export default MovingEuropePage
