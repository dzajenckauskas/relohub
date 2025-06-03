import { MaxWidthContainer } from "@/COMPONENTS/common/MaxWidthContainer";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import { CoveredCountriesSection } from "@/COMPONENTS/common/sections/CoveredCountriesSection";
import IconsSection from "@/COMPONENTS/common/sections/IconsSection";
import { ServicesSection } from "@/COMPONENTS/common/sections/ServicesSection";
import FaqWrapper from "@/COMPONENTS/main_page/Faqwrapper";
import MainPageHeroArea from "@/COMPONENTS/main_page/MainPageHeroArea";
import Reviews from "@/COMPONENTS/main_page/reviews";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import { iconsSectionContent } from "./moving-within-europe/IconsSectionContent";


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
        <PageLayout homePage>
            <div id={'get-quote'} className="bckimagewrp">
                <MaxWidthContainer>
                    <MainPageHeroArea />
                </MaxWidthContainer>
            </div>
            <IconsSection
                backgroundColor="#000"
                title={"Why Choose Relohub for Your Move?"} content={iconsSectionContent} />
            <FaqWrapper />
            <ServicesSection />
            <CoveredCountriesSection articleContinents={articleContinents} countries={countriesData} />
            <Reviews />
        </PageLayout>
    );
}
