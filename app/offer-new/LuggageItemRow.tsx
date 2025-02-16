import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import QuantityButtons from "./QuantityButtons";
import { CustomItemType } from "./OfferNewPage";

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
}

const LuggageItemRow = ({ detailsColumn, form, dimensions, maxWeight, primaryText, secondaryText, name, imgSrc, onIncrease, onDecrease, item, quantity }: Props) => {

    return (
        <>
            <Stack direction={'row'} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1,
                // px: 2
            }}>
                <Stack direction={'row'}
                    gap={1}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    {/* <Stack>
                        <Inventory2Icon sx={{ fontSize: 62 }} />
                    </Stack> */}
                    {imgSrc && (
                        <Stack sx={{ position: 'relative', mt: -1, bottom: -1, right: 0, width: 40, height: 40 }}>
                            <Image
                                alt="background"
                                src={imgSrc}
                                style={{ objectFit: "contain" }}
                                fill
                                sizes="40px"
                            />
                        </Stack>
                    )}

                    <Stack sx={{ width: { xs: '100px', md: '140px' } }}>

                        <Typography variant='subtitle2' sx={{
                            fontWeight: 600,
                            lineHeight: 1.2, maxWidth: 140, width: '100%'
                        }}>
                            {primaryText}
                            {secondaryText && <br />}
                            {secondaryText}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={detailsColumn ? 'column' : { xs: 'column', md: 'row' }}>
                    <Stack sx={{ width: { xs: '100px', md: '160px' } }}>
                        <Typography variant='body2' sx={{
                            fontWeight: 500,
                            fontSize: { xs: 14, md: 16 }
                        }}>
                            {dimensions}
                        </Typography>
                    </Stack>
                    <Stack sx={{ width: { xs: '100px', md: '100px' } }}>
                        <Typography variant='body2' sx={{
                            fontWeight: 500,
                            fontSize: { xs: 14, md: 16 }
                        }}>
                            Max {maxWeight}Kg
                        </Typography>
                    </Stack>
                </Stack>

                <Stack sx={{ width: '140px' }}>
                    <QuantityButtons form={form} name={name} onIncrease={onIncrease} onDecrease={onDecrease} item={item} quantity={quantity} />
                </Stack>
            </Stack>

        </>

    )
}

export default LuggageItemRow
