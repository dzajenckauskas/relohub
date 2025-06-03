'use client'
import Stack from '@mui/material/Stack';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TopNavBar from '../../TopNavBar';


type Props = {
    homePage?: boolean;
}

export default function Header({ homePage }: Props) {
    const [isQuoteVisible, setIsQuoteVisible] = useState(true);
    useEffect(() => {
        if (homePage) {

            const target = document.getElementById("get-quote");
            if (!target) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsQuoteVisible(entry.isIntersecting);
                },
                { root: null, threshold: 0.1 }
            );

            observer.observe(target);

            return () => observer.disconnect();
        }

    }, [homePage]);
    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 99,
                    backgroundColor: homePage ? (isQuoteVisible ? 'transparent' : '#ffffff') : '#fff',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <TopNavBar />
                <Stack
                    direction={'row'}
                    maxWidth={'lg'}
                    mx={'auto'}
                    sx={{
                        px: { xl: 2, sm: 2, xs: 2 },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 60
                    }}>
                    <Link passHref href={'/'} style={{ position: 'relative', width: 140, height: 40 }}>
                        <Image
                            src="/relohub-logo.svg"
                            alt="logo"
                            width={140}
                            height={40}
                            priority // This helps in preloading the image
                            style={{ objectFit: "contain" }}
                        />
                    </Link>
                </Stack>
            </header>
            {!homePage && <Stack sx={{ height: { md: 60, sm: 100, xs: 90 }, width: '100%' }}>
            </Stack>}

        </>

    );
}
