'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import PageLayout from '@/COMPONENTS/common/PageLayout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ArticleCard from '../../../COMPONENTS/guides/ArticleCard';
import { theme } from '@/COMPONENTS/common/Theme';
import Grid from '@mui/material/Grid';
import { CategoryDataType } from '@/COMPONENTS/types/CategoryTypes';
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes';
import { ArticleDataType } from '@/COMPONENTS/types/ArticleTypes';
import Stack from '@mui/material/Stack';
import useSWR from 'swr';

type Props = {
    category?: CategoryDataType;
    articleContinents?: ContinentsResponseType;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const GuidesCategoryPage = ({ category, articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('all-posts')
    const url = `/api/articles?populate=seo,image,articleCategory,articleContinents`

    const articlesUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`
    const { data: articles, error, isLoading } = useSWR(
        articlesUrl,
        fetcher
    );

    const renderLatestArticlesLoading = Array.from({ length: 8 })?.map((_, index) => {
        return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <ArticleCard loading />
            </Grid>
        )
    })

    const filteredArticles = articles?.data.filter((a: ArticleDataType) => a.attributes?.articleContinents?.data?.find((a) => a.attributes.key === (active)))
    const renderLatestArticles = (active === 'all-posts' ? articles?.data : filteredArticles)?.map((a: ArticleDataType) => {
        return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={a.id}>
                <ArticleCard article={a} key={a.id} activeContinent={active !== 'all-posts' ? active : undefined} />
            </Grid>
        )
    })

    const renderArticleContinents = articleContinents.data.map((ac) => {
        const isActive = ac.attributes.key === active
        return (
            <Button key={ac.id}
                onClick={() => setActive(ac.attributes.key)}
                style={{
                    padding: '12px 22px',
                    borderRadius: '2px',
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
                    backgroundColor: "#efefef",
                    width: '100%'
                }}>
                    <Stack sx={{
                        paddingTop: '40px',
                        marginBottom: '80px',
                        width: '100%'
                    }}>
                        <Typography variant='h1' sx={{ pb: 4 }}>
                            {category.attributes?.name}
                        </Typography>

                        <Stack direction={'row'} sx={{
                            display: 'flex',
                            paddingBottom: 3,
                            gap: 1,
                            flexWrap: 'wrap'
                        }}>
                            <Button
                                onClick={() => setActive('all-posts')}
                                style={{
                                    padding: '12px 22px',
                                    borderRadius: '2px',
                                    fontSize: 12,
                                    cursor: 'pointer',
                                    backgroundColor: active == 'all-posts' ? '#e71d5e' : '#d9d9d9',
                                    color: active == 'all-posts' ? '#fff' : '#e71d5e',
                                    textTransform: 'uppercase'
                                }}>
                                {"all posts"}
                            </Button>
                            {renderArticleContinents}
                        </Stack>
                        <Grid container spacing={2} sx={{ display: 'flex', }}>
                            {(!articles || isLoading) ? renderLatestArticlesLoading : renderLatestArticles}
                        </Grid>
                        {filteredArticles?.length === 0 &&
                            <Typography color={theme.palette.secondary.main}
                                sx={{ pt: 2, display: 'flex', gap: 16, fontSize: '18px', justifyContent: 'space-between', width: '100%', fontWeight: 600 }}>
                                {error ? error : "No articles yet"}
                            </Typography>}
                    </Stack>

                </MaxWidthContainer>
            </main>
        </PageLayout >
    )
}

export default GuidesCategoryPage
