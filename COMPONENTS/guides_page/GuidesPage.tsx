'use client'
import Link from 'next/link';
import PageLayout from '../common/PageLayout'
import ArticleCard from './ArticleCard';
import GuideCard from './GuideCard';

type Props = {
    articles?: any;
    categories?: any;
}

const GuidesPage = ({ articles, categories }: Props) => {
    const renderCategories = categories?.data?.map((category) => {
        return (
            <GuideCard category={category} key={category.id} />
        )
    })
    const renderLatestArticles = articles.data.map((article) => {
        return (
            <ArticleCard article={article} key={article.id} />
        )
    })
    return (
        <PageLayout>
            <main style={{
                backgroundColor: "#efefef"
            }}>
                <div className="mainpageheaderwrp" style={{
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <h1 style={{
                    }}>Guides</h1>
                </div>
                <div style={{
                    backgroundColor: "#262420"
                }}>
                    <div className="mainpageheaderwrp" style={{
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex', flexDirection: 'row',
                        gap: 25
                    }}>
                        {renderCategories}
                    </div>
                </div>

                <div className="mainpageheaderwrp" style={{
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <h1 style={{
                        paddingBottom: 16
                    }}>Latest articles</h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 35 }}>
                        {renderLatestArticles}
                    </div>
                </div>

            </main>


        </PageLayout>
    )
}

export default GuidesPage
