'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import PageLayout from '@/COMPONENTS/common/PageLayout';
import { theme } from '@/COMPONENTS/common/Theme';
import { ArticleDataType, ArticlesResponseType } from '@/COMPONENTS/types/ArticleTypes';
import { CategoryDataType } from '@/COMPONENTS/types/CategoryTypes';
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import ArticleCard from '../../../COMPONENTS/guides/ArticleCard';

type Props = {
    category?: CategoryDataType;
    articleContinents?: ContinentsResponseType;
    articles?: ArticlesResponseType;
}

const GuidesCategoryPage = ({ articles, category, articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('all-posts')

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
                    padding: '10px 18px',
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
                <MaxWidthContainer>
                    <Stack sx={{
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Stack direction={'row'} justifyContent={'flex-start'} spacing={.5} sx={{
                            paddingTop: '10px',
                            marginBottom: '20px',
                            alignItems: 'center'
                        }}>
                            <Link passHref href={'/'}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    Home
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {'/'}
                            </Typography>
                            <Link passHref href={'/guides'}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    Guides
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {'/'}
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 400, }}>
                                {category.attributes?.name}
                            </Typography>
                        </Stack>
                        <Typography variant='h1' sx={{ pb: 2 }}>{category.attributes?.name}</Typography>
                    </Stack>
                </MaxWidthContainer>
                <MaxWidthContainer sx={{
                    display: 'flex', flexDirection: 'column',
                    backgroundColor: "#efefef",
                    width: '100%',
                    pb: 6
                }}>
                    <Stack sx={{
                        width: '100%'
                    }}>
                        <Typography variant='body2' color={theme.palette.secondary.main} sx={{ pb: 2, fontWeight: 600 }}>
                            {'Filter by continent:'}
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
                                    padding: '10px 18px',
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
                            {(!articles) ? renderLatestArticlesLoading : renderLatestArticles}
                        </Grid>
                        {(active !== 'all-posts' && filteredArticles?.length === 0) &&
                            <Typography color={theme.palette.secondary.main}
                                sx={{ pt: 2, display: 'flex', gap: 16, fontSize: '18px', justifyContent: 'space-between', width: '100%', fontWeight: 600 }}>
                                {"No articles yet"}
                            </Typography>}
                    </Stack>

                </MaxWidthContainer>
            </main>
        </PageLayout >
    )
}

export default GuidesCategoryPage
