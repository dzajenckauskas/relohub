import Chat from "@/COMPONENTS/common/chat";
import GuidesCategoryPage from "@/COMPONENTS/guides_page/category_page/GuidesCategoryPage";
import { getData } from "@/UTILS/getData";

export default async function BlogCategoryPage({ params }) {
    const category = await getData(`http://localhost:1340/api/article-categories/${params.category}`)
    const articles = await getData(`http://localhost:1340/api/articles?populate=seo,images,articleCategory&filters[articleCategory][key][$eq]=${params.category}`)
    return (
        <>
            <Chat />
            <GuidesCategoryPage articles={articles} category={category.data} />
        </>

    );
}
