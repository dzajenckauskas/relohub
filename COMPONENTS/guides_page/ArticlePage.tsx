'use client'
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../common/MaxWidthContainer';
import PageLayout from '../common/PageLayout';
import { ArticleResponseType, ArticlesResponseType } from '../types/ArticleTypes';
import ArticleCard from './ArticleCard';
import { Typography } from '@mui/material';

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
            <Stack sx={{
                width: '100%',
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer>
                    <Stack style={{
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Typography variant='h1' fontWeight={700}>{article?.data?.attributes?.title}</Typography>
                        <div dangerouslySetInnerHTML={{ __html: article?.data.attributes.fullContent }} />
                    </Stack>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <Stack style={{
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Typography variant='h2'
                            sx={{
                                fontWeight: 700
                            }}>
                            Latest articles
                        </Typography>

                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 35 }}>
                            {renderLatestArticles}
                        </div>
                    </Stack>
                </MaxWidthContainer>
            </Stack>
        </PageLayout>
    )
}

export default ArticlePage
