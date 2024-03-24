'use client'
import PageLayout from '@/COMPONENTS/common/PageLayout';
import ArticleCard from '../ArticleCard';

type Props = {
    articles?: any;
    category?: any;
}

const GuidesCategoryPage = ({ articles, category }: Props) => {
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
                    display: 'flex', flexDirection: 'column',
                    backgroundColor: "#efefef"
                }}>
                    <div style={{
                        paddingTop: '40px',
                        marginBottom: '40px',
                    }}>
                        <h1 style={{
                        }}>{category.attributes?.name}</h1>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {renderLatestArticles}
                        </div>
                    </div>

                </div>
            </main>
        </PageLayout >
    )
}

export default GuidesCategoryPage
