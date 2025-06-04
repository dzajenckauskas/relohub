import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import OfferNewPage from "./OfferNewPage";

export async function generateMetadata({ }): Promise<Metadata> {
    const offerPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/offer-page?populate=seo`)
    return {
        title: offerPage?.data?.attributes?.seo?.seoTitle,
        description: offerPage?.data?.attributes?.seo?.seoDescription,
        keywords: offerPage?.data?.attributes?.seo?.seoKeywords,
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL!),
        alternates: {
            canonical: process.env.NEXT_PUBLIC_DOMAIN_URL,
        },
        openGraph: {
            images: ['/images/globe-vector.png'],
        },
        twitter: {
            images: ['/images/globe-vector.png'],
        },
    };
}


export default async function OfferNew() {
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)

    return (
        <OfferNewPage countriesData={countriesData} />
    )
}