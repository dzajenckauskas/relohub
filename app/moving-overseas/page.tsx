import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import MovingOverseasPage from "./MovingOverseasPage";

export async function generateMetadata({ params }): Promise<Metadata> {
    const movingOverseasPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/moving-overseas-page?populate=seo`)
    return {
        title: movingOverseasPage?.data?.attributes?.seo?.seoTitle,
        description: movingOverseasPage?.data?.attributes?.seo?.seoDescription,
        keywords: movingOverseasPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/moving-overseas`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function MovingOverseas() {
    return (
        <MovingOverseasPage />
    );


}
