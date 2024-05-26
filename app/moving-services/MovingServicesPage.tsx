'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import MovingServicesPageHero from './MovingServicesPageHero'

type Props = {
    articleContinents?: ContinentsResponseType;
}
const MovingServicesPage = ({ articleContinents }: Props) => {
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
        </PageLayout>
    )
}

export default MovingServicesPage
