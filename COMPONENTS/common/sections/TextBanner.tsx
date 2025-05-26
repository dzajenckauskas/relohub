import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const TextBanner = () => {
    return (
        <Stack
            sx={{ alignItems: 'center' }}
            direction={{ md: 'row', xs: 'column' }} width={'100%'} justifyContent={'space-between'} pt={2} pb={4}>
            <Stack width={{ md: '70%', xs: '100%' }} mt={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Typography textAlign={{ md: 'left', xs: 'center' }} fontSize={60} lineHeight={.7} fontWeight={700}>
                    Get a
                </Typography>
                <Typography textAlign={{ md: 'left', xs: 'center' }} fontSize={60} lineHeight={.7} fontWeight={700} color={'secondary'}>
                    Free Quote
                </Typography>
                <Typography textAlign={{ md: 'left', xs: 'center' }} fontSize={60} lineHeight={.7} fontWeight={700}>
                    in seconds
                </Typography>
                <Typography textAlign={{ md: 'left', xs: 'center' }} variant='h4' fontWeight={500} width={{ md: '80%', xs: '50%' }}>
                    Moving has bever been
                    this simple with Relohub
                </Typography>
                <Stack width={{ md: '80%', xs: '100%' }} display={{ md: 'flex', xs: 'none' }}>
                    <Link aria-label="Get a free quote" passHref href={'/offer'} style={{ textDecoration: 'none', paddingTop: 16, display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Button variant='contained' color='secondary'
                            aria-label="Get a free quote"
                            size="large"
                            sx={{
                                // marginLeft: '-16px',
                                borderRadius: 1.5,
                                height: 60,
                                width: '100%'
                            }}>
                            Get a free quote
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            <Stack width={'100%'} sx={{ position: 'relative', minHeight: { xs: 300, md: 400 } }}>
                <Image
                    src={'/images/text-banner-image.png'}
                    // alt={category.attributes?.name}
                    fill
                    priority
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: 'contain',
                    }} alt={'get a free quote'} />
            </Stack>
            <Stack maxWidth={500} width={{ md: '50%', xs: '100%' }} mt={-2} display={{ md: 'none', xs: 'flex' }}>
                <Link aria-label="Get a free quote" passHref href={'/offer'} style={{ textDecoration: 'none', paddingTop: 16, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button variant='contained' color='secondary'
                        aria-label="Get a free quote"
                        size="large"
                        sx={{
                            // marginLeft: '-16px',
                            borderRadius: 1.5,
                            height: 60,
                            width: '100%'
                        }}>
                        Get a free quote
                    </Button>
                </Link>
            </Stack>

        </Stack>
    )
}

export default TextBanner
