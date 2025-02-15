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
}

const OfferSummary = ({ form, countriesData }: Props) => {
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

    // console.log(collectionDate, "collectionDate");

    return (
        <>
            <Box flex={1} display="flex" flexDirection="column" gap={2}
                sx={{ width: '100%' }}
            >
                <Card sx={{ backgroundColor: '#252420', px: 3, py: 2, pb: 3 }}>
                    <Stack direction={'row'} sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center', borderBottom: '1px solid gray'
                    }}>
                        <Typography color={'white'} variant="subtitle2">
                            SUMMARY
                        </Typography>
                        <Button
                            onClick={togglePopUp}
                            sx={{
                                textTransform: 'none'
                            }} endIcon={<BorderColorRoundedIcon />} color="secondary">
                            Edit
                        </Button>
                    </Stack>
                    <Stack spacing={1} pt={2}>
                        {
                            // activeStep > 0 &&
                            <>
                                {(form.getValues('fullName')) && <Box>
                                    <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                        Name & Surname:
                                    </Typography>
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('fullName')}
                                    </Typography>
                                </Box>}

                                {form.getValues('email') &&
                                    <Box>
                                        <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                            Email:
                                        </Typography>
                                        <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                            {form.getValues('email')}
                                        </Typography>
                                    </Box>}

                                {form.getValues('phone') &&
                                    <Box>
                                        <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                            Telephone:
                                        </Typography>
                                        <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                            {form.getValues('phone')}
                                        </Typography>
                                    </Box>}


                            </>}


                        {/* collect from */}
                        {form.getValues('collectCountry') &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Collect from:
                                </Typography>
                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('collectCountry')}, {form.getValues('collectCity')}
                                </Typography>
                                {form.getValues('collectPostcode') &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('collectPostcode')}
                                    </Typography>}
                            </Box>}


                        {/* deliver to */}
                        {form.getValues('deliverCountry') &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Deliver to:
                                </Typography>
                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {form.getValues('deliverCountry')}, {form.getValues('deliverCity')}
                                </Typography>
                                {form.getValues('deliverPostcode') &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {form.getValues('deliverPostcode')}
                                    </Typography>}
                            </Box>}

                        {/* boxes */}
                        {hasItems &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Boxes & Luggage:
                                </Typography>
                                {!!standardBox &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Standard Box x {standardBox}
                                    </Typography>}
                                {!!largeBox &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Large Box x {largeBox}
                                    </Typography>}
                                {!!suitcaseSmall &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Suitcase Small x {suitcaseSmall}
                                    </Typography>}
                                {!!suitcaseLarge &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        Suitcase Large x {suitcaseLarge}
                                    </Typography>}
                            </Box>}
                        {customItems?.length > 0 &&
                            <Box>
                                {!!customItems?.[0]?.name &&
                                    <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                        Your Items:
                                    </Typography>}
                                {customItems?.map((ci, i) => {
                                    return (
                                        <Box key={ci.name} pb={.5}>
                                            {/* {standardBox && */}
                                            {ci.name &&
                                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.3, fontWeight: 500 }}>
                                                    {i + 1}. {ci.name}
                                                </Typography>}
                                            {(ci.width ?? ci.height ?? ci.debth) &&
                                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.3, fontSize: 14, fontWeight: 500 }}>
                                                    {ci.width ?? 0} x {ci.height ?? 0} x {ci.depth ?? 0} cm
                                                </Typography>}
                                            {ci.weight && <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.3, fontSize: 14, fontWeight: 500 }}>
                                                {ci.weight ?? 0} kg
                                            </Typography>}
                                        </Box>
                                    )
                                })}
                            </Box>}
                        {commonItems?.length > 0 &&
                            <Box>
                                {!!commonItems?.[0]?.name &&
                                    <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500 }}>
                                        Furniture and Appliances:
                                    </Typography>}
                                {commonItems?.map((ci, i) => {
                                    return (
                                        <Box key={ci.name} pb={.5}>
                                            {/* {standardBox && */}
                                            {ci.name &&
                                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.1, fontWeight: 500 }}>
                                                    {i + 1}. {ci.name}
                                                </Typography>}
                                            {(ci.width ?? ci.height ?? ci.debth) &&
                                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.1, fontSize: 14, fontWeight: 500 }}>
                                                    {ci.width ?? 0} x {ci.height ?? 0} x {ci.depth ?? 0} cm
                                                </Typography>}
                                            {ci.weight && <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.1, fontSize: 14, fontWeight: 500 }}>
                                                {ci.weight ?? 0} kg
                                            </Typography>}
                                        </Box>
                                    )
                                })}
                            </Box>}


                        {!!emptyBoxesQuantity &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Number of empty boxes:
                                </Typography>
                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    x {emptyBoxesQuantity}
                                </Typography>

                            </Box>}
                        {!!deliverBoxesDate &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Delivery of empty boxes:
                                </Typography>
                                <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                    {formatDate(deliverBoxesDate)}
                                </Typography>
                            </Box>}

                        {!!collectionDate &&
                            <Box>
                                <Typography color={'white'} variant="body1" sx={{ opacity: .6, lineHeight: 1.2, fontWeight: 500, pt: .5 }}>
                                    Collection date:
                                </Typography>

                                {!!collectionDate &&
                                    <Typography color={'white'} variant="body1" sx={{ lineHeight: 1.2, fontWeight: 500 }}>
                                        {formatDate(collectionDate)}
                                    </Typography>}
                            </Box>}
                    </Stack>
                </Card>
            </Box>
            {edit && <OfferSummaryFormCard countriesData={countriesData} showPopUp={edit} togglePopUp={togglePopUp} form={form} />}
        </>
    )
}

export default OfferSummary
