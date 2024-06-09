import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import RelocationServicesPage from "./RelocationServicesPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const relocationServicesPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/relocation-services-page?populate=seo`)
    return {
        title: relocationServicesPage?.data?.attributes?.seo?.seoTitle,
        description: relocationServicesPage?.data?.attributes?.seo?.seoDescription,
        keywords: relocationServicesPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/relocation-services`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function BlogPage() {
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)
    return (
        <RelocationServicesPage countriesData={countriesData} />
    );
}
