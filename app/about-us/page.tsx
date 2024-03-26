import Layout from "@/COMPONENTS/common/PageLayout";
import { getData } from "@/UTILS/getData";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
    const aboutPage = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/about-page?populate=seo`)
    return {
        title: aboutPage?.data?.attributes?.seo?.seoTitle,
        description: aboutPage?.data?.attributes?.seo?.seoDescription,
        keywords: aboutPage?.data?.attributes?.seo?.seoKeywords,
    }
}

export default async function BlogPage() {
    return (
        <>
            <Layout>
                <></>
            </Layout>
        </>

    );
}
