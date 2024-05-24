import GuidesCategoryPage from "@/app/guides/[category]/GuidesCategoryPage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    const imageUrl = process.env.NEXT_PUBLIC_API_URL + category.data.attributes.image.data.attributes.url
    return {
        title: category?.data?.attributes?.seo?.seoTitle,
        description: category?.data?.attributes?.seo?.seoDescription,
        keywords: category?.data?.attributes?.seo?.seoKeywords,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/guides/${category?.data?.attributes.key}`,
        },
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        },
        twitter: {
            images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpeg`]
        }
    }
}

export default async function BlogCategoryPage({ params }) {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[articleCategory][key][$eq]=${params.category}&populate=seo,image,articleCategory,articleContinents`)
    return (
        <GuidesCategoryPage articles={articles} category={category.data} articleContinents={articleContinents} />
    );
}
