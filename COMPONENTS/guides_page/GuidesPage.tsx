'use client'
import Link from 'next/link';
import PageLayout from '../common/PageLayout'
import ArticleCard from './ArticleCard';

type Props = {
    articles?: any;
    categories?: any;
}

const GuidesPage = ({ articles, categories }: Props) => {
    const renderCategories = categories?.data?.map((category) => {
        return (
            <div key={category.id} style={{
                height: '450px',
                borderRadius: 5,
                width: '100%',
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${category?.attributes?.image?.data?.attributes?.url})`, // Add background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'flex-end',
                position: 'relative'
            }}>
                <Link href={`/guides/${category.attributes.key}`} passHref>
                    <p style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: '#fff',
                        padding: 20,
                        position: 'absolute',
                        bottom: 5,
                        left: 5
                    }}>{category.attributes.name}</p>
                </Link>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e71c5e',
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    color: '#fff',
                    padding: 20,
                    position: 'absolute',
                    right: 20,
                    bottom: 20
                }}>
                    <Link href={`/guides/${category.attributes.key}`} passHref>
                        <p style={{ fontSize: 20, fontWeight: 600 }}>+</p>
                    </Link>
                </div>
            </div>
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
