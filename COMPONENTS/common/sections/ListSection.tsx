import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {
    title: string;
    content: {
        title: string;
        text: string;
    }[]
}

const ListSection = ({ content, title }: Props) => {
    const renderList = content?.map((c, i) => {
        const isLast = content.length - 1 === i
        return (
            <Stack key={i} direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                sx={{ borderBottom: isLast ? 'none' : '1px solid #c2c2c2', pb: 2 }}>
                <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main} sx={{ width: { sm: '60%', xs: '100%' }, fontWeight: 500 }}>
                    {c.title}
                </Typography>
                <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                    {c.text}
                </Typography>
            </Stack>
        )
    })
    return (
        <Stack sx={{ backgroundColor: '#ededed' }}>
            <MaxWidthContainer>
                <Stack py={5} gap={{ sm: 6, xs: 4 }} direction={{ md: 'row', xs: 'column' }}>
                    <Typography variant='h2' component={'h2'} width={{ md: '60%', xs: '100%' }}>
                        {title}
                    </Typography>
                    <Stack spacing={2} pt={1} width={{ md: '100%', xs: '100%' }}>
                        {renderList}
                    </Stack>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default ListSection
