import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import MovingWithinEuropePage from "./MovingEuropePage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const movingWithinEurope = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/moving-within-europe-page?populate=seo`)
    return {
        title: movingWithinEurope?.data?.attributes?.seo?.seoTitle,
        description: movingWithinEurope?.data?.attributes?.seo?.seoDescription,
        keywords: movingWithinEurope?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/moving-within-europe`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function MovingWithinEurope() {
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)
    return (
        <MovingWithinEuropePage countriesData={countriesData} />
    );
}
