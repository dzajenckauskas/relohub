import Chat from "@/COMPONENTS/common/chat";
import GuidesPage from "@/COMPONENTS/guides_page/GuidesPage";
import { getData } from "@/UTILS/getData";

export default async function BlogPage() {
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory&first=3`)
    const categories = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories?populate=image`)
    return (
        <>
            <Chat />
            <GuidesPage articles={articles} categories={categories} />
        </>

    );
}
