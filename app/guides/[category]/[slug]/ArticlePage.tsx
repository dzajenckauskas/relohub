'use client'
import Stack from '@mui/material/Stack';
import { MaxWidthContainer } from '../../../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../../../COMPONENTS/common/PageLayout';
import { ArticleResponseType, ArticlesResponseType } from '../../../../COMPONENTS/types/ArticleTypes';
import ArticleCard from '../../../../COMPONENTS/guides/ArticleCard';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import { theme } from '@/COMPONENTS/common/Theme';
import Link from 'next/link';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@/COMPONENTS/common/FacebookIcon';
import XIcon from '@/COMPONENTS/common/XIcon';
import { useEffect, useRef } from 'react';
import React from 'react';

type Props = {
    article?: ArticleResponseType;
    latestArticles?: ArticlesResponseType;
}

const ArticlePage = ({ article, latestArticles }: Props) => {
    const pathname = usePathname()
    const url = process.env.NEXT_PUBLIC_DOMAIN_URL + pathname
    const renderLatestArticles = latestArticles?.data?.map((article) => {
        return (
            <ArticleCard article={article} key={article.id} />
        )
    })
    const category = article?.data?.attributes?.articleCategory?.data?.attributes?.name
    const continent = article?.data?.attributes?.articleContinents?.data?.[0]?.attributes?.name
    const date = article?.data?.attributes?.createdAt
    function formatDate(dateString) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }
    const formattedDate = formatDate(date);

    const textRef = useRef(null);

    useEffect(() => {
        const width = textRef.current.offsetWidth;

        const shareBox = document.getElementById('share-box');
        if (shareBox) {
            shareBox.style.width = `${width - 145}px`;
        }
    }, [category, continent, formattedDate]);

    return (
        <PageLayout>
            <Stack sx={{
                width: '100%',
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer sx={{ flexDirection: 'column', pt: { xs: 2, md: 4 } }}>
                    <Stack sx={{
                        mx: 'auto',
                        mb: { xs: 4, md: 6 },
                        position: 'relative',
                        width: '100%',
                        height: { xs: 300, sm: 400, md: 600 },
                        justifyContent: 'flex-end',
                        borderRadius: '5px',
                        overflow: 'hidden'
                    }}>
                        <Image
                            priority
                            src={`${process.env.NEXT_PUBLIC_API_URL}${article?.data?.attributes?.image?.data?.attributes?.url ?? article?.data?.attributes?.image?.data?.attributes?.url}`}
                            alt={article?.data?.attributes?.image?.data?.attributes?.alternativeText ?? article?.data?.attributes?.title}
                            layout={'fill'}
                            objectFit="cover"
                        />
                        <Stack
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '50%',
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                            }}
                        />
                        <Stack direction={{ xs: 'column-reverse', md: 'column' }} sx={{ px: 2, pb: 3, position: 'relative', zIndex: 2, mx: 'auto' }}>
                            <Typography sx={{ maxWidth: 'md', position: 'relative', zIndex: 2, textAlign: { xs: 'left', md: 'center' }, color: '#fff' }}
                                variant='h1' fontWeight={700}>{article?.data?.attributes?.title}</Typography>

                            <Stack direction={'row'} justifyContent={{ xs: 'flex-start', md: 'center' }} pt={3} alignItems={'center'} spacing={2}>
                                <Typography ref={textRef}
                                    sx={{
                                        color: '#fff', fontSize: 14, textTransform: 'uppercase',
                                        fontWeight: 500, letterSpacing: 1
                                    }}>
                                    {category} • {continent} • {formattedDate}
                                </Typography>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}
                                    sx={{
                                        display: { xs: 'none', md: 'flex' }
                                    }}>
                                    <Stack direction={'row'} spacing={1.5} px={2} sx={{ justifyContent: 'center' }}>
                                        <WhatsappShareButton
                                            url={url}
                                            title={article?.data?.attributes?.title}
                                            separator=":: "
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <WhatsAppIcon sx={{ fontSize: 20 }} />
                                            </Stack>
                                        </WhatsappShareButton>
                                        <FacebookShareButton
                                            url={url}
                                            quote={article?.data?.attributes?.title}
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <FacebookIcon color={'#000'} />
                                            </Stack>
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url={url}
                                            title={article?.data?.attributes?.title}
                                        >
                                            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                                <XIcon color='#000' />
                                            </Stack>
                                        </TwitterShareButton>
                                    </Stack>

                                    <Box id="share-box" sx={{ width: '60px', height: '1px', backgroundColor: '#fff' }}></Box>
                                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>
                                        {'Share this article'}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ maxWidth: 'md', px: { xs: 2, md: 0 } }}>
                        <div className='dynamicContent' dangerouslySetInnerHTML={{ __html: article?.data.attributes.fullContent }} />
                    </Stack>
                    <Stack width={'100%'} sx={{ maxWidth: 'md', px: { xs: 2, md: 0 } }}>
                        <Stack direction={'row'} justifyContent={'flex-start'} width={'100%'}>
                            <Typography sx={{
                                mt: 4,
                                width: 'fit-content',
                                fontSize: 14,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color: theme.palette.secondary.main,
                                cursor: 'pointer',
                                fontWeight: 600,
                                textAlign: 'left',
                                ':hover': { color: theme.palette.secondary.dark }
                            }}>
                                <Link aria-label="Back to articles"
                                    href={`/guides/${article?.data?.attributes?.articleCategory?.data.attributes.key}}`} passHref>
                                    Back to articles
                                </Link>
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} justifyContent={'flex-start'} pt={4} alignItems={'center'} spacing={2}>
                            <Stack direction={'row'} spacing={1.5}>
                                <WhatsappShareButton
                                    url={url}
                                    title={article?.data?.attributes?.title}
                                    separator=":: "
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                        <WhatsAppIcon sx={{ fontSize: 20, color: '#fff' }} />
                                    </Stack>
                                </WhatsappShareButton>
                                <FacebookShareButton
                                    url={url}
                                    quote={article?.data?.attributes?.title}
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>

                                        <FacebookIcon color={'#fff'} />
                                    </Stack>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={url}
                                    title={article?.data?.attributes?.title}
                                >
                                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#000', cursor: 'pointer', ":hover": { opacity: .8 } }}>
                                        <XIcon color='#fff' />
                                    </Stack>
                                </TwitterShareButton>
                            </Stack>
                            <Box sx={{ width: 90, height: '1px', backgroundColor: '#000' }}></Box>
                            <Typography sx={{ color: '#000', fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>
                                {'Share this article'}
                            </Typography>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
                <Stack sx={{ width: '100%', backgroundColor: '#fff', mt: 6 }}>

                    <MaxWidthContainer>
                        <Stack sx={{
                            py: 8,
                            display: 'flex', flexDirection: 'column',
                        }}>
                            <Typography variant='h2'
                                sx={{

                                    textAlign: 'center',
                                    fontWeight: 700
                                }}>
                                Latest articles
                            </Typography>

                            <Stack direction={'row'} spacing={3} sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                                {renderLatestArticles?.[0]}
                                {renderLatestArticles?.[1]}
                                {renderLatestArticles?.[2]}
                            </Stack>
                            <Link aria-label="View all articles" passHref href={'/guides'} style={{ paddingTop: 32, display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Button
                                    aria-label="View all articles"
                                    style={{
                                        padding: '12px 22px',
                                        borderRadius: '2px',
                                        fontSize: 12,
                                        cursor: 'pointer',
                                        backgroundColor: '#e71d5e',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        width: 'calc(33.33% - 16px)'
                                    }}>
                                    View all articles
                                </Button>
                            </Link>

                        </Stack>
                    </MaxWidthContainer>
                </Stack>

            </Stack>
        </PageLayout>
    )
}

export default ArticlePage
