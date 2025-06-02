"use client";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { InstantQuoteHorizontalComponent } from "../common/InstantQuoteHorizontalComponent";
import { theme } from "../common/shared/Theme";
import Image from "next/image";
export default function MainPageHeroArea() {
    // const bgColorLight = '#D7F2CB'
    // const bgColorDark = '#C4F6E1'
    return (
        <Stack direction={{ md: 'column', xs: 'column' }}
            pt={{ xs: 6, md: 5 }}
            pb={{ xs: 4, md: 8 }}
            mx={'auto'}
            width={'100%'}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                //  width={'100%'}
                sx={{ position: 'relative' }}
                mb={{ xs: 0, md: -7.25 }}
            >
                <Stack
                // sx={{
                //     mt: { xs: -14, sm: -5, md: 0 },
                //     ml: { xs: 15, md: 0 }
                // }}
                >
                    <Image
                        src={"/images/globe-vector.svg"}
                        width={350}
                        height={350}
                        alt="moving overseas"
                        priority
                    />
                </Stack>
                <Typography component={'h1'} sx={{
                    fontWeight: 400,
                    fontSize: { lg: 60, md: 48, sm: 42, xs: 32 },
                    position: 'relative',
                    // top: { sm: 0, xs: -30 },
                    // pt: { md: 16, sm: 0, xs: 0 },
                    pb: { xs: 6, md: 0 },
                    lineHeight: .8,
                    pt: 4,
                    textAlign: { md: 'center', xs: 'center' },
                    width: '100%',
                }}>
                    YOUR PARTNER IN<br />  <Typography component={'span'}
                        sx={{
                            fontWeight: 700, lineHeight: 1.1,
                            fontSize: { lg: 60, md: 48, sm: 42, xs: 32 },
                            color: theme.palette.secondary.main
                        }}>
                        SEEMLESS RELOCATIONS</Typography>
                </Typography>
            </Stack>
            <Stack maxWidth={{ md: 'none', xs: 'sm' }}
                sx={{
                    width: '100%',
                    mx: 'auto',
                    p: { md: 3, xs: 2 },
                    mb: 3,
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                }}>
                <InstantQuoteHorizontalComponent />
            </Stack>
        </Stack>
    );
}
