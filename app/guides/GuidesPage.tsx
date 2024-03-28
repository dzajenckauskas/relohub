'use client'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useSWR from 'swr';
import { MaxWidthContainer } from '../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../COMPONENTS/common/PageLayout';
import ArticleCard from '../../COMPONENTS/guides/ArticleCard';
import ArticleCategoryCard from '../../COMPONENTS/guides/ArticleCategoryCard';
import { CategoriesResponseType } from '../../COMPONENTS/types/CategoryTypes';

type Props = {
    categories?: CategoriesResponseType;
}

const GuidesPage = ({ categories }: Props) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const articlesUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=seo,image,articleCategory,articleContinents`

    const { data } = useSWR(
        articlesUrl,
        fetcher
    );

    const renderCategories = categories?.data
        ?.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
        ?.map((category) => <ArticleCategoryCard category={category} key={category.id} />);

    const renderLatestArticles = data?.data?.map((article) =>
        <ArticleCard article={article} key={article.id} />
    )
    return (
        <PageLayout>
            <main style={{
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer>
                    <Stack sx={{
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Typography variant='h1'>Guides</Typography>
                    </Stack>
                </MaxWidthContainer>
                <Stack sx={{
                    backgroundColor: "#262420"
                }}>
                    <MaxWidthContainer
                        sx={{
                            py: 4, gap: 2,
                            flexDirection: { md: 'row', xs: "column" }
                        }}>
                        {renderCategories}
                    </MaxWidthContainer>
                </Stack>
                <MaxWidthContainer sx={{
                    py: 6,
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h2' sx={{ fontWeight: 700 }}>Latest Guides & Articles</Typography>
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
                </MaxWidthContainer>
            </main>
        </PageLayout>
    )
}

export default GuidesPage
