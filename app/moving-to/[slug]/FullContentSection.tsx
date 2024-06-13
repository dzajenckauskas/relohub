import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react'

type Props = {
    fullContent: string;
}

const FullContentSection = ({ fullContent }: Props) => {
    return (
        <>
            {
                fullContent &&
                <MaxWidthContainer sx={{ py: { xs: 4, md: 8 }, flexDirection: 'column', }}>
                    <Stack sx={{ maxWidth: 'md', }}>
                        <Typography component={'div'} className='dynamicContent' dangerouslySetInnerHTML={{ __html: fullContent }} />
                    </Stack>
                </MaxWidthContainer>
            }
        </>
    )
}

export default FullContentSection
