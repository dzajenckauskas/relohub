import Chat from "@/COMPONENTS/common/chat";
import ArticlePage from "@/COMPONENTS/guides_page/ArticlePage";
import { getData } from "@/UTILS/getData";

export default async function BlogCategoryPage({ params }) {
    const article = await getData(`http://localhost:1340/api/articles/${params.slug}?populate=seo,images,articleCategory`)
    const latestArticles = await getData(`http://localhost:1340/api/articles?populate=seo,images,articleCategory&first=3`)
    return (
        <>
            <Chat />
            <ArticlePage article={article} latestArticles={latestArticles.data} />
        </>

    );
}
