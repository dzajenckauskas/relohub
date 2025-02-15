import { Add, Remove } from "@mui/icons-material";
import { FormHelperText, IconButton, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Controller } from "react-hook-form";
import { CustomItemType } from "./OfferNewPage";

type Props = {
    form: any;
    name: string;
    onDecrease?: (item: CustomItemType) => void;
    onIncrease?: (item: CustomItemType) => void;
    item?: CustomItemType
    quantity?: number;
}

const QuantityButtons = ({ form, name, onIncrease, onDecrease, item, quantity }: Props) => {
    const qty = quantity ?? form.watch(name);

    const handleIncrement = () => {
        const newValue = (qty || 0) + 1;
        form.setValue(name, newValue, { shouldValidate: true });
        form.trigger('hasItemsAdded'); // Manually trigger validation
        onIncrease && onIncrease(item)
    };

    const handleDecrement = () => {
        const newValue = Math.max(0, (qty || 0) - 1);
        form.setValue(name, newValue, { shouldValidate: true });
        form.trigger('hasItemsAdded'); // Manually trigger validation
        onDecrease && onDecrease(item)
    };

    return (
        <>
            <Stack direction="row" spacing={1} alignItems="center"
                sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: 1 }}
            >
                <IconButton onClick={handleDecrement}>
                    <Remove sx={{ fontSize: 20 }} />
                </IconButton>

                <Controller
                    name={name}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            value={quantity}
                            defaultValue={0}
                            type="text" // Prevent default number input behavior
                            error={!!fieldState.error}
                            // helperText={fieldState.error?.message}
                            inputProps={{
                                inputMode: "numeric", // Numeric keyboard on mobile
                                pattern: "[0-9]*", // Only numbers
                                min: 0,
                                max: 1000,
                                style: { textAlign: "center", MozAppearance: "textfield" }, // Center text & fix Firefox spinner issue
                            }}
                            sx={{
                                maxWidth: 50, // Control input width
                                height: 40,
                                "& input": {
                                    textAlign: "center", // Centers input text
                                    padding: "0 !important", // Removes padding
                                    fontSize: 18,
                                    fontWeight: 400,
                                    letterSpacing: 1.5
                                },
                                "& .MuiInputBase-root": {
                                    p: 0, // Removes internal padding
                                    paddingTop: 1,

                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "0 !important", // Ensures padding is removed
                                },
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                    WebkitAppearance: "none",
                                    margin: 0, // Removes arrows in Chrome/Safari
                                },
                                "& input[type=number]": {
                                    MozAppearance: "textfield", // Removes arrows in Firefox
                                },
                                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                                    borderBottom: "none", // Removes underline
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none", // Removes border
                                },
                            }}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                const numericValue = value ? Number(value) : "";
                                !(onIncrease || onDecrease) && field.onChange(numericValue); // Update field value
                                form.setValue(name, numericValue, { shouldValidate: true }); // Trigger validation
                            }}
                        />
                    )}
                />




                <IconButton onClick={handleIncrement}>
                    <Add sx={{ fontSize: 20 }} />
                </IconButton>
            </Stack>
            {form.fieldState?.error?.message && (
                <FormHelperText error>{form.fieldState?.error?.message}</FormHelperText>
            )}
        </>
    )
}

export default QuantityButtons
