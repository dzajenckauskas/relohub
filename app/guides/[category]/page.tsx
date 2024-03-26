import GuidesCategoryPage from "@/COMPONENTS/guides_page/category_page/GuidesCategoryPage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    return {
        title: category?.data?.attributes?.seo?.seoTitle,
        description: category?.data?.attributes?.seo?.seoDescription,
        keywords: category?.data?.attributes?.seo?.seoKeywords,
    }
}

export default async function BlogCategoryPage({ params }) {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    return (
        <GuidesCategoryPage category={category.data} articleContinents={articleContinents} />
    );
}
