import ArticlePage from "@/app/guides/[category]/[slug]/ArticlePage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const article = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}?populate=seo`)
    return {
        title: article?.data?.attributes?.seo?.seoTitle,
        description: article?.data?.attributes?.seo?.seoDescription,
        keywords: article?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/guides/${article?.data?.attributes.articleCategory?.data?.attributes.key}/${params.slug}`,
        }
    }
}


export default async function BlogCategoryPage({ params }) {
    const article = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}?populate=seo,image,articleCategory,articleContinents`)
    return (
        <ArticlePage article={article} />
    );
}
