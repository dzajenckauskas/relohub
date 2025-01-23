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
import { SxProps } from '@mui/material';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
    sx?: SxProps;
}

const LatestArticles = ({ sx }: Props) => {
    const latestArticlesUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,image,articleCategory,articleContinents&sort[0]=createdAt:desc&sort[1]=updatedAt:desc&pagination[page]=1&pagination[pageSize]=3`

    const { data: latestArticles, isLoading } = useSWR(
        latestArticlesUrl,
        fetcher
    );

    const filteredLatestArticles = latestArticles?.data?.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })

    const renderLatestArticlesLoading = Array.from({ length: 3 })?.map((_, index) => {
        return (
            <Stack key={index} width={'100%'}>
                <ArticleCard loading />
            </Stack>
        )
    })
    const renderLatestArticles = filteredLatestArticles?.map((article: ArticleDataType) => {
        return (
            <Stack key={article.id} width={'100%'}>
                <ArticleCard article={article} />
            </Stack>
        )
    })
    return (
        <Stack sx={{ width: '100%', backgroundColor: '#fff', py: { xs: 6, md: 6 }, ...sx }}>
            <MaxWidthContainer>
                <Stack sx={{
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
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Link aria-label="View all articles" passHref href={'/guides'} style={{ paddingTop: 16, display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <Button variant='contained' color='secondary'
                                        aria-label="View all articles"
                                        size="large"
                                        sx={{
                                            marginLeft: '-16px',
                                            width: '100%'
                                        }}>
                                        View all articles
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default LatestArticles
