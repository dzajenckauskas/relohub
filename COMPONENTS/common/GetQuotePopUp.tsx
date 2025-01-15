import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Dialog, Stack, useTheme } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';
import { InstantQuoteComponent } from './InstantQuoteComponent';
import { theme } from './shared/Theme';

const GetQuotePopUp = () => {
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        const { children, ...other } = props;
        const theme = useTheme();

        return (
            <Slide
                ref={ref}
                {...other}
                direction="right"
                style={{
                    // transformOrigin: 'bottom right', // Set transform origin to toggle button
                }}
                timeout={{ enter: 500, exit: 300 }} // Adjust duration for smoother animation
            >
                {React.cloneElement(children, {
                    style: {
                        ...children.props.style,
                        // marginBottom: 'calc(50vh - 20px)', // Matches the button's position
                        // marginLeft: 20,
                        borderRadius: theme.shape.borderRadius,
                    },
                })}
            </Slide>
        );
    });

    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = () => setShowPopUp(!showPopUp);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, [setTimeout]);

    return (
        <>
            <Stack
                alignItems={'center'}
                onClick={togglePopUp}
                sx={{
                    cursor: 'pointer',
                    position: 'fixed',
                    zIndex: 9,
                    left: 8,
                    bottom: 'calc(50vh - 33px)',
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '8px',
                    padding: { xs: 1 },
                    boxShadow: 3,
                    color: theme.palette.primary.contrastText,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    maxWidth: 65,
                    maxHeight: 95
                }}
            >
                <div style={{ paddingTop: 1 }}>
                    <h3 style={{ textAlign: 'center' }}>FREE</h3>
                    <p style={{ fontSize: 14, letterSpacing: 2, padding: 0, textAlign: 'center', paddingLeft: 3 }}>QUOTE</p>
                </div>
                <FormatQuoteIcon sx={{ fontSize: 62, position: 'relative', top: -9 }} />
            </Stack>

            {showPopUp &&
                <Dialog
                    sx={{ zIndex: 10 }}
                    open={showPopUp}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={togglePopUp}
                    PaperProps={{
                        style: {
                            overflow: 'visible'
                        },
                    }}
                >
                    <Box sx={{ p: 4, width: { xs: '90vw', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' }, maxWidth: { xs: '90vw', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' } }}>
                        <InstantQuoteComponent togglePopUp={togglePopUp} title={
                            <h2 className="instantquotewrp">
                                <span>{"Get a "}</span>
                                <span style={{ fontWeight: 800 }}>
                                    <b>Fast Free Quote</b>
                                </span>
                                <span>{" now"}</span>
                            </h2>
                        } />
                    </Box>
                </Dialog>}
        </>
    )
}

export default GetQuotePopUp
