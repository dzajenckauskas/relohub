"use client";
import HeroInputs from "./heroInputs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from '@mui/material/Typography'
import { theme } from "../common/Theme";
import Stack from "@mui/material/Stack";

export default function MainPageHeroArea() {
    const router = useRouter();
    const [enableButton, setEnableButton] = useState(false);

    function herotextrightwrp() {
        return (
            <p className="instantquotewrp">
                <span>{"Get an "}</span>
                <span>
                    <b>Instant Quote</b>
                </span>
                <span>{" now"}</span>
            </p>
        );
    }

    return (
        <Stack direction={{ md: 'row', xs: 'column' }} pt={6} mx={'auto'} width={'100%'}>

            <Typography component={'h1'} sx={{
                fontWeight: 700,
                fontSize: { lg: 60, md: 52, sm: 52, xs: 34 },
                mt: { sm: 0, xs: -2 },
                pt: { md: 16, sm: 2, xs: 0 },
                pb: { md: 4, sm: 4, xs: 17 },
                lineHeight: 1,
                textAlign: { md: 'left', xs: 'center' },
                width: '100%',

            }}>
                We promise to <span style={{ color: theme.palette.secondary.main }}>Deliver1</span> <br />flawless  relocation
            </Typography>
            <Stack
                sx={{
                    width: '100%',
                    mx: 'auto',
                    p: { md: 3, xs: 2 },
                    mb: 3,
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                }}>
                {/* {herotextrightwrp()} */}
                <p className="instantquotewrp">
                    <span>{"Get an "}</span>
                    <span>
                        <b>Instant Quote</b>
                    </span>
                    <span>{" now"}</span>
                </p>
                <HeroInputs
                    enableButton={(st) => {
                        setEnableButton(st);
                    }} edit={undefined} newstate={undefined} />
                <button
                    disabled={!enableButton}
                    className="herobuttongetestimate"
                    onClick={() => {
                        router.push(
                            `/offer?data=${encodeURIComponent(
                                JSON.stringify(enableButton),
                            )}`,
                        );
                    }}
                >
                    GET ESTIMATE
                </button>
            </Stack>
        </Stack>
    );
}
