import ArticlePage from "@/COMPONENTS/guides_page/ArticlePage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const article = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}?populate=seo`)
    return {
        title: article?.data?.attributes?.seo?.seoTitle,
        description: article?.data?.attributes?.seo?.seoDescription,
        keywords: article?.data?.attributes?.seo?.seoKeywords,
    }
}


export default async function BlogCategoryPage({ params }) {
    const article = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}?populate=seo,images,articleCategory,articleContinents`)
    const latestArticles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory,articleContinents&first=3`)
    return (
        <ArticlePage article={article} latestArticles={latestArticles} />
    );
}
