'use client'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TextField, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Image from "next/image"
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { CountriesResponseType } from '../types/CountryType'
import { MaxWidthContainer } from './MaxWidthContainer'
import { theme } from './shared/Theme'
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react'
import useAxios from 'axios-hooks';
import { throttle } from 'lodash'
import CloseIcon from '@mui/icons-material/Close';

type Props = {
}

export const CountriesDropdownList = ({ }: Props) => {

    const params = useParams()
    const router = useRouter()
    const GroupHeader = styled('div')(({ theme }) => ({
        padding: '4px 14px',
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        width: 56,
        marginLeft: 16,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: theme.palette.secondary.main
    }));

    const GroupItems = styled('ul')({
        padding: 0,

    });

    const [input, setInput] = useState('');
    const setThrottledInput = throttle(setInput, 300, { leading: false })
    const [open, setOpen] = useState(false);

    const [{ data, loading: listLoading, error }, get] = useAxios<CountriesResponseType>(
        {
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100&sort[0]=name:asc`
        },
        {
            useCache: false,
            manual: true,
        }
    );

    useEffect(() => {
        if (!open) {
        } else {
            (async () => {
                try {
                    await get();
                } catch (err) {
                    console.log(err);
                }
            })()
        }
        return () => {
        }
    }, [open, get, input]);

    return (
        <Stack sx={{ backgroundColor: theme.palette.secondary.main, py: 3, pb: { xs: 4, sm: 6, md: 3 } }}>
            <MaxWidthContainer>
                <Stack direction={{ xs: 'column', md: 'row' }} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography color={"#fff"} variant='subtitle1' pb={{ xs: 2, md: 0 }}>
                        <b>Select Country</b> that you are moving to:
                    </Typography>
                    <Autocomplete
                        open={open}
                        popupIcon={<ArrowDropDownIcon sx={{ fontSize: 30 }} />}
                        clearIcon={<CloseIcon sx={{ fontSize: 20 }} />}
                        disablePortal
                        getOptionLabel={(option) => option?.attributes?.name}
                        id="combo-box-demo"
                        options={data?.data ?? []}
                        sx={{ maxWidth: { lg: 596, md: 552, sm: 596, }, width: '100%' }}
                        groupBy={(option) => option?.attributes?.name?.[0]}
                        renderInput={(params) => <TextField helperText={error?.message} sx={{ backgroundColor: '#fff !important', borderRadius: 1 }}
                            color='info' placeholder='Please select' {...params} />}
                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                        onOpen={(_e) => {
                            setOpen(true);
                            setThrottledInput('')
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        onInputChange={(event, newInputValue) => {
                            if (event?.type === 'change') {
                                setThrottledInput(newInputValue)
                            }
                        }}
                        onChange={(e: any, option) => {
                            if (e.key === 'Enter') {
                                router.push(`/moving-to/${option.attributes.url}`)
                            }
                        }}
                        loading={listLoading}
                        renderOption={(props, option) => {
                            return (
                                <li {...props}
                                    onClick={(_e: any) => {
                                        router.push(`/moving-to/${option.attributes.url}`)
                                    }}
                                    style={{ borderBottom: '1px solid #EBEBEB', paddingTop: 8, paddingBottom: 8, width: '94%', margin: '0 auto' }}>
                                    <Link passHref key={option.id} href={`/moving-to/${option.attributes.url}`} style={{ width: '100%' }}>
                                        <Stack
                                            direction={'row'} alignItems={'center'} spacing={1} sx={{ width: '100%' }}>
                                            <Image
                                                loading="lazy"
                                                width={24}
                                                height={16}
                                                style={{ objectFit: "contain" }}
                                                src={`https://flagcdn.com/40x30/${option.attributes.iso2.toLowerCase()}.png`}
                                                alt={`${option.attributes.iso2} flag`}
                                            />
                                            <Typography key={option.id}>
                                                {option.attributes.name}
                                            </Typography>
                                        </Stack>
                                    </Link>
                                </li>
                            )
                        }}
                    />
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}