'use client'
import Link from 'next/link';

type Props = {
    article?: any;
}

const ArticleCard = ({ article }: Props) => {
    const category = article.attributes.articleCategory.data.attributes.name
    const continent = article.attributes.articleContinents?.data?.[0]?.attributes.name
    return (
        <div key={article.id} style={{
            width: '100%',
            backgroundColor: "#fff",
            borderRadius: 5
        }}>
            <div style={{
                height: '250px',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                width: '100%',
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${article?.attributes?.images?.data?.[0]?.attributes?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'flex-end',
                position: 'relative'
            }}>
            </div>
            <div style={{ padding: 20 }}>
                <span style={{ color: '#9b9b9b', fontSize: 12, textTransform: 'uppercase', fontWeight: 500 }}>{category} • {continent}</span>
                <h2 style={{
                    fontSize: '3rem',
                    paddingBottom: 8,
                    paddingTop: 8,
                    color: '#e71c5e'
                }}>{article.attributes.title}</h2>
                <p style={{ paddingTop: 16, maxHeight: '10rem', overflow: 'hidden' }}>
                    {article.attributes.shortContent}
                </p>
                <Link
                    href={`/guides/${article.attributes.articleCategory.data.attributes.key}/${article.attributes.slug}`} passHref>
                    <button style={{
                        paddingTop: 16,
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
            </div>
        </div>

    )
}

export default ArticleCard
