'use client'
import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';
import { MaxWidthContainer } from '../common/MaxWidthContainer';
import ArticleCard from '../guides/ArticleCard';
import { ArticleDataType } from '../types/ArticleTypes';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LatestArticles = () => {
    const latestArticlesUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,image,articleCategory,articleContinents&pagination[page]=1&pagination[pageSize]=3`

    const { data: latestArticles, isLoading } = useSWR(
        latestArticlesUrl,
        fetcher
    );
    const renderLatestArticlesLoading = Array.from({ length: 3 })?.map((_, index) => {
        return (
            <Stack key={index} width={'100%'}>
                <ArticleCard loading />
            </Stack>
        )
    })
    const renderLatestArticles = latestArticles?.data?.map((article: ArticleDataType) => {
        return (
            <Stack key={article.id} width={'100%'}>
                <ArticleCard article={article} />
            </Stack>
        )
    })
    return (
        <Stack sx={{ width: '100%', backgroundColor: '#fff', mt: 6 }}>
            <MaxWidthContainer>
                <Stack sx={{
                    pt: 4,
                    pb: 8,
                    width: '100%',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <Typography variant='h1' component={'h2'}
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700
                        }}>
                        Latest articles
                    </Typography>
                    {isLoading &&
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center', width: '100%' }}>
                            {renderLatestArticlesLoading}
                        </Stack>}
                    {!isLoading && <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center', width: '100%' }}>
                        {renderLatestArticles}
                    </Stack>}
                    <Stack direction={'row'} spacing={3} sx={{ mt: 0, justifyContent: 'center', width: '100%' }}>
                        <Grid container spacing={2} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Grid item lg={4} md={4} sm={4} xs={12} sx={{
                                ":hover": {
                                    opacity: .8
                                }
                            }}>
                                <Link aria-label="View all articles" passHref href={'/guides'} style={{ paddingTop: 32, display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <Button
                                        aria-label="View all articles"
                                        style={{
                                            padding: '12px 22px',
                                            borderRadius: '2px',
                                            fontSize: 12,
                                            marginLeft: '-16px',
                                            cursor: 'pointer',
                                            backgroundColor: '#e71d5e',
                                            color: '#fff',
                                            textTransform: 'uppercase',
                                            width: '100%'
                                        }}>
                                        View all articles
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Stack>


                </Stack>
            </MaxWidthContainer >
        </Stack >
    )
}

export default LatestArticles


{/* <MaxWidthContainer sx={{
                    py: 6,
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h1' component={'h2'} sx={{ fontWeight: 700 }}>Latest Guides & Articles</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Button variant='outlined' color='secondary' aria-label="Previous article"
                            sx={{ borderRadius: 50, minWidth: 0, height: 40, width: 40 }}
                        >
                            <WestIcon sx={{ fontSize: 18 }} />
                        </Button>
                        <Button variant='outlined' color='secondary' aria-label="Next article"
                            sx={{ borderRadius: 50, minWidth: 0, height: 40, width: 40 }}
                        >
                            <EastIcon sx={{ fontSize: 18 }} />
                        </Button>
                    </Stack>
                </MaxWidthContainer>
                <MaxWidthContainer sx={{
                    pb: 10
                }}>
                    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        {renderLatestArticles}
                    </Stack>
                </MaxWidthContainer> */}