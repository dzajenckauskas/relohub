import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import OfferNewPage from "./OfferNewPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const offerPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/offer-page?populate=seo`)
    return {
        title: offerPage?.data?.attributes?.seo?.seoTitle,
        description: offerPage?.data?.attributes?.seo?.seoDescription,
        keywords: offerPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/offer`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}


export default function OfferNew() {
    return (
        <OfferNewPage />
    )
}