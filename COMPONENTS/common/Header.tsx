'use client'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomerPortalIcon from './CustomerPortalIcon';
import HeaderPinkElement from "./HeaderPinkElement";
import { theme } from './Theme';
import TopNavBar from './TopNavBar';

export default function Header() {
    const loginUrl = 'https://admin.deliver1.co.uk/customerPortal/login'
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(!open)
    }
    const pathname = usePathname()
    const links = [
        { id: 0, name: "Home", url: '/' },
        { id: 1, name: "Guides", url: '/guides' },
        { id: 2, name: "About us", url: '/about-us' }
    ]
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    const path = pathname.split('/').slice(0, 2).join('/');

    const renderLinks = links.map((link) => {
        return (
            <Stack key={link.id}>
                <Link passHref href={link.url} style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', textDecoration: 'none' }}>
                    <Stack sx={{ position: 'relative', ':hover': { color: theme.palette.secondary.main } }}>
                        {link.name}
                        {path === link.url && <Stack sx={{
                            position: 'absolute',
                            bottom: '-21px;',
                            left: 0,
                            height: '3px',
                            width: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            transition: 'background-color 0.3s ease',
                        }}></Stack>}
                    </Stack>
                </Link>
            </Stack>
        )
    })
    const renderMobileLinks = links.map((link) => {
        return (
            <Stack key={link.id}>
                <Link onClick={toggleOpen} passHref href={link.url} style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', textDecoration: 'none' }}>
                    <Stack sx={{ color: path === link.url ? theme.palette.secondary.main : 'inherit', position: 'relative', ':hover': { color: theme.palette.secondary.main } }}>
                        {link.name}
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
                        height: 60
                    }}>
                    {!open && <Button
                        aria-label="Mobile menu"
                        onClick={toggleOpen}
                        sx={{
                            display: { sm: 'none', xs: 'flex' },
                            border: '1px solid #ccc',
                            borderRadius: '3px', fontWeight: 700,
                            fontSize: 14,
                            minWidth: 20,
                            height: 38,
                            padding: '10px 14px',
                            alignItems: 'center',
                            fontFamily: 'inherit',
                            cursor: 'pointer'
                        }}>
                        <MenuRoundedIcon sx={{ transform: 'scale(2)' }} />
                    </Button>}
                    {open && <Button
                        aria-label="Mobile menu"
                        onClick={toggleOpen}
                        sx={{
                            display: { sm: 'none', xs: 'flex' },
                            border: '1px solid #ccc',
                            borderRadius: '3px', fontWeight: 700,
                            fontSize: 14,
                            minWidth: 20,
                            height: 38,
                            padding: '10px 14px',
                            alignItems: 'center',
                            fontFamily: 'inherit',
                            cursor: 'pointer'
                        }}>
                        <CloseRoundedIcon sx={{ transform: 'scale(1.8)' }} />
                    </Button>}

                    <Link passHref href={'/'} style={{ position: 'relative', width: 140, height: 40 }}>
                        <Image
                            fill
                            src={"/logo2.png"}
                            alt="logo"
                            style={{ objectFit: "contain" }}
                        />
                    </Link>
                    <Stack sx={{
                        display: { md: 'flex', sm: 'flex', xs: 'none' }, flexDirection: 'row',
                        alignItems: 'center', gap: { lg: 10, md: 4, sm: 6, xs: 0 }
                    }}>
                        {renderLinks}
                    </Stack>
                    <Stack style={{
                        display: 'flex', flexDirection: 'row', gap: 15,
                        alignItems: 'center',
                    }}>
                        <Link passHref href={loginUrl} >
                            <Button aria-label="Customer portal" variant='outlined' sx={{
                                display: { md: 'flex', sm: 'flex', xs: 'flex' },
                                border: '1px solid #ccc',
                                borderRadius: '3px', fontWeight: 700,
                                fontSize: 14,
                                minWidth: 20,
                                padding: '10px 14px',
                                alignItems: 'center',
                                fontFamily: 'inherit',
                                cursor: 'pointer'
                            }}>
                                <CustomerPortalIcon />
                                <Typography variant='h5' component={'p'} fontWeight={600} sx={{ pl: 1, display: { md: 'flex', xs: 'none' }, }}>
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
            <Stack sx={{ height: { md: 60, sm: 100, xs: 90 }, width: '100%', backgroundColor: '#efefef' }}>
            </Stack>
            {open &&
                <Stack sx={{
                    display: { sm: 'none', xs: 'flex' }, position: 'fixed', zIndex: 12,
                    top: 74, width: { xs: '100% ' }, left: 0,
                    pt: 4,
                    backgroundColor: '#f1f1f1',
                    height: 'calc(100vh - 28px)',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;'
                }}>
                    <Stack spacing={3} sx={{ position: 'fixed', textTransform: 'uppercase', pl: { sm: 4, xs: 2 }, pr: { md: 4, xs: 2 }, py: 4 }}>
                        {renderMobileLinks}
                        <Link passHref href={loginUrl} >
                            <Button aria-label="Customer portal" variant='outlined' sx={{
                                border: '1px solid #ccc',
                                borderRadius: '3px', fontWeight: 700,
                                fontSize: 14,
                                minWidth: 20,
                                padding: '10px 14px',
                                alignItems: 'center',
                                fontFamily: 'inherit',
                                cursor: 'pointer'
                            }}>
                                <CustomerPortalIcon />
                                <Typography variant='h5' component={'p'} fontWeight={600} sx={{ pl: 1, }}>
                                    CUSTOMER PORTAL
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            }
        </>

    );
}
