import { getData } from "@/UTILS/getData";
import { Metadata } from "next";
import AboutUsPage from "../about-us/AboutUsPage";

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
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function BlogPage() {
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)

    return (
        <AboutUsPage articleContinents={articleContinents} />
    );
}
