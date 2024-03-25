'use client'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderPinkElement from "./HeaderPinkElement";
import TopNavBar from './TopNavBar';
import CustomerPortalIcon from './CustomerPortalIcon';


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
                                <CustomerPortalIcon />
                                <Typography variant='h5' fontWeight={600} sx={{ pl: 1, display: { md: 'flex', xs: 'none' }, }}>
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
