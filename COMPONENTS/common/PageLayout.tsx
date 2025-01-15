'use client'
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import GetInTOuch from '../main_page/getInTouch';
import GetQuotePopUp from './GetQuotePopUp';
import Chat from './chat';
import { getTheme } from './shared/Theme';
import Header from './shared/header/Header';



const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const theme = getTheme();

    return (
        <ThemeProvider theme={theme}>
            <Chat />
            <GetQuotePopUp />

            <Header />
            {children}
            <GetInTOuch />
        </ThemeProvider >
    );
};

export default PageLayout;
