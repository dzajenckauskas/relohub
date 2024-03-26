'use client'
import PageLayout from '../common/PageLayout';
import { ArticleResponseType, ArticlesResponseType } from '../types/ArticleTypes';
import ArticleCard from './ArticleCard';

type Props = {
    article?: ArticleResponseType;
    latestArticles?: ArticlesResponseType;
}

const ArticlePage = ({ article, latestArticles }: Props) => {
    const renderLatestArticles = latestArticles?.data?.map((article) => {
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
                    }}>{article?.data?.attributes?.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: article?.data.attributes.fullContent }} />
                </div>

                <div className="mainpageheaderwrp" style={{
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <h1 style={{
                        paddingBottom: 30
                    }}>Latest articles</h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 35 }}>
                        {renderLatestArticles}
                    </div>
                </div>

            </main>
        </PageLayout>
    )
}

export default ArticlePage
