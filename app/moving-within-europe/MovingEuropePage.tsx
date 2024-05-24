'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import PageLayout from '@/COMPONENTS/common/PageLayout'
import Postheroimages from '@/COMPONENTS/main_page/postheroimages'
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes'
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
                <Postheroimages />
            </div>
        </PageLayout>
    )
}

export default MovingEuropePage
