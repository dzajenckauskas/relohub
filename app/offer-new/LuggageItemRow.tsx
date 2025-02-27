import { Box, Divider, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import { CustomItemType } from "./OfferNewPage";
import QuantityButtons from "./QuantityButtons";

type Props = {
    form: any;
    dimensions: string;
    maxWeight: string;
    primaryText?: string;
    secondaryText?: string;
    name: string;
    imgSrc?: string;
    onIncrease?: (item: CustomItemType) => void;
    onDecrease?: (item: CustomItemType) => void;
    item?: CustomItemType
    quantity?: number;
    detailsColumn?: boolean;
    isLastItem?: boolean;
    rowNo?: number;
}

const LuggageItemRow = ({ isLastItem, rowNo, detailsColumn, form, dimensions, maxWeight, primaryText, secondaryText, name, imgSrc, onIncrease, onDecrease, item, quantity }: Props) => {

    return (
        <>
            <Stack direction={'row'} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1,
                // px: 2
            }}>
                <Stack gap={{ xs: 0, sm: 10, md: 0 }} direction={{ xs: 'column', sm: 'row' }}>
                    <Stack direction={'row'}
                        gap={1}
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Stack
                            direction={'row'}
                            sx={{ width: { xs: '100%', sm: '140px' } }}
                        >

                            <Typography variant='subtitle2' sx={{
                                fontWeight: 600,
                                lineHeight: 1, minWidth: { xs: '100%', sm: 140 }, width: '100%'
                            }}>
                                {primaryText}{' '}
                                {secondaryText && <Box sx={{ display: { xs: 'none', sm: 'flex' } }}></Box>}
                                {secondaryText}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'100%'} pt={{ xs: .5, sm: 0 }} direction={{ xs: 'column', sm: 'column' }}>
                        <Stack sx={{ width: { xs: '100%', sm: '100px' } }}>
                            <Typography variant='body2' sx={{
                                fontWeight: 500,
                                fontSize: { xs: 12, sm: 14 },
                                lineHeight: { xs: 1.1, sm: 1.2 }
                            }}>
                                {dimensions}
                            </Typography>
                        </Stack>
                        <Stack sx={{ width: { xs: '100%', sm: '100px' } }}>
                            <Typography variant='body2' sx={{
                                fontWeight: 500,
                                fontSize: { xs: 12, sm: 14 },
                                lineHeight: { xs: 1.1, sm: 1.2 }
                            }}>
                                max {maxWeight}kg
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack sx={{ width: '140px' }}>
                    <QuantityButtons form={form} name={name} onIncrease={onIncrease} onDecrease={onDecrease} item={item} quantity={quantity} />
                </Stack>
            </Stack>
            <Divider sx={{ opacity: isLastItem ? 0 : 1 }} />
        </>

    )
}

export default LuggageItemRow
