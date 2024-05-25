'use client'
import { CountriesDropdownList } from '@/COMPONENTS/common/CountriesDropdownList'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import Postheroimages from '@/COMPONENTS/main_page/postheroimages'
import Image from 'next/image'
import MovingOverseasPageHero from './MovingOverseasPageHero'

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
                <Postheroimages />
            </div>
            <CountriesDropdownList />
        </PageLayout>
    )
}

export default MovingOverseasPage
