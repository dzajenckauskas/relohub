import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import FaqWrapper from "@/COMPONENTS/main_page/Faqwrapper";
import LatestArticles from "@/COMPONENTS/main_page/LatestArticles";
import MainPageHeroArea from "@/COMPONENTS/main_page/MainPageHeroArea";
import Postheroimages from "@/COMPONENTS/main_page/postheroimages";
import ProcessWrapper from "@/COMPONENTS/main_page/ProcessWrapper";
import Reviews from "@/COMPONENTS/main_page/reviews";
import VideoArea from "@/COMPONENTS/main_page/videoarea";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ }): Promise<Metadata> {
    const homePage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate=seo`)
    return {
        title: homePage?.data?.attributes?.seo?.seoTitle,
        description: homePage?.data?.attributes?.seo?.seoDescription,
        keywords: homePage?.data?.attributes?.seo?.seoKeywords,
    }
}
export default async function Home() {
    return (
        <PageLayout>
            {/* <RemovedaDataFromCitiesJson /> */}
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
                    <MainPageHeroArea />
                </MaxWidthContainer>
                <Postheroimages />
            </div>
            <VideoArea />
            <ProcessWrapper />
            <FaqWrapper />
            <LatestArticles />
            <Reviews />
        </PageLayout>
    );
}
