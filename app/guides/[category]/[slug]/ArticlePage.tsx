'use client'
import FacebookIcon from '@/COMPONENTS/common/FacebookIcon';
import { theme } from '@/COMPONENTS/common/Theme';
import XIcon from '@/COMPONENTS/common/XIcon';
import LatestArticles from '@/COMPONENTS/main_page/LatestArticles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MaxWidthContainer } from '../../../../COMPONENTS/common/MaxWidthContainer';
import PageLayout from '../../../../COMPONENTS/common/PageLayout';
import { ArticleResponseType } from '../../../../COMPONENTS/types/ArticleTypes';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
    article?: ArticleResponseType;
    slug?: string;
}

const ArticlePage = ({ article }: Props) => {
    const pathname = usePathname()
    const url = process.env.NEXT_PUBLIC_DOMAIN_URL + pathname

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

    function getTruncatedText(text, availableWidth) {
        const ellipsisLength = 3;
        const textWidth = getTextWidth(text);

        if (textWidth <= availableWidth) {
            return text;
        }

        const maxLength = Math.floor((availableWidth - ellipsisLength) / textWidth);
        const truncatedText = text.substring(30, maxLength) + '...';
        return truncatedText;
    }

    function getTextWidth(text) {
        const charWidth = 10;
        return text.length * charWidth;
    }
    const containerRef = useRef(null);
    function getAvailableWidth() {
        const [availableWidth, setAvailableWidth] = useState(0);

        useEffect(() => {
            const observer = new ResizeObserver((entries) => {
                const { contentRect } = entries[0];
                setAvailableWidth(contentRect.width);
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => {
                if (observer) {
                    observer.disconnect();
                }
            };
        }, [containerRef]);

        return availableWidth;
    }
    return (
        <PageLayout>
            <Stack sx={{
                width: '100%',
                backgroundColor: "#efefef"
            }}>
                <MaxWidthContainer>
                    <Stack ref={containerRef} sx={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
                        <Stack direction={'row'} justifyContent={'flex-start'} spacing={1} sx={{
                            paddingTop: '10px',
                            marginBottom: '20px',
                            alignItems: 'center',
                            width: 'max-content',
                        }}>
                            <Link passHref href={'/'}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    Home
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {' / '}
                            </Typography>
                            <Link passHref href={'/guides'}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    Guides
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {' / '}
                            </Typography>
                            <Link passHref href={'/guides/' + category?.toLowerCase()}>
                                <Typography variant='body2' sx={{ ':hover': { textDecoration: 'underline' }, fontWeight: 500, color: theme.palette.secondary.main }}>
                                    {category}
                                </Typography>
                            </Link>
                            <Typography variant='body2' sx={{ fontWeight: 400, color: theme.palette.secondary.main }}>
                                {' / '}
                            </Typography>
                            <Typography variant='body2' noWrap title={article?.data?.attributes?.title}> {/* Added title attribute for full text on hover */}
                                {getTruncatedText(article?.data?.attributes?.title, getAvailableWidth())}
                            </Typography>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>

                <MaxWidthContainer sx={{ flexDirection: 'column', }}>
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
                            fill
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
                            <Typography sx={{ maxWidth: 'md', position: 'relative', zIndex: 2, textAlign: { xs: 'left', md: 'center' }, color: '#fff', fontSize: { xs: 28, sm: 34, md: 42 } }}
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
                            <Box sx={{ width: { sm: 90, xs: 30 }, height: '1px', backgroundColor: '#000' }}></Box>
                            <Typography sx={{ color: '#000', fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>
                                {'Share this article'}
                            </Typography>
                        </Stack>
                    </Stack>
                </MaxWidthContainer>
                <LatestArticles />

            </Stack>
        </PageLayout>
    )
}

export default ArticlePage
