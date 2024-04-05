import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { Control, Controller, UseFormReturn } from 'react-hook-form'

type Props = {
    control: Control<any, any>
    label: string;
    name: string;
    form: UseFormReturn<any, any, undefined>

}
const FormCheckbox = ({ control, label, name, form }: Props) => {
    const { formState: { errors } } = form
    const error = errors?.[name]
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <FormControlLabel sx={{
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                    '.MuiSvgIcon-root': {
                        width: 30,
                        height: 30
                    }
                }}
                    control={<Checkbox sx={{ mt: -.8, ml: -1.5 }} color={'secondary'} size='large' checked={Boolean(value)} onChange={onChange} />}
                    label={<Typography variant='body1' color={!!error?.message ? 'secondary' : '#fff'}>
                        {label}
                    </Typography>}
                />
            )}
        />
    )
}

export default FormCheckbox
