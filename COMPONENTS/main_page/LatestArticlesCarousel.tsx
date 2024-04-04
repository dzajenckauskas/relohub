'use client'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useSWR from 'swr';
import { LinkArrowButton } from '../common/LinkArrowButton';
import { MaxWidthContainer } from '../common/MaxWidthContainer';
import ArticleCard from '../guides/ArticleCard';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LatestArticlesCarousel = () => {
    const latestArticlesUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,image,articleCategory,articleContinents`

    const { data: latestArticles, isLoading } = useSWR(
        latestArticlesUrl,
        fetcher
    );


    const [startIndex, setStartIndex] = useState(0); // State to track the starting index of displayed articles

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % (latestArticles?.data?.length || 1)); // Increment the starting index by 1, and use modulo to loop back to 0 when reaching the end
    };

    const handlePrevious = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + latestArticles?.data?.length) % (latestArticles?.data?.length || 1)); // Decrement the starting index by 1, and use modulo to loop back to the end when reaching 0
    };

    const cardIndices = [
        (startIndex - 1 + latestArticles?.data?.length) % (latestArticles?.data?.length || 1),
        startIndex,
        (startIndex + 1) % (latestArticles?.data?.length || 1)
    ];

    const displayedArticles = cardIndices.map((index: number) => {
        return (
            <Stack key={latestArticles?.data[index]?.id} width={'100%'}>
                <ArticleCard article={latestArticles?.data[index]} />
            </Stack>
        );
    });

    const renderLatestArticlesLoading = Array.from({ length: 3 }).map((_, index) => {
        return (
            <Stack key={index} width={'100%'}>
                <ArticleCard loading />
            </Stack>
        );
    });

    return (
        <Stack sx={{ width: '100%', backgroundColor: '#fff', mt: 0 }}>
            <MaxWidthContainer sx={{
                pt: 4,
                justifyContent: 'space-between',
            }}>
                <Typography variant='h1' component={'h2'} sx={{ fontWeight: 700 }}>Latest Guides & Articles</Typography>
                <Stack direction={'row'} spacing={1}>
                    {/* <Button variant='outlined' color='secondary' aria-label="Previous article"
                        sx={{ borderRadius: 50, minWidth: 0, height: 40, width: 40 }}
                        onClick={handlePrevious}
                    >
                        <WestIcon sx={{ fontSize: 18 }} />
                    </Button> */}
                    <LinkArrowButton variant={'outlined'} direction={'back'} onClick={handlePrevious} />
                    <LinkArrowButton variant={'outlined'} direction={'next'} onClick={handleNext} />
                    {/* <Button variant='outlined' color='secondary' aria-label="Next article"
                        sx={{ borderRadius: 50, minWidth: 0, height: 40, width: 40 }}
                        onClick={handleNext}
                    >
                        <EastIcon sx={{ fontSize: 18 }} />
                    </Button> */}
                </Stack>
            </MaxWidthContainer>
            <MaxWidthContainer sx={{
                pb: { xs: 4, md: 8 }
            }}>
                {isLoading ? (
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center', width: '100%' }}>
                        {renderLatestArticlesLoading}
                    </Stack>
                ) : (
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center', width: '100%' }}>
                        {displayedArticles}
                    </Stack>
                )}
            </MaxWidthContainer>
        </Stack>
    )
}

export default LatestArticlesCarousel


