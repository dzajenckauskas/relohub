import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import { SectionType } from '@/COMPONENTS/types/CountryType'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {
    listSection?: SectionType;
    title?: string;
    subtitle?: string;
    content?: {
        title: string;
        text: string;
    }[]
}

const ListSection = ({ content, subtitle, title, listSection }: Props) => {
    const renderList = content?.map((c, i) => {
        const isLast = content?.length - 1 === i
        return (
            <Stack key={i} direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                sx={{ borderBottom: isLast ? 'none' : '1px solid #c2c2c2', pb: 3 }}>
                <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main}
                    sx={{ width: { sm: '60%', xs: '100%' }, fontWeight: 500 }}>
                    {c.title}
                </Typography>
                <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                    {c.text}
                </Typography>
            </Stack>
        )
    })
    const renderListSection = listSection?.sectionCards?.map((c, i) => {
        const isLast = listSection?.sectionCards?.length - 1 === i
        return (
            <Stack key={i} direction={{ sm: 'row', xs: 'column' }} gap={{ sm: 4, xs: 1 }}
                sx={{ borderBottom: isLast ? 'none' : '1px solid #c2c2c2', pb: 3 }}>
                <Typography variant='h5' component={'h5'} color={theme.palette.secondary.main}
                    sx={{ width: { sm: '60%', xs: '100%' }, fontWeight: 500 }}>
                    {c.title}
                </Typography>
                <Typography variant='body1' sx={{ width: { sm: '75', xs: '100%' } }}>
                    {c.shortContent}
                </Typography>
            </Stack>
        )
    })
    return (
        <Stack sx={{ backgroundColor: '#ededed' }}>
            <MaxWidthContainer>
                <Stack py={6} gap={{ sm: 6, xs: 2 }} width={'100%'} direction={{ md: 'row', xs: 'column' }}>
                    <Stack width={{ md: '60%', xs: '100%' }}>
                        <Typography variant='h2' component={'h2'} minWidth={'100%'}>
                            {listSection?.sectionTitle ?? title}
                        </Typography>
                        {(listSection?.sectionSubtitle ?? subtitle) &&
                            <Typography variant='body1' pt={1}>
                                {listSection?.sectionSubtitle ?? subtitle}
                            </Typography>}
                    </Stack>
                    <Stack spacing={3} pt={1} width={{ md: '100%', xs: '100%' }}>
                        {listSection ? renderListSection : renderList}
                    </Stack>
                </Stack>
            </MaxWidthContainer>
        </Stack>
    )
}

export default ListSection
