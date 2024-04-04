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
            aria-label="expand button"
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
                borderRadius: 50,
                width: '40px',
                minWidth: 40,
                height: '40px',
                cursor: 'pointer',
                transition: active ?
                    'transform .3s ease-in' :
                    'transform .5s ease-in',
                ":hover": {
                    transform: active ?
                        'rotate(0deg)' :
                        'rotate(-90deg)',
                }
            }}>
            {active ?
                <RemoveIcon sx={{
                    width: 22,
                    height: 22,
                }} /> :
                <AddIcon sx={{
                    width: 22,
                    height: 22,
                }} />
            }
        </Button>
    )
}