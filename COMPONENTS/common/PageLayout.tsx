'use client'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Dialog, Stack, useTheme } from '@mui/material';
import Slide from '@mui/material/Slide';
import { ThemeProvider } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';
import GetInTOuch from '../main_page/getInTouch';
import { InstantQuoteComponent } from './InstantQuoteComponent';
import Chat from './chat';
import { getTheme } from './shared/Theme';
import Header from './shared/header/Header';

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
            direction="up"
            style={{
                transformOrigin: 'bottom right', // Set transform origin to toggle button
            }}
            timeout={{ enter: 500, exit: 300 }} // Adjust duration for smoother animation
        >
            {React.cloneElement(children, {
                style: {
                    ...children.props.style,
                    marginBottom: 120, // Matches the button's position
                    marginRight: 20,
                    borderRadius: theme.shape.borderRadius,
                },
            })}
        </Slide>
    );
});

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const theme = getTheme();
    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = () => setShowPopUp(!showPopUp);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Chat />
            <Stack
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'row'}
                onClick={togglePopUp}
                sx={{
                    cursor: 'pointer',
                    position: 'fixed',
                    zIndex: 99,
                    right: 8,
                    bottom: 80,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '8px',
                    padding: { xs: 1, md: 1.5 },
                    boxShadow: 3,
                    color: theme.palette.primary.contrastText,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    maxWidth: 130,
                    maxHeight: 64
                }}
            >
                <div className="chatwithustxt">
                    <h3 style={{ textAlign: 'left' }}>FREE</h3>
                    <p style={{ letterSpacing: 4.5, padding: 0 }}>QUOTE</p>
                </div>

                <FormatQuoteIcon sx={{ fontSize: { xs: 48, md: '64px' }, ml: { xs: 0, md: -.5 } }} />
            </Stack>

            <Dialog
                open={showPopUp}
                TransitionComponent={Transition}
                keepMounted
                onClose={togglePopUp}
                PaperProps={{
                    style: {
                        overflow: 'visible', // Prevent cutting off content
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
            </Dialog>

            <Header />
            {children}
            <GetInTOuch />
        </ThemeProvider>
    );
};

export default PageLayout;
