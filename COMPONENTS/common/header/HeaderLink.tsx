import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { theme } from "../Theme";

export type HeaderLinkType = {
    id?: number;
    name?: string;
    url?: string;
    links?: {
        id?: number;
        name?: string;
        url?: string;
    }[]
}
type Props = {
    link: HeaderLinkType;
    path: string;
    setOpenDropdown: (v: number) => void;
    openDropdown?: number;
}
export const HeaderLink = ({ link, path, setOpenDropdown, openDropdown }: Props) => {
    return (
        <Stack key={link.id}>
            {link.url &&
                <Link passHref href={link.url ?? undefined} style={{ fontWeight: 500, fontSize: 16, cursor: 'pointer', textDecoration: 'none', }}>
                    <Stack sx={{ px: 1, position: 'relative', ':hover': { color: theme.palette.secondary.main } }}>
                        {link.name ?? <HomeOutlinedIcon fontSize={'large'} sx={{ width: 19, height: 19, display: { lg: 'flex', md: 'none', sm: 'none' } }} />}
                        {openDropdown !== link.id && path === link?.url && <Stack sx={{
                            position: 'absolute',
                            bottom: '-21px;',
                            left: 0,
                            height: '3px',
                            width: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            transition: 'background-color 0.3s ease',
                        }}></Stack>}
                    </Stack>
                </Link>}
            {!link.url &&
                <Stack
                    onClick={() => {
                        openDropdown ? setOpenDropdown(undefined) : setOpenDropdown(link.id)
                    }}
                    sx={{
                        fontWeight: 500, fontSize: 16, cursor: 'pointer', textDecoration: 'none',
                        position: 'relative',
                    }}>
                    <Stack direction={'row'} alignItems={'center'} sx={{ px: 1, color: openDropdown === link.id && theme.palette.secondary.main, ':hover': { color: theme.palette.secondary.main } }}>
                        {link.name}
                        {link.links && <KeyboardArrowDownIcon
                            sx={{ position: 'relative', top: 1, ml: .25, fontSize: '18px !important' }} />}
                    </Stack>
                    {path === link?.url && <Stack sx={{
                        position: 'absolute',
                        bottom: '-21px;',
                        left: 0,
                        height: '3px',
                        width: '100%',
                        backgroundColor: theme.palette.secondary.main,
                        transition: 'background-color 0.3s ease',
                    }}>
                    </Stack>}
                    {openDropdown === link.id && <Stack sx={{
                        position: 'absolute',
                        bottom: '-21px;',
                        left: 0,
                        height: '3px',
                        width: 'fit-content',
                        backgroundColor: theme.palette.secondary.main,
                        transition: 'background-color 0.3s ease',
                    }}>
                        <Stack sx={{ backgroundColor: '#fff', mt: '3px' }}>
                            {link.links.map((l) => {
                                return (
                                    <Stack key={l.id} sx={{ py: 1, px: 1, ':hover': { color: '#fff', backgroundColor: theme.palette.secondary.main } }}>
                                        <Link passHref href={l.url} style={{ fontWeight: 500, fontSize: 16, cursor: 'pointer', textDecoration: 'none', }}>
                                            {l.name}
                                        </Link>
                                    </Stack>
                                )
                            })}
                        </Stack>
                    </Stack>}
                </Stack>
            }
        </Stack>
    )
}