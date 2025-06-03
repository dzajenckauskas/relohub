import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import MovingToPage from "./MovingToPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const country = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${params.slug}`)
    return {
        title: country?.data?.attributes?.seo?.seoTitle,
        description: country?.data?.attributes?.seo?.seoDescription,
        keywords: country?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/moving-to/${country?.data?.attributes?.url}`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.svg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.svg`]
        }
    }
}

export default async function MovingTo({ params }) {
    const country = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${params.slug}`)
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)

    return (
        <MovingToPage country={country} countriesData={countriesData} />
    );
}
