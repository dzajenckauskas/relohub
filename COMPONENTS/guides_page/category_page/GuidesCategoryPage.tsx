'use client'
import PageLayout from '@/COMPONENTS/common/PageLayout';
import Link from 'next/link';

type Props = {
    articles?: any;
    category?: any;
}

const GuidesCategoryPage = ({ articles, category }: Props) => {
    const renderLatestArticles = articles.data.map((article) => {
        return (
            <div key={article.id} style={{
                border: '1px solid red', width: '100%'
            }}>
                <h2 style={{
                    fontSize: '2rem'
                }}>{article.attributes.title}</h2>
                <p>{article.attributes.shortContent}</p>
            </div>
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
