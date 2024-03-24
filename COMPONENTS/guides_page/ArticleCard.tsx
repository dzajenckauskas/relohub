'use client'
import Link from 'next/link';

type Props = {
    article?: any;
}

const ArticleCard = ({ article }: Props) => {
    return (
        <div key={article.id} style={{
            width: '100%'
        }}>
            <div style={{
                height: '250px',
                borderRadius: 5,
                width: '100%',
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${article?.attributes?.images?.data?.[0]?.attributes?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'flex-end',
                position: 'relative'
            }}>

            </div>
            <h2 style={{
                fontSize: '3rem',
                paddingBottom: 8,
                paddingTop: 8,
            }}>{article.attributes.title}</h2>
            <p>{article.attributes.shortContent}</p>
            <Link href={`/guides/${article.attributes.articleCategory.data.attributes.key}/${article.attributes.slug}`} passHref>
                <button style={{
                    paddingTop: 16,
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: 'red',
                    cursor: 'pointer'
                }}>
                    Read more
                </button>
            </Link>
        </div>

    )
}

export default ArticleCard
