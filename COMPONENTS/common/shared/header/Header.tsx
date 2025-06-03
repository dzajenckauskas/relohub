'use client'
import Stack from '@mui/material/Stack';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import CustomerPortalIcon from '../../CustomerPortalIcon';
import TopNavBar from '../../TopNavBar';


type Props = {
    homePage?: boolean;
}

export default function Header({ homePage }: Props) {
    // const loginUrl = 'https://admin.Relohub.co.uk/customerPortal/login'
    // const [open, setOpen] = useState(false)
    // const [openDropdown, setOpenDropdown] = useState<number | undefined>()

    // const toggleOpen = () => {
    //     setOpen(!open)
    // }
    // const pathname = usePathname()
    // const links: HeaderLinkType[] = [
    //     // {
    //     //     id: 0,
    //     //     url: '/',
    //     //     name: "Home"
    //     // },

    //     // {
    //     //     id: 2,
    //     //     name: "International Moving",
    //     //     links: [
    //     //         { id: 0, name: 'Moving Overseas', url: '/international-moving' },
    //     //         { id: 1, name: 'Moving within Europe', url: '/moving-within-europe' }]
    //     // },
    //     // {
    //     //     id: 3,
    //     //     name: "Services",
    //     //     links: [
    //     //         { id: 0, name: '⁠Moving services', url: '/moving-services' },
    //     //         { id: 1, name: '⁠Relocation services', url: '/relocation-services' }]
    //     // },
    //     {
    //         id: 1,
    //         name: "Services",
    //         url: '#services'
    //     },
    //     {
    //         id: 3,
    //         name: "Get a Quote",
    //         url: '#get-quote'
    //     },
    //     {
    //         id: 3,
    //         name: "The Process",
    //         url: '#process'
    //     },
    //     // {
    //     //     id: 4,
    //     //     name: "About Us",
    //     //     url: '#about-us'
    //     // }
    // ]
    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [open]);

    // const path = pathname.split('/').slice(0, 2).join('/');

    // const renderLinks = links.map((link) => {
    //     return (
    //         <HeaderLink setOpenDropdown={setOpenDropdown} openDropdown={openDropdown}
    //             key={link?.id} path={path} link={link} />
    //     )
    // })
    // const renderMobileLinks = links.map((link) => {
    //     return (
    //         <Stack key={link.id}>
    //             {link?.url && <Link onClick={toggleOpen} passHref href={link?.url} style={{ fontWeight: 500, fontSize: 16, cursor: 'pointer', textDecoration: 'none' }}>
    //                 <Stack sx={{ color: path === link.url ? theme.palette.secondary.main : 'inherit', position: 'relative', ':hover': { color: theme.palette.secondary.main } }}>
    //                     {link.name}
    //                 </Stack>
    //             </Link>}
    //             {!link.url &&
    //                 <Stack spacing={3} sx={{
    //                 }}>
    //                     {link.links.map((l, i) => {
    //                         return (
    //                             <Link key={i} onClick={toggleOpen} passHref href={l?.url} style={{ fontWeight: 500, fontSize: 16, cursor: 'pointer', textDecoration: 'none' }}>
    //                                 <Stack sx={{ color: path === l.url ? theme.palette.secondary.main : 'inherit', position: 'relative', ':hover': { color: theme.palette.secondary.main } }}>
    //                                     {l.name}
    //                                 </Stack>
    //                             </Link>
    //                         )
    //                     })}
    //                 </Stack>
    //             }
    //         </Stack>
    //     )
    // })
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
                    {/* {!open && <Button
                        aria-label="Mobile menu"
                        onClick={toggleOpen}
                        sx={{
                            display: { md: 'none', xs: 'flex' },
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
                            display: { md: 'none', xs: 'flex' },
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
                    </Button>} */}

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
                    {/* <Stack sx={{
                        display: { md: 'flex', sm: 'none', xs: 'none' }, flexDirection: 'row',
                        alignItems: 'center',
                        gap: { lg: 6, md: 6, sm: 0, xs: 0 },
                    }}>
                        {renderLinks}
                    </Stack> */}

                </Stack>
            </header>
            {!homePage && <Stack sx={{ height: { md: 60, sm: 100, xs: 90 }, width: '100%' }}>
            </Stack>}
            {
                // open &&
                <Stack sx={{
                    display: { md: 'none', xs: 'flex' }, position: 'fixed', zIndex: 12,
                    top: 74, width: { xs: '100% ' }, left: 0,
                    pt: 4,
                    height: 'calc(100vh - 28px)',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;'
                }}>
                    <Stack spacing={3} sx={{ position: 'fixed', textTransform: 'uppercase', pl: { sm: 4, xs: 2 }, pr: { md: 4, xs: 2 }, py: 2 }}>
                        {/* {renderMobileLinks} */}
                        {/* <Link passHref href={loginUrl} >
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
                                <Typography variant='h5' component={'p'} fontWeight={500} sx={{ pl: 1, fontSize: 16 }}>
                                    CUSTOMER PORTAL
                                </Typography>
                            </Button>
                        </Link> */}
                    </Stack>
                </Stack>
            }
        </>

    );
}
