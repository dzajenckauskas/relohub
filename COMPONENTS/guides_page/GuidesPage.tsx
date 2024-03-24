'use client'
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../common/MaxWidthContainer';
import PageLayout from '../common/PageLayout';
import ArticleCard from './ArticleCard';
import ArticleCategoryCard from './ArticleCategoryCard';

type Props = {
    articles?: any;
    categories?: any;
}

const GuidesPage = ({ articles, categories }: Props) => {
    const renderCategories = categories?.data?.map((category) =>
        <ArticleCategoryCard category={category} key={category.id} />
    )
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
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    display: 'flex', flexDirection: 'column',
                }}>
                    <h1 style={{
                        paddingBottom: 16
                    }}>Latest articles</h1>

                    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        {renderLatestArticles}
                    </Stack>
                </MaxWidthContainer>


            </main>


        </PageLayout>
    )
}

export default GuidesPage
