'use client'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { theme } from '../common/Theme';
import { ArticleDataType } from '../types/ArticleTypes';
import Image from 'next/legacy/image';

type Props = {
    article?: ArticleDataType;
    activeContinent?: string;
}

const ArticleCard = ({ article, activeContinent }: Props) => {
    const category = article.attributes.articleCategory.data?.attributes.name
    const continent = activeContinent ?
        article.attributes.articleContinents?.data?.find((c) => c?.attributes?.key === activeContinent)?.attributes.name :
        article.attributes.articleContinents?.data?.[0]?.attributes.name
    const url = `/guides/${article.attributes.articleCategory.data.attributes.key}/${article.attributes.slug}`
    const imgSrc = `${process.env.NEXT_PUBLIC_API_URL}${article?.attributes?.image?.data?.attributes?.formats?.medium?.url ?? article?.attributes?.image?.data?.attributes?.url ?? '/'}`
    const imgAlt = article?.attributes?.image?.data?.attributes?.alternativeText ?? article.attributes.title
    return (
        <Paper key={article.id}
            sx={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                width: '100%',
                backgroundColor: "#fff",
                borderRadius: '5px',

            }}>
            <Link href={url} passHref>
                <Stack sx={{
                    overflow: 'hidden',

                }}>
                    <Stack sx={{
                        height: '250px',
                        borderTopRightRadius: '5px',
                        borderTopLeftRadius: '5px',
                        width: '100%',
                        alignItems: 'flex-end',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        ":hover": {
                            transform: 'scale(1.05)'
                        }
                    }}>
                        <Image
                            src={imgSrc}
                            alt={imgAlt}
                            layout={'fill'}
                            objectFit="cover"
                        />
                    </Stack>
                </Stack>
            </Link>

            <Stack sx={{ p: { xs: 2, md: 3 } }}>
                <Typography variant='body2' sx={{ color: '#9b9b9b', textTransform: 'uppercase', fontWeight: 500, letterSpacing: 1 }}>
                    {category} • {continent}
                </Typography>
                <Link href={url} passHref>
                    <Typography variant='h4' component={'h2'} sx={{
                        py: 1,
                        color: theme.palette.secondary.main,
                        fontWeight: 700,
                        lineHeight: 1.2
                    }}>
                        {article.attributes.title}
                    </Typography>
                </Link>

                <Typography variant='body1' sx={{ pt: 1, maxHeight: '10rem', overflow: 'hidden' }}>
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
                        href={url} passHref>
                        Read more
                    </Link>
                </Typography>
            </Stack>
        </Paper>

    )
}

export default ArticleCard
