import GuidesCategoryPage from "@/COMPONENTS/guides_page/category_page/GuidesCategoryPage";
import { getData } from "@/UTILS/getData";

export default async function BlogCategoryPage({ params }) {
    const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories/${params.category}`)
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory,articleContinents&filters[articleCategory][key][$eq]=${params.category}`)
    const articleContinents = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-continents`)
    return (
        <GuidesCategoryPage articles={articles} category={category.data} articleContinents={articleContinents} />
    );
}
