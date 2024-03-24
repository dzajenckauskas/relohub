'use client'
import Link from 'next/link';
import Stack from '@mui/material/Stack'
import Image from 'next/image';
type Props = {
    category?: any;
}

const ArticleCategoryCard = ({ category }: Props) => {
    return (
        <Link key={category.id} href={`/guides/${category.attributes.key}`} passHref style={{
            borderRadius: '5px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Stack
                sx={{
                    height: { md: '450px', xs: '250px' },

                    position: 'relative',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    ":hover": {
                        transform: 'scale(1.1)'
                    }
                }}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${category?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    alt={category.attributes.name}
                    layout="fill"
                    objectFit="cover"
                />
                <Stack
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '200px',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                    }}
                ></Stack>
            </Stack>
            <Stack direction={'row'}
                sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    padding: 4,
                    zIndex: 1,
                    color: '#fff',
                }}
            >
                <Link href={`/guides/${category.attributes.key}`} passHref>
                    <p
                        style={{
                            fontSize: 24,
                            fontWeight: 600,
                            margin: 0,
                        }}
                    >
                        {category.attributes.name}
                    </p>
                </Link>
                <Link href={`/guides/${category.attributes.key}`} passHref>
                    <Stack
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#e71c5e',
                            borderRadius: 50,
                            width: '40px',
                            height: '40px',
                            color: '#fff',
                            transition: 'transform 0.3s ease',
                            ":hover": {
                                transform: 'rotate(180deg)',
                            }
                        }}>
                        <p style={{ fontSize: 24, padding: 0, margin: 0, position: 'relative', bottom: 1, fontWeight: 600 }}>+</p>
                    </Stack>
                </Link>
            </Stack>
        </Link>
    )
}

export default ArticleCategoryCard
