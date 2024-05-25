import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import MovingServicesPage from "./MovingToPage";
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
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function MovingTo({ params }) {
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    const country = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${params.slug}`)

    return (
        <MovingToPage articleContinents={articleContinents} country={country} />
    );
}
