'use client'
import PageLayout from '@/COMPONENTS/common/PageLayout';
import ArticleCard from '../ArticleCard';
import { useState } from 'react';
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import Button from '@mui/material/Button'

type Props = {
    articles?: any;
    category?: any;
    articleContinents?: any;
}

const GuidesCategoryPage = ({ articles, category, articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('all-posts')
    const renderLatestArticles = articles.data.map((a) => {
        return (
            <ArticleCard article={a} key={a.id} />
        )
    })
    const renderArticleContinents = articleContinents.data.map((ac) => {
        const isActive = ac.attributes.key === active
        return (
            <Button key={ac.id}
                onClick={() => setActive(ac.attributes.key)}
                style={{
                    padding: '12px 22px',
                    borderRadius: 2,
                    fontSize: 12,
                    cursor: 'pointer',
                    backgroundColor: isActive ? '#e71d5e' : '#d9d9d9',
                    color: isActive ? '#fff' : '#e71d5e',
                    textTransform: 'uppercase'
                }}>
                {ac.attributes.name}
            </Button>
        )
    })
    return (
        <PageLayout>
            <main style={{
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer sx={{
                    display: 'flex', flexDirection: 'column',
                    backgroundColor: "#efefef"
                }}>
                    <div style={{
                        paddingTop: '40px',
                        marginBottom: '80px',
                    }}>
                        <h1 style={{
                            marginBottom: '40px',
                        }}>
                            {category.attributes?.name}
                        </h1>

                        <div style={{
                            display: 'flex', gap: 8,
                            paddingBottom: 22,
                            flexWrap: 'wrap'
                        }}>
                            <Button
                                onClick={() => setActive('all-posts')}
                                style={{
                                    padding: '12px 22px',
                                    borderRadius: 2,
                                    fontSize: 12,
                                    cursor: 'pointer',
                                    backgroundColor: active == 'all-posts' ? '#e71d5e' : '#d9d9d9',
                                    color: active == 'all-posts' ? '#fff' : '#e71d5e',
                                    textTransform: 'uppercase'
                                }}>
                                {"all posts"}
                            </Button>
                            {renderArticleContinents}
                        </div>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'space-between' }}>
                            {renderLatestArticles}
                        </div>
                    </div>

                </MaxWidthContainer>
            </main>
        </PageLayout >
    )
}

export default GuidesCategoryPage
