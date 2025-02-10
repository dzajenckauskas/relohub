import Inventory2Icon from '@mui/icons-material/Inventory2';
import { FormHelperText, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import QuantityButtons from "./QuantityButtons";


type Props = {
    form: any;
    dimensions: string;
    maxWeight: string;
    primaryText: string;
    secondaryText: string;
    name: string;
}

const LuggageItemRow = ({ form, dimensions, maxWeight, primaryText, secondaryText, name }: Props) => {

    return (
        <>
            <Stack direction={'row'} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Stack direction={'row'}
                    gap={1}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Stack>
                        <Inventory2Icon sx={{ fontSize: 62 }} />
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle2' sx={{
                            fontWeight: 600,
                            lineHeight: 1.2
                        }}>
                            {primaryText}
                            <br />
                            {secondaryText}
                        </Typography>
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


                <QuantityButtons form={form} name={name} />
            </Stack>

        </>

    )
}

export default LuggageItemRow
