'use client'
import { theme } from '@/COMPONENTS/common/shared/Theme';
import { ArticleDataType } from '@/COMPONENTS/types/ArticleTypes';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    article?: ArticleDataType;
    activeContinent?: string;
    loading?: boolean;
    reverse?: boolean;
    buttonText?: string;
    url?: string;
    title?: string;
    shortContent?: string;
    backgroundColor?: string;
    imgSrc?: string;
    imgAlt?: string;
    textWidth?: string;
    objectPosition?: string;
    children?: React.ReactNode;
    sm?: string;
    minHeight?: { xs?: number; sm?: number; md?: number; lg?: number }
}

const SectionCard = ({ minHeight, sm, objectPosition, textWidth, backgroundColor, buttonText, url, title, shortContent, imgSrc, imgAlt, reverse, loading, children }: Props) => {

    return (
        <Stack
            gap={{ xs: 1, sm: 4, md: 4, lg: 6 }}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: reverse ? (sm ? sm : 'row-reverse') : (sm ? sm : 'row'), md: reverse ? ('row-reverse') : ('row'), },
                width: '100%',
                backgroundColor: backgroundColor ?? "transparent",
                borderRadius: '5px',
                overflow: 'hidden',
                height: '100%',
            }}>
            <Stack sx={{
                overflow: 'hidden',
                width: '100%'
            }}>
                <Stack sx={{
                    minHeight: minHeight ?? { xs: '200px', sm: '250px' },
                    height: '100%',
                    borderRadius: backgroundColor ? '0px' : '5px',
                    width: '100%',
                    alignItems: 'flex-end',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    ":hover": {
                        transform: loading ? '' : 'scale(1.05)'
                    }
                }}>
                    {loading && <Skeleton variant="rectangular" width={'100%'} height={'100%'} />}
                    {!loading && <Image
                        src={imgSrc ?? '/placeholder-image.webp'}
                        alt={imgAlt ?? '/placeholder-image.webp'}
                        priority
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            backgroundColor: '#a2a2a2',
                            objectFit: 'cover',
                            objectPosition: objectPosition ?? 'center'
                        }}
                    />}
                </Stack>
            </Stack>

            <Stack sx={{ p: { xs: 2, sm: 2, md: 4 }, mb: 4, width: textWidth ?? '100%', position: 'relative' }}>
                {/* <Typography variant='body2' sx={{ color: '#9b9b9b', textTransform: 'uppercase', fontWeight: 500, letterSpacing: 1 }}>
                    {loading ? <Skeleton /> : <> {category} {continent && <>• {continent}</>}</>}
                </Typography> */}
                {title && <Typography variant='h2' component={'h2'} sx={{
                    // color: theme.palette.secondary.main,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    width: { xs: '100%', sm: '80%', md: '80%' },
                }}>
                    {loading ? <>
                        <Skeleton height={86} />
                    </> : `${title}`}
                </Typography>}

                {shortContent && <Typography variant='body1'
                    sx={{ pt: 1 }}
                >
                    {loading ? <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </> : `${shortContent}`}
                </Typography>}
                {children}
                {url && <Typography sx={{
                    mt: 2,
                    height: '100%',
                    // width: 'fit-content',
                    width: { md: 'fit-content', sm: 'fit-content', xs: '100%' },
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    justifySelf: 'flex-end',
                    color: theme.palette.secondary.main,
                    cursor: 'pointer',
                    // backgroundColor: '#fff',
                    backgroundColor: "transparent",
                    fontWeight: 600,
                    ':hover': { color: theme.palette.secondary.dark }
                }}>
                    {loading ?
                        <Skeleton width={100} aria-label="Get in touch" />
                        :
                        // <Link aria-label="Get in touch" href={url} passHref>
                        //     Get in touch
                        // </Link>
                        <>

                            <Link aria-label={buttonText} passHref href={url ?? '/'}
                                style={{
                                    paddingTop: 16, display: 'flex',
                                    justifyContent: 'center', width: '100%',
                                }}>
                                <Button variant='contained' color='secondary'
                                    aria-label={buttonText}
                                    size="large"
                                    sx={{
                                        width: '100%'
                                    }}>
                                    {buttonText}
                                </Button>
                            </Link>
                        </>
                    }
                </Typography>}
            </Stack>
        </Stack>

    )
}

export default SectionCard
