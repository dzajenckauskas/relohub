import { formatDate } from '@/COMPONENTS/common/shared/formatDate'
import { CountriesResponseType } from '@/COMPONENTS/types/CountryType'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import OfferSummaryFormCard from './OfferSummaryFormCard'
import ErrorMessage from './steps/ErrorMessage'
import Link from 'next/link'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'


type Props = {
    form: any;
    activeStep: number;
    countriesData?: CountriesResponseType;
    validateForm?: () => Promise<boolean>
    nextStep?: () => void;
    onClick?: () => void;
    error?: string;
    selected?: boolean;
    paymentbuttonenabled?: boolean;
    loading?: boolean;
    orderCompleted?: boolean;
    showstripepopup?: boolean;
    setorderCompleted?: (v: boolean) => void;
    onClickPay?: () => void;
}

const OfferSummaryBottomLine = ({ onClickPay, loading, paymentbuttonenabled, selected, showstripepopup, setorderCompleted, orderCompleted, onClick, error, validateForm, form, countriesData, activeStep, nextStep }: Props) => {
    const [edit, setEdit] = useState(false)

    const togglePopUp = () => {
        setEdit(!edit)
    }
    const hasErrors = Object.keys(form.formState.errors).length > 0;

    const collectionDate = form.watch('collectionDate') ?? undefined
    return (
        <>
            {<Box
                sx={{ width: '100%' }}
            >
                <Card sx={{ backgroundColor: '#252420', borderRadius: 0 }}>
                    <MaxWidthContainer>

                        <Stack direction={'row'} width={'100%'}
                            alignItems={'center'} alignContent={'center'}
                            justifyContent={{ xs: 'center', sm: 'space-between' }}
                            spacing={1} py={2}>
                            {activeStep !== 2 &&
                                <Stack spacing={6} direction={'row'} display={{ xs: 'none', sm: 'flex' }}>

                                    <Stack spacing={1}>
                                        {/* collect from */}
                                        <Box>
                                            <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                Collect from:
                                            </Typography>
                                            {(form.getValues('collectCountry') && form.getValues('collectCity')) ?
                                                <Stack direction={'row'}>
                                                    <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                        {form.getValues('collectCountry')}, {form.getValues('collectCity')}
                                                    </Typography>
                                                    {form.getValues('collectPostcode') &&
                                                        <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                            {`, ${form.getValues('collectPostcode')}`}
                                                        </Typography>}
                                                </Stack> :
                                                <ErrorMessage message='Check form for errors' />
                                            }
                                        </Box>


                                        {/* deliver to */}
                                        <Box>
                                            <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                Deliver to:
                                            </Typography>
                                            {(form.getValues('deliverCountry') && form.getValues('deliverCity')) ? <Stack direction={'row'}>
                                                <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                    {form.getValues('deliverCountry')}, {form.getValues('deliverCity')}
                                                </Typography>
                                                {form.getValues('deliverPostcode') &&
                                                    <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                        {`, ${form.getValues('deliverPostcode')}`}
                                                    </Typography>}
                                            </Stack> : <ErrorMessage message='Check form for errors' />}
                                        </Box>
                                    </Stack>

                                    {
                                        activeStep > 0 &&
                                        <Stack direction={'row'} spacing={6}>
                                            <Stack spacing={1}>
                                                <Box>

                                                    <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                        Name & Surname:
                                                    </Typography>
                                                    {(form.getValues('fullName')) ?
                                                        <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                            {form.getValues('fullName')}
                                                        </Typography>
                                                        : <ErrorMessage message='Check form for errors' />}
                                                </Box>

                                                <Box>
                                                    <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                        Email:
                                                    </Typography>
                                                    {form.getValues('email') ?
                                                        <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                            {form.getValues('email')}
                                                        </Typography>
                                                        : <ErrorMessage message='Check form for errors' />}
                                                </Box>
                                            </Stack>

                                            <Stack spacing={1}>
                                                <Box>
                                                    <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                        Telephone:
                                                    </Typography>
                                                    {form.getValues('phone') ?
                                                        <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                            {form.getValues('dialCode')}{form.getValues('phone')}
                                                        </Typography>
                                                        : <ErrorMessage message='Check form for errors' />}
                                                </Box>
                                                {/* {!!collectionDate && */}
                                                <Box>
                                                    <Typography color={'white'} variant="body2" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                                        Collection date:
                                                    </Typography>

                                                    {!form.formState.errors.collectionDate ?
                                                        <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                                            {formatDate(collectionDate)}
                                                        </Typography> : <ErrorMessage message='Check form for errors' />}
                                                </Box>
                                            </Stack>

                                        </Stack>}





                                </Stack>}

                            {!orderCompleted && activeStep == 2 && <Stack spacing={4} pt={2} direction={'row'} display={{ xs: 'none', sm: 'flex' }}>
                                <Typography color={'white'} variant="body2">
                                    <b>To book, we only require a £100 deposit</b>, whitch will be deducted from the final invoice.
                                </Typography>
                            </Stack>}
                            {orderCompleted && activeStep == 2 && <Stack spacing={4} pt={2} direction={'row'} display={{ xs: 'none', sm: 'flex' }}>
                                {/* <Typography color={'white'} variant="body2">
                                <b>To book, we only require a £100 deposit</b>, whitch will be deducted from the final invoice.
                            </Typography> */}
                            </Stack>}
                            {/* <Stack direction={'row'} sx={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        // justifyContent: 'space-between',
                        alignItems: 'center', borderBottom: '1px solid gray'
                    }}> */}
                            {/* <Typography color={'white'} variant="subtitle2">
                            SUMMARY
                        </Typography> */}
                            <Stack direction={'column'}>
                                <Stack direction={'row'} alignItems={"center"} gap={3} alignContent={'center'}>
                                    {activeStep !== 2 && <Button
                                        disableElevation
                                        disableFocusRipple
                                        disableRipple
                                        disableTouchRipple
                                        // variant='outlined'
                                        onClick={() => {
                                            console.log(edit, 'EDIT');
                                            togglePopUp();
                                        }}
                                        sx={{
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'transparent', // Disable hover effect
                                            },
                                            '&:active': {
                                                backgroundColor: 'transparent', // Disable active (click) effect
                                            },
                                            '&:focus': {
                                                outline: 'none', // Optionally remove focus outline as well
                                            },
                                        }}
                                        endIcon={<BorderColorRoundedIcon />}
                                        color="secondary"
                                    >
                                        Edit
                                    </Button>}

                                    <Box>
                                        {!orderCompleted && activeStep == 0 &&
                                            <Button onClick={nextStep} variant="contained" color="secondary"
                                                sx={{ px: 6, py: 2 }}>
                                                Next step
                                            </Button>}
                                        {!orderCompleted && activeStep == 1 &&
                                            <Button type={'submit'} variant="contained" color="secondary"
                                                sx={{ px: 6, py: 2 }}>
                                                Next step
                                            </Button>}
                                        {!showstripepopup && !orderCompleted && activeStep == 2 &&
                                            <Button disabled={!selected} onClick={onClick} variant="contained" color="secondary"
                                                sx={{ px: 6, py: 2 }}>
                                                Pay deposit using stripe
                                            </Button>}
                                        {showstripepopup && !orderCompleted && activeStep == 2 &&
                                            <Button disabled={loading || !paymentbuttonenabled} onClick={onClickPay} variant="contained" color="secondary"
                                                sx={{ px: 6, py: 2 }}>
                                                {loading ? "Loading..." : 'Pay deposit now'}
                                            </Button>}
                                        {orderCompleted &&
                                            <Link passHref href={'/'}>
                                                <Button onClick={() => {
                                                    setTimeout(() => {
                                                        setorderCompleted(false)
                                                    }, 100)
                                                }} variant="contained" color="secondary"
                                                    sx={{ px: 6, py: 2 }}>
                                                    Back to main
                                                </Button>
                                            </Link>
                                        }
                                    </Box>

                                </Stack>
                                {(error || hasErrors || form.formState?.errors?.hasItemsAdded) &&
                                    <Stack direction={'column'} width={'100%'} alignItems={'flex-end'} pt={.5}>
                                        {(!form.formState?.errors?.hasItemsAdded && hasErrors) && <ErrorMessage message={'Check form for errors'} />}
                                        {!!error && <ErrorMessage message={error} />}
                                        {activeStep == 1 && form.formState?.errors?.hasItemsAdded && (
                                            <ErrorMessage message={form.formState?.errors?.hasItemsAdded.message} />)}
                                    </Stack>}
                            </Stack>

                        </Stack>


                    </MaxWidthContainer>

                </Card>
            </Box>}
            {edit && <OfferSummaryFormCard validateForm={validateForm} countriesData={countriesData} showPopUp={edit} togglePopUp={togglePopUp} form={form} />}
        </>

    )
}

export default OfferSummaryBottomLine
