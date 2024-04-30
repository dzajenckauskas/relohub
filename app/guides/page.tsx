import GuidesPage from "@/app/guides/GuidesPage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const guidesPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/guides-page?populate=seo`)
    return {
        title: guidesPage?.data?.attributes?.seo?.seoTitle,
        description: guidesPage?.data?.attributes?.seo?.seoDescription,
        keywords: guidesPage?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/guides`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function Guides() {
    const categories = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories?populate=image`)
    return (
        <GuidesPage
            categories={categories} />
    );
}
