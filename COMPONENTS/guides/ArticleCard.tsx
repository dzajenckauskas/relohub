'use client'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { theme } from '../common/Theme';
import { ArticleDataType } from '../types/ArticleTypes';

type Props = {
    article?: ArticleDataType;
    activeContinent?: string;
}

const ArticleCard = ({ article, activeContinent }: Props) => {
    const category = article.attributes.articleCategory.data?.attributes.name
    const continent = activeContinent ?
        article.attributes.articleContinents?.data?.find((c) => c?.attributes?.key === activeContinent)?.attributes.name :
        article.attributes.articleContinents?.data?.[0]?.attributes.name
    return (
        <Paper key={article.id}
            sx={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                width: '100%',
                backgroundColor: "#fff",
                borderRadius: '5px'
            }}>
            <Stack style={{
                height: '250px',
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px',
                width: '100%',
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${article?.attributes?.image?.data?.attributes?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'flex-end',
                position: 'relative'
            }}>
            </Stack>
            <Stack sx={{ p: 3 }}>
                <Typography sx={{ color: '#9b9b9b', fontSize: 12, textTransform: 'uppercase', fontWeight: 500, letterSpacing: 1 }}>
                    {category} • {continent}
                </Typography>
                <Typography style={{
                    fontSize: '3rem',
                    paddingBottom: 8,
                    paddingTop: 8,
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    lineHeight: 1
                }}>
                    {article.attributes.title}
                </Typography>
                <Typography variant='body2' sx={{ pt: 2, fontSize: 15, maxHeight: '10rem', overflow: 'hidden' }}>
                    {article.attributes.shortContent}
                </Typography>

                <Typography sx={{
                    mt: 2,
                    width: 'fit-content',
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: theme.palette.secondary.main,
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    fontWeight: 600,
                    ':hover': { color: theme.palette.secondary.dark }
                }}>
                    <Link
                        href={`/guides/${article.attributes.articleCategory.data.attributes.key}/${article.attributes.slug}`} passHref>
                        Read more
                    </Link>
                </Typography>
            </Stack>
        </Paper>

    )
}

export default ArticleCard
