// import { CountriesDropdownList } from "@/COMPONENTS/common/CountriesDropdownList";
import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { CoveredCountriesSection } from "@/COMPONENTS/common/sections/CoveredCountriesSection";
import { ServicesSection } from "@/COMPONENTS/common/sections/ServicesSection";
import FaqWrapper from "@/COMPONENTS/main_page/Faqwrapper";
// import LatestArticles from "@/COMPONENTS/main_page/LatestArticles";
import MainPageHeroArea from "@/COMPONENTS/main_page/MainPageHeroArea";
import ProcessWrapper from "@/COMPONENTS/main_page/ProcessWrapper";
import Postheroimages from "@/COMPONENTS/main_page/postheroimages";
import Reviews from "@/COMPONENTS/main_page/reviews";
// import VideoArea from "@/COMPONENTS/main_page/videoarea";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import Image from "next/image";


export async function generateMetadata({ }): Promise<Metadata> {
    const homePage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate=seo`)
    return {
        title: homePage?.data?.attributes?.seo?.seoTitle,
        description: homePage?.data?.attributes?.seo?.seoDescription,
        keywords: homePage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: process.env.NEXT_PUBLIC_DOMAIN_URL,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}


export default async function Home() {
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)

    return (
        <PageLayout>
            {/* <RemovedaDataFromCitiesJson /> */}
            <div id={'get-quote'} className="bckimagewrp">
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
            <ServicesSection />
            <CoveredCountriesSection articleContinents={articleContinents} countries={countriesData} />
            {/* <CountriesDropdownList countriesData={countriesData} /> */}
            {/* <VideoArea hideIcons={false} /> */}
            <ProcessWrapper />
            <FaqWrapper />
            {/* <LatestArticles /> */}
            <Reviews />
        </PageLayout>
    );
}
