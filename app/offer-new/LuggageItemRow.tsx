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
}

const LuggageItemRow = ({ form, dimensions, maxWeight, primaryText, secondaryText, name, imgSrc, onIncrease, onDecrease, item, quantity }: Props) => {

    return (
        <>
            <Stack direction={'row'} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1
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
                    {imgSrc &&
                        <Stack sx={{ position: 'relative', mt: -1, bottom: -1, right: 0, width: 40, height: 40 }}>
                            <Image
                                alt="background"
                                src={imgSrc}
                                objectFit="contain"
                                fill
                            />
                        </Stack>}
                    <Stack>

                        <Typography variant='subtitle2' sx={{
                            fontWeight: 600,
                            lineHeight: 1.2, maxWidth: 140, width: '100%'
                        }}>
                            {primaryText}
                            {secondaryText && <br />}
                            {secondaryText}
                        </Typography>
                        {/* {text &&
                            <Typography variant='subtitle2' sx={{
                                fontWeight: 600,
                                lineHeight: 1.2, maxWidth: 100
                            }}>
                                {text}
                            </Typography>} */}
                    </Stack>
                </Stack>
                <Stack>
                    <Typography variant='body1' sx={{
                        fontWeight: 500
                    }}>
                        {dimensions}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant='body1' sx={{
                        fontWeight: 500
                    }}>
                        Max {maxWeight}Kg
                    </Typography>
                </Stack>


                <QuantityButtons form={form} name={name} onIncrease={onIncrease} onDecrease={onDecrease} item={item} quantity={quantity} />
            </Stack>

        </>

    )
}

export default LuggageItemRow
