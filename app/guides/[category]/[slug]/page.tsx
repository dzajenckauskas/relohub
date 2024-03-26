import ArticlePage from "@/COMPONENTS/guides_page/ArticlePage";
import { getData } from "@/UTILS/getData";

export default async function BlogCategoryPage({ params }) {
    const article = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}?populate=seo,images,articleCategory,articleContinents`)
    const latestArticles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory,articleContinents&first=3`)
    console.log(article, "article");

    return (
        <ArticlePage article={article} latestArticles={latestArticles} />
    );
}
