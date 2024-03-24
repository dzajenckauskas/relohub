'use client'
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import GetInTOuch from '../main_page/getInTouch';
import Header from './Header';
import { theme } from './Theme';

type Props = {
    children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>

            <main className="mainpagemainwrp">
                <Header />
                {children}
                <GetInTOuch />
            </main>
        </ThemeProvider>
    )
}

export default PageLayout
