import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import { useState } from "react";

type Props = {
    onClick?: () => void;
}

export const ExpandButton = ({ onClick }: Props) => {
    const [active, setActive] = useState(false)
    return (
        <Button
            variant={active ? 'outlined' : 'contained'}
            color='secondary'
            onClick={() => {
                onClick && onClick()
                setActive(!active)
            }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: active ? 'transparent' : '#e71c5e',
                // border: '1px solid #e71c5e',
                borderRadius: 50,
                width: '40px',
                minWidth: 40,
                height: '40px',
                // color: active ? '#e71c5e' : '#fff',
                cursor: 'pointer',
                transition: active ? 'transform .3s ease-in' : 'transform .6s ease-in',
                ":hover": {
                    transform: active ? 'rotate(0deg)' : 'rotate(-90deg)',
                    // backgroundColor: active ? '#e71c5e' : 'transparent',
                    // opacity: .8
                }
            }}>
            {active ? <RemoveIcon fontSize={'large'} /> : <AddIcon fontSize={'large'} />}
        </Button>
    )
}