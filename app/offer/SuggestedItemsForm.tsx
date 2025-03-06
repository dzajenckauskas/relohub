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
    detailsColumn?: boolean;
    setShowAllItems?: (v: boolean) => void;
}

const SuggestedItemsForm = ({ form, detailsColumn, setShowAllItems }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'customItems'
    });
    return (

        <Stack direction="row" gap={2} pb={2} pt={2} >
            <Box flex={1} display="flex" flexDirection="column" gap={2}>
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/sb.png"
                    primaryText="TV"
                    // secondaryText="Box"
                    dimensions="41 x 41 x 41cm"
                    maxWeight="20"
                    form={form}
                    name={'tv'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/lb.png"
                    primaryText="Bike"
                    // secondaryText="Bo x"
                    dimensions="51 x 51 x 51cm"
                    maxWeight="30"
                    form={form}
                    name={'bike'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/ss.png"
                    primaryText="Office"
                    secondaryText="Chair"
                    dimensions="18 x 32 x 45cm"
                    maxWeight="20"
                    form={form}
                    name={'officeChair'}
                />
                <LuggageItemRow
                    detailsColumn={detailsColumn}
                    imgSrc="/sl.png"
                    primaryText="Desk"
                    // secondaryText="Large"
                    dimensions="36 x 47 x 70cm"
                    maxWeight="30"
                    form={form}
                    name={'desk'}
                />
                <Stack>
                    {/* <Box pb={1}>
                        <Divider />
                    </Box> */}

                    {/* {!addItem && */}
                    {/* {addItem && */}
                    <>
                        {fields?.reverse()?.map((ci, i) => {
                            return <Stack key={ci.id} alignItems={'stretch'} pb={2}>
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
                    {/* <Stack
                        pt={1}
                        onClick={async () => setShowAllItems(true)}

                        direction={'row'}
                        sx={{ cursor: 'pointer' }}
                        justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                        <Add fontSize="large" sx={{ fill: theme.palette.secondary.main }} />
                        <Typography fontWeight={500} color={'secondary.main'} sx={{ letterSpacing: 1 }}>
                            VIEW ALL FURNITURE {'&'} APPLIENCE ITEMS
                        </Typography>
                    </Stack> */}
                    {/* <Box pt={2}>
                        <Divider />
                    </Box> */}

                </Stack>
            </Box>
        </Stack>

    )
}

export default SuggestedItemsForm
