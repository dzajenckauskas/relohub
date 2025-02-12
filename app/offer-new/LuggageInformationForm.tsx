import { theme } from '@/COMPONENTS/common/shared/Theme';
import Add from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import AddItemForm from './AddItemForm';
import LuggageItemRow from './LuggageItemRow';
import { CustomItemType, OfferFormType } from './OfferNewPage';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
}

const LuggageInformationForm = ({ form }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'customItems'
    });
    return (

        <Stack direction="row" gap={2} pb={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={3}>
                <LuggageItemRow
                    imgSrc="/sb.png"
                    primaryText="Standard"
                    secondaryText="Box"
                    dimensions="41 x 41 x 41 cm"
                    maxWeight="20"
                    form={form}
                    name={'standardBox'}
                />
                <LuggageItemRow
                    imgSrc="/lb.png"
                    primaryText="Large"
                    secondaryText="Box"
                    dimensions="51 x 51 x 51 cm"
                    maxWeight="30"
                    form={form}
                    name={'largeBox'}
                />
                <LuggageItemRow
                    imgSrc="/ss.png"
                    primaryText="Suitcase"
                    secondaryText="Small"
                    dimensions="18 x 32 x 45 cm"
                    maxWeight="20"
                    form={form}
                    name={'suitcaseSmall'}
                />
                <LuggageItemRow
                    imgSrc="/sl.png"
                    primaryText="Suitcase"
                    secondaryText="Large"
                    dimensions="36 x 47 x 70 cm"
                    maxWeight="30"
                    form={form}
                    name={'suitcaseLarge'}
                />
                <Stack>
                    <Box pb={1}>
                        <Divider />
                    </Box>

                    {/* {!addItem && */}
                    {/* {addItem && */}
                    <>
                        {fields?.reverse()?.map((ci, i) => {
                            return <Stack key={ci.id} alignItems={'stretch'} pb={2}>
                                <Button sx={{
                                    minWidth: 10, alignSelf: 'flex-end',
                                    //  position: 'relative', top: 3, right: 3
                                }}
                                    onClick={() => remove(i)}
                                >
                                    <CloseIcon fontSize='large' sx={{ fontSize: 20 }} />
                                </Button>
                                <AddItemForm form={form} errors={form.formState.errors} index={i} />
                                <Box sx={{ pt: 1 }}>
                                    <Divider />
                                </Box>
                            </Stack>
                        })}
                    </>

                    {/* } */}
                    <Stack
                        pt={1}
                        onClick={async () => await append({} as CustomItemType)}

                        direction={'row'}
                        sx={{ cursor: 'pointer' }}
                        justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                        <Add fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                        <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                            ADD YOUR OWN ITEM
                        </Typography>
                    </Stack>
                    {/* <Box pt={2}>
                        <Divider />
                    </Box> */}

                </Stack>
            </Box>
        </Stack>

    )
}

export default LuggageInformationForm
