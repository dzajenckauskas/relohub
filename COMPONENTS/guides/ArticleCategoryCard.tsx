'use client'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryDataType } from '../types/CategoryTypes';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ExpandButton } from '../common/ExpandButton';
import { LinkArrowButton } from '../common/LinkArrowButton';
type Props = {
    category?: CategoryDataType;
}

const ArticleCategoryCard = ({ category }: Props) => {
    return (
        <Stack sx={{
            borderRadius: '5px',
            boxShadow: '#00000043 0px 7px 29px 0px;',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
        }}>

            <Stack
                sx={{
                    height: { md: '450px', sm: '200px', xs: '120px' },
                    position: 'relative',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    ":hover": {
                        transform: 'scale(1.1)'
                    }
                }}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${category?.attributes?.image?.data?.attributes?.formats?.medium?.url ?? category?.attributes?.image?.data?.attributes?.url}`}
                    alt={category.attributes?.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: 'cover'
                    }}
                />
                <Stack
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                    }}
                ></Stack>
            </Stack>
            <Stack direction={'row'}
                sx={{
                    width: '100%',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    p: { xs: 2, md: 4 },
                    zIndex: 1,
                    color: '#fff',
                }}>
                <Link href={`/guides/${category.attributes?.key}`} passHref style={{
                    display: 'flex', justifyContent: 'space-between', width: '100%'
                }}>
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 600,
                            margin: 0,
                            ':hover': {
                                opacity: .8,
                            }
                        }}>
                        {category.attributes?.name}
                    </Typography>
                    <LinkArrowButton />
                </Link>
            </Stack>
            {/* </Link> */}
        </Stack>
    )
}

export default ArticleCategoryCard
