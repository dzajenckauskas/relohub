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
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    content: {
        title: string;
        text: string;
        icon: string;
    }[];
}

const IconsSection = ({ content, title, backgroundColor, color, align, textAlign, lg, md, sm, xs }: Props) => {
    const renderList = content.map((c, i) => {
        return (
            <Grid key={i} item lg={lg ?? 2} md={md ?? 4} sm={sm ?? 6} xs={xs ?? 12}
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
                <Typography variant='subtitle2' textAlign={textAlign ?? 'center'} maxWidth={textAlign ?? { xs: '70%', lg: '100%' }}
                    color={color ?? '#fff'}
                    fontWeight={600} lineHeight={1.2} pt={2} pb={.5}>
                    {c.title}
                </Typography>
                <Typography textAlign={textAlign ?? 'center'} color={color ?? '#fff'} maxWidth={textAlign ? { xs: '90%', lg: '100%' } : { xs: '60%', lg: '80%' }} lineHeight={1.2}>
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
                    <Grid container flexDirection={'row'} pt={4} spacing={textAlign ? 6 : 0} rowSpacing={{ xs: 6 }}>
                        {renderList}
                    </Grid>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default IconsSection
