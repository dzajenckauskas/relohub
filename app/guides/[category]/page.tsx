import GuidesCategoryPage from "@/COMPONENTS/guides_page/category_page/GuidesCategoryPage";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    return {
        title: category?.data?.attributes?.name,
        description: category?.data?.attributes?.name,
    }
}

export default async function BlogCategoryPage({ params }) {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)

    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    console.log(articleContinents, "articleContinents");
    return (
        <GuidesCategoryPage category={category.data} articleContinents={articleContinents} />
    );
}
