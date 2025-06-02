import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import { useState } from "react";

type Props = {
    onClick?: () => void;
    active: boolean;
    setActive: (v: boolean) => void;
}

export const ExpandButton = ({ onClick, active, setActive }: Props) => {
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
                backgroundColor: active ? 'transparent' : '#377f61',
                borderRadius: 50,
                width: '36px',
                minWidth: 36,
                height: '36px',
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