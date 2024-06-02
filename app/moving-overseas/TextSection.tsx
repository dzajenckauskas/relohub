import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import { theme } from '@/COMPONENTS/common/shared/Theme';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    text: string;
}

const TextSection = ({ title, text }: Props) => {
    return (
        <Stack sx={{ backgroundColor: '#252420' }}>
            <MaxWidthContainer sx={{ py: 8 }}>
                <Stack alignItems={'center'}>
                    {<Typography variant='h2' component={'h2'} sx={{
                        py: 1,
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        width: { xs: '100%', sm: '80%', md: '50%' },
                        // minHeight: { xs: 0, md: '102px' }
                    }}>
                        {title}
                    </Typography>}

                    <Typography variant='body1'
                        sx={{
                            textAlign: 'center',
                            pt: 1, color: '#fff',
                            width: { md: '50%', sm: '80%', xs: '80%' },
                        }}
                    >
                        {text}
                    </Typography>
                    <Typography sx={{
                        mt: 2,
                        height: '100%',
                        // width: 'fit-content',
                        width: { md: 'max-content', sm: 'fit-content', xs: 'fit-content' },
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
                        <Link aria-label="Get in touch" passHref href={'#get-in-touch'}
                            style={{
                                paddingTop: 16, display: 'flex',
                                justifyContent: 'center', width: '100%',
                            }}>
                            <Button variant='contained' color='secondary'
                                aria-label="Get in touch"
                                size="large"
                                sx={{
                                    width: '100%', px: 4
                                }}>
                                {'CONTACT US'}
                            </Button>
                        </Link>
                    </Typography>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default TextSection
