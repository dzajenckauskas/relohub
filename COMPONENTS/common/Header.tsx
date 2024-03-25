'use client'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderPinkElement from "./HeaderPinkElement";
import TopNavBar from './TopNavBar';


export default function Header() {
    const pathname = usePathname()
    const links = [
        { id: 0, name: "Home", url: '/' },
        { id: 1, name: "Guides", url: '/guides' },
        { id: 2, name: "About us", url: '/about-us' }
    ]

    const renderLinks = links.map((link) => {
        return (
            <Stack key={link.id}>
                <Link passHref href={link.url} style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', textDecoration: 'none' }}>
                    <Stack sx={{ position: 'relative', ':hover': { color: '#e71d5e' } }}>
                        {link.name}
                        {pathname === link.url && <Stack sx={{
                            position: 'absolute',
                            bottom: '-28.5px;',
                            left: 0,
                            height: '3px',
                            width: '100%',
                            backgroundColor: '#e71d5e',
                            transition: 'background-color 0.3s ease',
                        }}></Stack>}
                    </Stack>
                </Link>
            </Stack>
        )
    })
    return (
        <>
            <header
                style={{
                    borderBottom: '1px solid #d8d8d8', backgroundColor: '#f1f1f1',
                    position: 'fixed', top: 0, width: '100%', zIndex: 99
                }}>
                <TopNavBar />
                <Stack
                    direction={'row'}
                    maxWidth={'lg'}
                    mx={'auto'}
                    sx={{
                        px: { xl: 2, sm: 2, xs: 1 },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 75
                    }}>
                    <Link passHref href={'/'}>
                        <Stack sx={{ display: { md: 'none', xs: "flex" } }}>
                            <Image
                                width={40}
                                height={50}
                                src={"/logo.png"}
                                alt="logo"
                                style={{ objectFit: "contain" }}
                            />
                        </Stack>
                        <Stack sx={{ display: { md: 'flex', xs: "none" } }}>
                            <Image
                                width={180}
                                height={80}
                                src={"/logo2.png"}
                                alt="logo"
                                style={{ objectFit: "contain" }}
                            />
                        </Stack>
                    </Link>
                    <Stack sx={{
                        display: { md: 'flex', sm: 'flex', xs: 'none' }, flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center'
                    }}>
                        {renderLinks}
                    </Stack>
                    <Stack style={{
                        display: 'flex', flexDirection: 'row', gap: 15,
                        alignItems: 'center',
                    }}>
                        <Link passHref href={'https://admin.deliver1.co.uk/customerPortal/login'} >
                            <Button variant='outlined' sx={{
                                display: { md: 'flex', sm: 'flex', xs: 'none' },
                                border: '1px solid #ccc',
                                borderRadius: '3px', fontWeight: 700,
                                fontSize: 14,
                                padding: '14px 20px',
                                alignItems: 'center',
                                fontFamily: 'inherit',
                                cursor: 'pointer'
                            }}>
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: 10 }} width="15" height="15" viewBox="0 0 569.16 569.16"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="25.043039999999998"></g>
                                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M451.919,0h-122.4c-25.355,0-45.9,20.551-45.9,45.9s20.544,45.9,45.9,45.9h119.34V477.36h-119.34 c-25.355,0-45.9,20.545-45.9,45.899c0,25.355,20.544,45.9,45.9,45.9h122.4c48.93,0,88.74-39.811,88.74-88.74V88.74 C540.659,39.811,500.849,0,451.919,0z"></path>
                                        <path d="M401.216,258.209L215.797,72.792c-14.566-14.566-26.371-9.676-26.371,10.924v70.777H43.421 c-8.238,0-14.92,6.677-14.92,14.921v230.332c0,8.237,6.683,14.921,14.92,14.921h146.005v70.777 c0,20.594,11.805,25.49,26.371,10.925l185.418-185.418C415.78,296.386,415.78,272.774,401.216,258.209z"></path> </g> </g> </g></svg>
                                <Typography variant='h5' fontWeight={600} sx={{ display: { md: 'flex', xs: 'none' }, }}>
                                    CUSTOMER PORTAL
                                </Typography>
                            </Button>
                        </Link>
                        <Stack sx={{ display: { md: 'flex', xs: 'none' } }}>
                            <HeaderPinkElement />
                        </Stack>
                    </Stack>
                </Stack>
            </header>
            <Stack sx={{ height: { md: 75, xs: 105 }, width: '100%' }}>
            </Stack>
        </>

    );
}
