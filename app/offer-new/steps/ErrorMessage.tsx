import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import React from 'react'

type Props = {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <Stack alignItems={'center'} direction={'row'} alignContent={'center'}>
      <ErrorOutlineIcon fontSize='large' color='error' />
      <FormHelperText error sx={{ pl: .5, pb: .25, fontSize: 14 }}>
        {message}
      </FormHelperText>
    </Stack>
  )
}

export default ErrorMessage
