import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

type Props = {
  error?: string;
}
const ErrorBox = ({ error }: Props) => {
  return (
    <Stack sx={{ mt: 2 }}>
      <Typography variant="caption" color={'error'}>{error}</Typography>
    </Stack>
  )

}

export default ErrorBox;
