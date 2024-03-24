import GuidesPage from "@/COMPONENTS/guides_page/GuidesPage";
import { getData } from "@/UTILS/getData";

export default async function Guides() {
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,images,articleCategory,articleContinents&first=3`)
    const categories = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories?populate=image`)
    return (
        <GuidesPage articles={articles} categories={categories} />
    );
}
