import { createTheme } from '@mui/material/styles';
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin-ext'] })

export const theme = createTheme({
    typography: {
        h1: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 42,
            fontWeight: 700
        },
        h2: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 28,
            fontWeight: 700
        },
        h3: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 24,
            fontWeight: 700
        },
        h4: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 22,
        },
        h5: {
            fontFamily: openSans.style.fontFamily,
        },
        h6: {
            fontFamily: openSans.style.fontFamily,
        },
        body1: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 16

        },
        body2: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 14
        },
        caption: {
            fontFamily: openSans.style.fontFamily,
            fontSize: 10

        }
    },
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#e71c5e',
            dark: '#ce1551'
        },
        info: {
            main: '#fff'
        },
        text: {
            primary: '#000',
            secondary: '#727175',
            disabled: '#7d7c83',
        },
        error: {
            main: '#00F'
        }
    }
})

export const getTheme = () => {
    return theme
}