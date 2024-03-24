'use client'
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import GetInTOuch from '../main_page/getInTouch';
import Header from './Header';
import { theme } from './Theme';
import Chat from './chat';

type Props = {
    children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Chat />
            <Header />
            {children}
            <GetInTOuch />
        </ThemeProvider>
    )
}

export default PageLayout
