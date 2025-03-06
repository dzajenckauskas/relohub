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
import { useState } from 'react';
import CustomItemRow from './CustomItemRow';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>
    detailsColumn?: boolean;
}

const LuggageInformationForm = ({ form, detailsColumn }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'customItems'
    });
    const customItems = form.watch('customItems')
    const [openCustomItemForm, setOpenCustomItemForm] = useState(false)
    return (

        <Stack direction="row" gap={2} pb={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={{ xs: 1, md: 2 }}>
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/sb.png"
                    primaryText="Standard"
                    secondaryText="Box"
                    dimensions="41 x 41 x 41cm"
                    maxWeight="20"
                    form={form}
                    name={'standardBox'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/lb.png"
                    primaryText="Large"
                    secondaryText="Box"
                    dimensions="51 x 51 x 51cm"
                    maxWeight="30"
                    form={form}
                    name={'largeBox'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/ss.png"
                    primaryText="Suitcase"
                    secondaryText="Small"
                    dimensions="18 x 32 x 45cm"
                    maxWeight="20"
                    form={form}
                    name={'suitcaseSmall'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/sl.png"
                    primaryText="Suitcase"
                    secondaryText="Large"
                    dimensions="36 x 47 x 70cm"
                    maxWeight="30"
                    form={form}
                    name={'suitcaseLarge'}
                />
                <Stack>
                    {customItems?.length > 0 && <Stack gap={1} mt={3} mb={2}>
                        <Typography variant="h2" sx={{ fontWeight: 500, pb: 1 }}>Your <b>Custom Items</b></Typography>
                        <Divider />
                    </Stack>}
                    <Box flex={1} display="flex" flexDirection="column" gap={{ xs: 1, md: 2 }}>
                        <>
                            {customItems?.map((ci, i) => {
                                console.log(form.getValues());
                                if (ci.confirmed) {
                                    return <CustomItemRow
                                        key={ci.name}
                                        primaryText={ci.name}
                                        dimensions={`${ci.weight} x ${ci.height} x ${ci.depth}cm`}
                                        weight={ci.weight}
                                        quantity={ci.quantity ?? 1}
                                        form={form}
                                        item={ci}
                                        name={`customItems.${i}`}
                                    />
                                } else {
                                    return null
                                }
                            })}
                        </>
                    </Box>
                    <>
                        {openCustomItemForm &&
                            <Stack alignItems={'stretch'} pb={2}>
                                <Button
                                    disableElevation
                                    disableFocusRipple
                                    disableRipple
                                    disableTouchRipple sx={{
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
                                        minWidth: 10, alignSelf: 'flex-end',
                                    }}
                                    onClick={() => {
                                        remove(fields?.length - 1)
                                        setOpenCustomItemForm(false)
                                    }}
                                >
                                    <CloseIcon fontSize='large' sx={{ fontSize: 20 }} />
                                </Button>
                                <AddItemForm setOpenCustomItemForm={setOpenCustomItemForm} append={append} form={form} errors={form.formState.errors} index={fields?.length - 1} />
                                <Box sx={{ pt: 1 }}>
                                    <Divider />
                                </Box>
                            </Stack>
                        }
                    </>
                    <Stack
                        pt={1}
                        onClick={async () => {
                            await append({} as CustomItemType)
                            setOpenCustomItemForm(true)
                        }}

                        direction={'row'}
                        sx={{ cursor: 'pointer', zIndex: 2, maxWidth: 'max-content' }}
                        justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                        <Add fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                        <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                            ADD YOUR OWN ITEM
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Stack>

    )
}

export default LuggageInformationForm
