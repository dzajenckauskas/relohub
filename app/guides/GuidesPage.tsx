'use client'
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../COMPONENTS/common/PageLayout';
import ArticleCategoryCard from '../../COMPONENTS/guides/ArticleCategoryCard';
import { CategoriesResponseType } from '../../COMPONENTS/types/CategoryTypes';

type Props = {
    categories?: CategoriesResponseType;
}

const GuidesPage = ({ categories }: Props) => {
    const renderCategories = categories?.data
        ?.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
        ?.map((category) => <ArticleCategoryCard category={category} key={category.id} />);

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
                <LatestArticles />
            </main>
        </PageLayout>
    )
}

export default GuidesPage
