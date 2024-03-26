'use client'
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../common/MaxWidthContainer';
import PageLayout from '../common/PageLayout';
import ArticleCard from './ArticleCard';
import ArticleCategoryCard from './ArticleCategoryCard';
import Button from '@mui/material/Button'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { CategoriesResponseType } from '../types/CategoryTypes';
import { ArticlesResponseType } from '../types/ArticleTypes';

type Props = {
    articles?: ArticlesResponseType;
    categories?: CategoriesResponseType;
}

const GuidesPage = ({ articles, categories }: Props) => {
    const renderCategories = categories?.data
        ?.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
        ?.map((category) => <ArticleCategoryCard category={category} key={category.id} />);

    const renderLatestArticles = articles.data.map((article) =>
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
                        <h1>Guides</h1>
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
                    <h1 style={{
                    }}>Latest Guides & Articles</h1>
                    <Stack direction={'row'} spacing={1}>
                        <Button variant='outlined' color='secondary'
                            sx={{ borderRadius: 50, minWidth: 0, height: 40, width: 40 }}
                        >
                            <WestIcon sx={{ fontSize: 18 }} />
                        </Button>
                        <Button variant='outlined' color='secondary'
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
