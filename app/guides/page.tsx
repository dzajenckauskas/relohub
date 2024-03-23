import Chat from "@/COMPONENTS/common/chat";
import GuidesPage from "@/COMPONENTS/guides_page/GuidesPage";
import { getData } from "@/UTILS/getData";

export default async function BlogPage() {
    const articles = await getData('http://localhost:1340/api/articles?populate=seo,images,articleCategory&first=3')
    const categories = await getData('http://localhost:1340/api/article-categories?populate=image')
    return (
        <>
            <Chat />
            <GuidesPage articles={articles} categories={categories} />
        </>

    );
}
