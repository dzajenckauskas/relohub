'use client'
import BreadcrumbsComponent from '@/COMPONENTS/common/shared/BreadcrumbsComponent';
import { theme } from '@/COMPONENTS/common/shared/Theme';
import LatestArticlesCarousel from '@/COMPONENTS/main_page/LatestArticlesCarousel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MaxWidthContainer } from '../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../COMPONENTS/common/PageLayout';
import ArticleCategoryCard from '../../COMPONENTS/guides/ArticleCategoryCard';
import { CategoriesResponseType } from '../../COMPONENTS/types/CategoryTypes';

type Props = {
    categories?: CategoriesResponseType;
}

const GuidesPage = ({ categories }: Props) => {
    const renderCategories = categories?.data
        ?.sort((a, b) => a.attributes?.name.localeCompare(b.attributes?.name))
        ?.map((category) => <ArticleCategoryCard category={category} key={category.id} />);

    return (
        <PageLayout>
            <main style={{
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer>
                    <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
                        <BreadcrumbsComponent>
                            <Typography variant='body2' sx={{ fontWeight: 500, color: theme.palette.primary.main }}>
                                Guides
                            </Typography>
                        </BreadcrumbsComponent>
                        <Typography variant='h1' sx={{ pb: 2 }}>Guides categories</Typography>
                    </Stack>
                </MaxWidthContainer>
                <Stack sx={{
                    backgroundColor: "#262420"
                }}>
                    <MaxWidthContainer
                        sx={{
                            pt: 4,
                            pb: 4, gap: 2,
                            flexDirection: { md: 'row', xs: "column" }
                        }}>
                        {renderCategories}
                    </MaxWidthContainer>
                </Stack>
                <LatestArticlesCarousel />
            </main>
        </PageLayout>
    )
}

export default GuidesPage
