'use client'
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import GetInTOuch from "../main_page/getInTouch";
import GetQuotePopUp from "./GetQuotePopUp";
import Chat from "./chat";
import { getTheme } from "./shared/Theme";
import Header from "./shared/header/Header";

const PageLayout = ({
    children,
    hidePopUpButton,
    hideFooter,
    homePage
}: {
    children: React.ReactNode;
    hidePopUpButton?: boolean;
    hideFooter?: boolean;
    homePage?: boolean;
}) => {
    const theme = getTheme();
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById("get-quote");
        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when at least 50% of the hero section is visible
        );

        observer.observe(heroSection);

        return () => observer.disconnect();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* <Chat /> */}
            {(!hidePopUpButton) && <GetQuotePopUp isHeroVisible={isHeroVisible} />}
            <Header homePage={homePage} />
            {children}
            {!hideFooter && <GetInTOuch />}
        </ThemeProvider>
    );
};

export default PageLayout;
