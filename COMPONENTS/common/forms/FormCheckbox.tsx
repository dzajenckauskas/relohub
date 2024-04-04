import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Control, Controller } from 'react-hook-form'

type Props = {
    control: Control<any, any>
    label: string;
    name: string;
}
const FormCheckbox = ({ control, label, name }: Props) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <FormControlLabel
                    control={<Checkbox checked={Boolean(value)} onChange={onChange} />}
                    label={label}
                />
            )}
        />
    )
}

export default FormCheckbox
