"use client";
import { FlagIllustration } from "@/COMPONENTS/FlagIllustration";
import { InstantQuoteComponent } from "@/COMPONENTS/common/InstantQuoteComponent";
import { theme } from "@/COMPONENTS/common/Theme";
import { CountryResponseType } from "@/COMPONENTS/types/CountryType";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

type Props = {
    country: CountryResponseType
}

export default function MovingEuropePageHero({ country }: Props) {
    const countryName = country?.data?.attributes?.name
    return (
        <Stack direction={{ md: 'row', xs: 'column' }} pt={6} mx={'auto'} width={'100%'}>
            <Typography component={'h1'} sx={{
                fontWeight: 700,
                fontSize: { lg: 60, md: 50, sm: 40, xs: 30 },
                position: 'relative',
                top: { sm: 0, xs: -30 },
                pt: { md: 6, sm: 0, xs: 0 },
                pb: { md: 4, sm: 4, xs: 11 },
                lineHeight: 1.1,
                textAlign: { md: 'left', xs: 'center' },
                width: '100%',
            }}>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    Moving to or
                    <br />
                    from&nbsp;
                    <Typography component={'span'}
                        sx={{
                            fontWeight: 700, lineHeight: 1.1, fontSize: { lg: 60, md: 52, sm: 42, xs: 32 },
                            color: theme.palette.secondary.main
                        }}>
                        {countryName}
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Moving to
                    <br />or from
                    <br />
                    <Typography component={'span'}
                        sx={{
                            fontWeight: 700, lineHeight: 1.1, fontSize: { lg: 60, md: 52, sm: 42, xs: 32 },
                            color: theme.palette.secondary.main
                        }}>
                        {countryName}
                    </Typography>
                </Box>
            </Typography>
            <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <Stack sx={{
                    maxWidth: "1168px",
                    height: '200px',
                    mt: { xs: -14 },
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    pointerEvents: 'none',
                }}>
                    <FlagIllustration iso={country?.data?.attributes?.iso2?.toLowerCase()} />
                </Stack>
            </Stack>
            <Stack className="" maxWidth={{ md: 'none', xs: 'sm' }}
                sx={{
                    width: '100%',
                    mx: 'auto',
                    p: { md: 3, xs: 2 },
                    mb: 3,
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                }}>
                <InstantQuoteComponent />
            </Stack>
        </Stack>
    );
}
