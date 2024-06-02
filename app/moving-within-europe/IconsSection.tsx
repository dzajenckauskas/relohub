import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    backgroundColor?: string;
    color?: string;
    align?: string;
    textAlign?: any;
    content: {
        title: string;
        text: string;
        icon: string;
    }[];
}

const IconsSection = ({ content, title, backgroundColor, color, align, textAlign }: Props) => {
    const renderList = content.map((c, i) => {
        return (
            <Grid key={i} item lg={2} md={4} sm={6} xs={12}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: align ?? 'center' }} width={'100%'}>
                <Image
                    src={`/icons/${c.icon}`}
                    alt={c.title}
                    priority
                    width={50}
                    height={50}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: 'contain'
                    }}
                />
                <Typography variant='subtitle2' textAlign={'center'} color={color ?? '#fff'}
                    fontWeight={600} lineHeight={1.2} pt={2} pb={1}>
                    {c.title}
                </Typography>
                <Typography textAlign={textAlign ?? 'center'} color={color ?? '#fff'} lineHeight={1.2}>
                    {c.text}
                </Typography>
            </Grid>
        )
    })
    return (
        <Stack sx={{ backgroundColor: backgroundColor ?? theme.palette.secondary.main }}>
            <MaxWidthContainer>
                <Stack py={8} pb={10} justifyContent={'center'} width={'100%'}>
                    <Typography variant='h2' component={'h2'} textAlign={textAlign ?? 'center'} color={color ?? '#fff'} pb={2}>
                        {title}
                    </Typography>
                    <Grid container flexDirection={'row'} pt={4} spacing={4}>
                        {renderList}
                    </Grid>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default IconsSection
