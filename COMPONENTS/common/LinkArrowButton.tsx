import EastIcon from '@mui/icons-material/East';
import Button from "@mui/material/Button";
import { useState } from "react";
type Props = {
    onClick?: () => void;
}

export const LinkArrowButton = ({ onClick }: Props) => {
    const [active, setActive] = useState(false)
    return (
        <Button
            aria-label="expand button"
            variant={'contained'}
            color='secondary'
            onClick={() => {
                onClick && onClick()
                setActive(!active)
            }}
            onMouseEnter={() => {
                setActive(!active)
            }}
            onMouseLeave={() => {
                setActive(!active)
            }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                width: '40px',
                minWidth: 40,
                height: '40px',
                cursor: 'pointer',
            }}>
            <EastIcon sx={{
                width: 18,
                height: 18,
                transition: 'transform .8s ease',
                transform: active ? 'scale(1.2)' : 'scale(1)'

            }} />
        </Button>
    )
}