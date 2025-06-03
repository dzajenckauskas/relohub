import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import MovingServicesPage from "./MovingServicesPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const movingServicesPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/moving-services-page?populate=seo`)
    return {
        title: movingServicesPage?.data?.attributes?.seo?.seoTitle,
        description: movingServicesPage?.data?.attributes?.seo?.seoDescription,
        keywords: movingServicesPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/moving-services`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.png`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/globe-vector.png`]
        }
    }
}

export default async function MovingServices() {
    const countriesData = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`)
    return (
        <MovingServicesPage countriesData={countriesData} />
    );
}
