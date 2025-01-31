import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';


type Props = {
    form: any;
    activeStep: number;
}

const OfferSummary = ({ form, activeStep }: Props) => {
    return (
        <Box flex={1} display="flex" flexDirection="column" gap={2}
            sx={{ width: '100%' }}
        // sx={{ p: 3 }}
        >
            <Card sx={{ backgroundColor: 'black', px: 3, py: 2 }}>
                <Stack direction={'row'} sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center', borderBottom: '1px solid gray'
                }}>
                    <Typography color={'white'} variant="subtitle2">
                        SUMMARY
                    </Typography>
                    <Button sx={{
                        textTransform: 'none'
                    }} endIcon={<BorderColorRoundedIcon />} color="secondary">
                        Edit
                    </Button>
                </Stack>
                <Stack spacing={2} pt={2}>
                    {activeStep == 1 && <>
                        {(form.getValues('firstName') || form.getValues('lastName')) && <Box>
                            <Typography color={'white'} variant="subtitle1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                Name & Surname:
                            </Typography>
                            <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                {form.getValues('firstName')} {form.getValues('lastName')}
                            </Typography>
                        </Box>}

                        {form.getValues('email') &&
                            <Box>
                                <Typography color={'white'} variant="subtitle1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                    Email:
                                </Typography>
                                <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('email')}
                                </Typography>
                            </Box>}

                        {form.getValues('phone') &&
                            <Box>
                                <Typography color={'white'} variant="subtitle1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                    Telephone:
                                </Typography>
                                <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('phone')}
                                </Typography>
                            </Box>}


                    </>}


                    {/* collect from */}
                    <Box>
                        <Typography color={'white'} variant="subtitle1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                            Collect from:
                        </Typography>
                        <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                            {form.getValues('collectCountry')}, {form.getValues('collectCity')}
                        </Typography>
                        {form.getValues('collectPostcode') &&
                            <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                {form.getValues('collectPostcode')}
                            </Typography>}
                    </Box>


                    {/* deliver to */}
                    <Box>
                        <Typography color={'white'} variant="subtitle1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                            Deliver to:
                        </Typography>
                        <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                            {form.getValues('deliverCountry')}, {form.getValues('deliverCity')}
                        </Typography>
                        {form.getValues('deliverPostcode') &&
                            <Typography color={'white'} variant="subtitle1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                {form.getValues('deliverPostcode')}
                            </Typography>}
                    </Box>
                </Stack>
            </Card>
        </Box>
    )
}

export default OfferSummary
