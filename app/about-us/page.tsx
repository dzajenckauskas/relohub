import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import AboutUsPage from "./AboutUsPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const aboutPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/about-page?populate=seo`)
    return {
        title: aboutPage?.data?.attributes?.seo?.seoTitle,
        description: aboutPage?.data?.attributes?.seo?.seoDescription,
        keywords: aboutPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/about-us`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.svg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.svg`]
        }
    }
}

export default async function AboutUs() {
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    const countries = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)

    return (
        <AboutUsPage articleContinents={articleContinents} countries={countries} />
    );
}
