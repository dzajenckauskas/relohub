'use client'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

type Props = {
    article?: any;
}

const ArticleCard = ({ article }: Props) => {
    const category = article.attributes.articleCategory.data.attributes.name
    const continent = article.attributes.articleContinents?.data?.[0]?.attributes.name
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
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${article?.attributes?.images?.data?.[0]?.attributes?.url})`,
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
                    color: '#e71c5e',
                    fontWeight: 700,
                    lineHeight: 1
                }}>
                    {article.attributes.title}
                </Typography>
                <p style={{ paddingTop: 16, maxHeight: '10rem', overflow: 'hidden' }}>
                    {article.attributes.shortContent}
                </p>
                <Link
                    href={`/guides/${article.attributes.articleCategory.data.attributes.key}/${article.attributes.slug}`} passHref>
                    <button style={{
                        paddingTop: 20,
                        fontSize: 14,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        color: '#e71c5e',
                        cursor: 'pointer',
                        backgroundColor: '#fff',
                        fontWeight: 600
                    }}>
                        Read more
                    </button>
                </Link>
            </Stack>
        </Paper>

    )
}

export default ArticleCard
