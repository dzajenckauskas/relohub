'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import MovingEuropePageHero from './MovingEuropePageHero'

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

                <Stack sx={{ margin: '0 auto', maxWidth: 'lg', px: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <Stack sx={{
                        maxWidth: "1168px",
                        height: '400px',
                        mt: { lg: -26, md: -26, sm: -26, xs: 0 },
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
        </PageLayout>
    )
}

export default MovingEuropePage
