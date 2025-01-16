import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Dialog, Stack, useMediaQuery, useTheme } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';
import { InstantQuoteComponent } from './InstantQuoteComponent';
import { theme } from './shared/Theme';

const GetQuotePopUp = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const TransitionDesktop = React.forwardRef(function Transition(
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
                timeout={{ enter: 500, exit: 300 }}
            >
                {React.cloneElement(children, {
                    style: {
                        ...children.props.style,
                        borderRadius: theme.shape.borderRadius,
                    },
                })}
            </Slide>
        );
    });
    const TransitionMobile = React.forwardRef(function Transition(
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
                direction="up"
                timeout={{ enter: 500, exit: 300 }}
            >
                {React.cloneElement(children, {
                    style: {
                        ...children.props.style,
                        borderRadius: theme.shape.borderRadius,
                    },
                })}
            </Slide>
        );
    });

    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = () => setShowPopUp(!showPopUp);

    useEffect(() => {
        const popUpShown = sessionStorage.getItem('quotePopUpShown');
        if (!popUpShown) {
            const timer = setTimeout(() => {
                setShowPopUp(true);
                sessionStorage.setItem('quotePopUpShown', 'true');
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {!showPopUp &&
                <Stack
                    alignItems={'center'}
                    onClick={togglePopUp}
                    sx={{
                        cursor: 'pointer',
                        position: 'fixed',
                        zIndex: 9,
                        left: 0,
                        bottom: { xs: 10, md: 'calc(50vh - 33px)' },
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: '0px 8px 8px 0px ',
                        padding: { xs: 1 },
                        boxShadow: 3,
                        color: theme.palette.primary.contrastText,
                        textAlign: 'center',
                        transition: 'transform 0.3s ease-in-out',
                        maxWidth: 65,
                        maxHeight: { xs: 94, md: 136 },
                    }}
                >
                    <div style={{ paddingTop: 1 }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <p style={{ fontSize: 14, letterSpacing: 3, padding: 0, textAlign: 'center', paddingLeft: 1.5, paddingTop: 1 }}>GET A</p>
                        </Box>
                        <h3 style={{ textAlign: 'center', position: 'relative', left: -.5 }}>FREE</h3>
                        <p style={{ fontSize: 14, letterSpacing: 2, padding: 0, textAlign: 'center', paddingLeft: 1.5, paddingTop: 1 }}>QUOTE</p>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <h3 style={{ textAlign: 'center', position: 'relative', left: -.5 }}>NOW</h3>
                        </Box>
                    </div>
                    <FormatQuoteIcon sx={{ fontSize: 62, position: 'relative', top: -11, left: -1 }} />
                </Stack>}

            {showPopUp &&
                <Dialog
                    sx={{ zIndex: 10 }}
                    open={showPopUp}
                    TransitionComponent={isMobile ? TransitionMobile : TransitionDesktop}
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

export default GetQuotePopUp;
