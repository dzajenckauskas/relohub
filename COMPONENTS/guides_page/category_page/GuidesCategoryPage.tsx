'use client'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import PageLayout from '@/COMPONENTS/common/PageLayout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard';
import { theme } from '@/COMPONENTS/common/Theme';
import Grid from '@mui/material/Grid';
import { CategoryDataType } from '@/COMPONENTS/types/CategoryTypes';
import { ContinentsResponseType } from '@/COMPONENTS/types/ContinentTypes';
import { ArticleDataType } from '@/COMPONENTS/types/ArticleTypes';


type Props = {
    category?: CategoryDataType;
    articleContinents?: ContinentsResponseType;
}

const GuidesCategoryPage = ({ category, articleContinents }: Props) => {
    const [active, setActive] = useState<string | undefined>('all-posts')

    const [articles, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const url = `/api/articles?populate=seo,images,articleCategory,articleContinents&filters[articleCategory][key][$eq]=${category.attributes.key}`
    useEffect(() => {
        fetch(
            active !== 'all-posts' ?
                `${process.env.NEXT_PUBLIC_API_URL}${url}&filters[articleContinents][key][$eq]=${active}` :
                `${process.env.NEXT_PUBLIC_API_URL}${url}&filters[articleCategory][key][$eq]=${category.attributes.key}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [active, category.attributes.key, url])

    const renderLatestArticles = articles?.data?.map((a: ArticleDataType) => {
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
                    padding: '12px 22px',
                    borderRadius: 2,
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
                <MaxWidthContainer sx={{
                    display: 'flex', flexDirection: 'column',
                    backgroundColor: "#efefef",
                    width: '100%'
                }}>
                    <div style={{
                        paddingTop: '40px',
                        marginBottom: '80px',
                        width: '100%'
                    }}>
                        <h1 style={{
                            marginBottom: '40px',
                        }}>
                            {category.attributes?.name}
                        </h1>

                        <div style={{
                            display: 'flex', gap: 8,
                            paddingBottom: 22,
                            flexWrap: 'wrap'
                        }}>
                            <Button
                                onClick={() => setActive('all-posts')}
                                style={{
                                    padding: '12px 22px',
                                    borderRadius: 2,
                                    fontSize: 12,
                                    cursor: 'pointer',
                                    backgroundColor: active == 'all-posts' ? '#e71d5e' : '#d9d9d9',
                                    color: active == 'all-posts' ? '#fff' : '#e71d5e',
                                    textTransform: 'uppercase'
                                }}>
                                {"all posts"}
                            </Button>
                            {renderArticleContinents}
                        </div>
                        {articles?.data.length > 0 &&
                            <Grid container spacing={2} sx={{ display: 'flex', }}>
                                {renderLatestArticles}
                            </Grid>}
                        {articles?.data.length === 0 &&
                            <Typography color={theme.palette.secondary.main}
                                sx={{ pt: 2, display: 'flex', gap: 16, fontSize: '18px', justifyContent: 'space-between', width: '100%', fontWeight: 600 }}>
                                No articles yet
                            </Typography>}
                    </div>

                </MaxWidthContainer>
            </main>
        </PageLayout >
    )
}

export default GuidesCategoryPage
