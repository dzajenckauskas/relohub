'use client'
import LatestArticlesCarousel from '@/COMPONENTS/main_page/LatestArticlesCarousel';
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../COMPONENTS/common/PageLayout';
import ArticleCategoryCard from '../../COMPONENTS/guides/ArticleCategoryCard';
import { CategoriesResponseType } from '../../COMPONENTS/types/CategoryTypes';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { theme } from '@/COMPONENTS/common/Theme';

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
                        display: 'flex', flexDirection: 'column',
                    }}>
                        <Stack direction={'row'} justifyContent={'flex-start'} spacing={1} sx={{
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
                            <Typography variant='body2' sx={{ fontWeight: 500, color: theme.palette.primary.main }}>
                                Guides
                            </Typography>
                        </Stack>
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
