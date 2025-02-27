import { theme } from '@/COMPONENTS/common/shared/Theme'
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

type Props = {
    form: any;
    activeStep: number;
    countriesData: CountriesResponseType;
    validateForm?: () => Promise<boolean>
}

const OfferSummary = ({ validateForm, form, countriesData, activeStep }: Props) => {
    const [edit, setEdit] = useState(false)

    const togglePopUp = () => {
        setEdit(!edit)
    }
    const standardBox = form.watch('standardBox') ?? 0
    const largeBox = form.watch('largeBox') ?? 0
    const suitcaseSmall = form.watch('suitcaseSmall') ?? 0
    const suitcaseLarge = form.watch('suitcaseLarge') ?? 0
    const hasItems = (standardBox + largeBox + suitcaseSmall + suitcaseLarge) > 0
    const customItems = form.watch('customItems')
    const commonItems = form.watch('commonItems')
    const collectionDate = form.watch('collectionDate') ?? undefined
    const deliverBoxesDate = form.watch('deliverBoxesDate') ?? undefined
    const emptyBoxesQuantity = form.watch('emptyBoxesQuantity')
    console.log(form.getValues(), 'lala');

    const groupedCustomItems = customItems?.reduce((acc, item) => {
        const key = item.slug; // Group items based on 'slug'

        if (!acc[key]) {
            acc[key] = { ...item, quantity: item.quantity || 1 };
        } else {
            acc[key].quantity += item.quantity || 1;
        }

        return acc;
    }, {} as Record<string, typeof customItems[number]>);
    const groupedCommonItems = commonItems?.reduce((acc, item) => {
        const key = item.slug; // Group items based on 'slug'

        if (!acc[key]) {
            acc[key] = { ...item, quantity: item.quantity || 1 };
        } else {
            acc[key].quantity += item.quantity || 1;
        }

        return acc;
    }, {} as Record<string, typeof commonItems[number]>);

    const commonItemsSummary = groupedCustomItems && Object?.values(groupedCustomItems) as any;
    const customItemsSummary = groupedCommonItems && Object?.values(groupedCommonItems) as any;

    return (
        <>
            <Box flex={1} display="flex" flexDirection="column" gap={2}
                sx={{ width: '100%' }}
            >
                <Card elevation={0} sx={{ backgroundColor: '#fff', border: '1px solid rgba(0, 0, 0, 0.12)', px: 3, pt: 1.4, pb: 3 }}>
                    <Stack direction={'row'} sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                    }}>
                        <Typography color={'primary'} variant="subtitle2" sx={{ pb: 0 }}>
                            SUMMARY
                        </Typography>
                        <Button
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
                                fontWeight: 500,
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
                            endIcon={<BorderColorRoundedIcon fontSize='small' />}
                            color="secondary"
                        >
                            Edit
                        </Button>

                    </Stack>
                    <Stack spacing={1} pt={2}>
                        {
                            activeStep > 0 &&
                            <>
                                {(form.getValues('fullName')) && <Box>
                                    <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                        Name & Surname:
                                    </Typography>
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('fullName')}
                                    </Typography>
                                </Box>}

                                {form.getValues('email') &&
                                    <Box>
                                        <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                            Email:
                                        </Typography>
                                        <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                            {form.getValues('email')}
                                        </Typography>
                                    </Box>}

                                {form.getValues('phone') &&
                                    <Box>
                                        <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                            Telephone:
                                        </Typography>
                                        <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                            {form.getValues('countryCode')}{form.getValues('phone')}
                                        </Typography>
                                    </Box>}


                            </>}

                        {!!collectionDate &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Collection date:
                                </Typography>

                                {!!collectionDate &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {formatDate(collectionDate)}
                                    </Typography>}
                            </Box>}
                        {/* collect from */}
                        {form.getValues('collectCountry') &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Collect from:
                                </Typography>
                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('collectCountry')}, {form.getValues('collectCity')}
                                </Typography>
                                {form.getValues('collectPostcode') &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('collectPostcode')}
                                    </Typography>}
                            </Box>}


                        {/* deliver to */}
                        {form.getValues('deliverCountry') &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Deliver to:
                                </Typography>
                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('deliverCountry')}, {form.getValues('deliverCity')}
                                </Typography>
                                {form.getValues('deliverPostcode') &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('deliverPostcode')}
                                    </Typography>}
                            </Box>}

                        {/* boxes */}
                        {hasItems &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Boxes & Luggage:
                                </Typography>
                                {!!standardBox &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Standard Box  <span style={{ color: theme.palette.secondary.main }}>x {standardBox}</span>
                                    </Typography>}
                                {!!largeBox &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Large Box  <span style={{ color: theme.palette.secondary.main }}>x {largeBox}</span>
                                    </Typography>}
                                {!!suitcaseSmall &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Suitcase Small  <span style={{ color: theme.palette.secondary.main }}>x {suitcaseSmall}</span>
                                    </Typography>}
                                {!!suitcaseLarge &&
                                    <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Suitcase Large  <span style={{ color: theme.palette.secondary.main }}>x {suitcaseLarge}</span>
                                    </Typography>}
                            </Box>}
                        {customItemsSummary?.length > 0 &&
                            <Box>
                                {!!customItemsSummary?.[0]?.name &&
                                    <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                        Your Items:
                                    </Typography>}
                                {customItemsSummary?.map((ci, i) => {
                                    return (
                                        <Box key={ci.name + i} pb={1}>
                                            {ci.name &&
                                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.1, fontWeight: 500 }}>
                                                    {/* {i + 1}.  */}
                                                    {ci.name} <span style={{ color: theme.palette.secondary.main }}>x {ci.quantity ?? 1}</span>
                                                </Typography>}
                                            {(ci.width ?? ci.height ?? ci.depth) &&
                                                <Typography color={'primary'} variant="caption" sx={{ lineHeight: 1, fontSize: 14, fontWeight: 500 }}>
                                                    {ci.width ?? 0} x {ci.height ?? 0} x {ci.depth ?? ci.length ?? 0} cm,   {ci.weight ?? 0} kg
                                                </Typography>}
                                            {/* {ci.weight && <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.3, fontSize: 14, fontWeight: 500 }}>
                                                {ci.weight ?? 0} kg
                                            </Typography>} */}
                                        </Box>
                                    )
                                })}
                            </Box>}
                        {commonItemsSummary?.length > 0 &&
                            <Box>
                                {!!commonItemsSummary?.[0]?.name &&
                                    <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                        Furniture and Appliances:
                                    </Typography>}
                                {commonItemsSummary?.map((ci, i) => {
                                    return (
                                        <Box key={ci.name + i} pb={1}>
                                            {ci.name &&
                                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.1, fontWeight: 500 }}>
                                                    {/* {i + 1}.  */}
                                                    {ci.name} <span style={{ color: theme.palette.secondary.main }}>x {ci.quantity ?? 1}</span>
                                                </Typography>}
                                            {(ci.width ?? ci.height ?? ci.depth) &&
                                                <Typography color={'primary'} variant="caption" sx={{ lineHeight: 1, fontSize: 14, fontWeight: 500 }}>
                                                    {ci.width ?? 0} x {ci.height ?? 0} x {ci.depth ?? ci.length ?? 0} cm,    {ci.weight ?? 0} kg
                                                </Typography>}
                                            {/* {ci.weight && <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.1, fontSize: 14, fontWeight: 500 }}>
                                                {ci.weight ?? 0} kg
                                            </Typography>} */}
                                        </Box>
                                    )
                                })}
                            </Box>}


                        {!!emptyBoxesQuantity &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Number of empty boxes:
                                </Typography>
                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    x {emptyBoxesQuantity}
                                </Typography>

                            </Box>}
                        {!!deliverBoxesDate &&
                            <Box>
                                <Typography color={'primary'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Delivery of empty boxes:
                                </Typography>
                                <Typography color={'primary'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {formatDate(deliverBoxesDate)}
                                </Typography>
                            </Box>}


                    </Stack>
                </Card>
            </Box>
            {edit && <OfferSummaryFormCard validateForm={validateForm} countriesData={countriesData} showPopUp={edit} togglePopUp={togglePopUp} form={form} />}
        </>
    )
}

export default OfferSummary
