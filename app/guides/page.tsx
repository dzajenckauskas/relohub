import GuidesPage from "@/app/guides/GuidesPage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const guidesPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/guides-page?populate=seo`)
    return {
        title: guidesPage?.data?.attributes?.seo?.seoTitle,
        description: guidesPage?.data?.attributes?.seo?.seoDescription,
        keywords: guidesPage?.data?.attributes?.seo?.seoKeywords,
    }
}

export default async function Guides() {
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory,articleContinents&first=3`)
    const categories = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories?populate=image`)
    return (
        <GuidesPage articles={articles} categories={categories} />
    );
}
