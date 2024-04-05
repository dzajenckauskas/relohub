import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    // 'label + &': {
                    //     marginTop: theme.spacing(2),
                    // },
                    // borderRadius: 0,
                    // backgroundColor: theme.palette.info.main
                }),
                input: ({ theme }) => theme.unstable_sx({
                    // backgroundColor: theme.palette.info.main
                }),
                multiline: ({ theme }) => theme.unstable_sx({
                    // backgroundColor: theme.palette.info.main
                }),
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    // color: `${theme.palette.info.main} !important`,
                    // fontSize: '16px !important'
                    // borderRadius: 0,
                }),
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    fontSize: 14,
                    py: 1.2,
                    letterSpacing: 1,
                    fontWeight: 500,
                    borderRadius: '2px'
                }),
            }
        }
    },
    typography: {
        h1: {
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: 32,
            '@media (min-width:600px)': {
                fontSize: 32,
            },
            '@media (min-width:960px)': {
                fontSize: 36,
            },
            '@media (min-width:1280px)': {
                fontSize: 42,
            },
            '@media (min-width:1920px)': {
                fontSize: 48,
            },
        },
        h2: {
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: 24,
            '@media (min-width:600px)': {
                fontSize: 28,
            },
            '@media (min-width:960px)': {
                fontSize: 32,
            },
            '@media (min-width:1280px)': {
                fontSize: 36,
            },
            '@media (min-width:1920px)': {
                fontSize: 40,
            },
        },
        h3: {
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: 20,
            '@media (min-width:600px)': {
                fontSize: 24,
            },
            '@media (min-width:960px)': {
                fontSize: 28,
            },
            '@media (min-width:1280px)': {
                fontSize: 32,
            },
            '@media (min-width:1920px)': {
                fontSize: 36,
            },
        },
        h4: {
            fontFamily: 'inherit',
            fontSize: 18,
            '@media (min-width:600px)': {
                fontSize: 20,
            },
            '@media (min-width:960px)': {
                fontSize: 22,
            },
            '@media (min-width:1280px)': {
                fontSize: 24,
            },
            '@media (min-width:1920px)': {
                fontSize: 26,
            },
        },
        h5: {
            fontFamily: 'inherit',
        },
        h6: {
            fontFamily: 'inherit',
        },
        body1: {
            fontFamily: 'inherit',
            fontSize: 16

        },
        body2: {
            fontFamily: 'inherit',
            fontSize: 14
        },
        caption: {
            fontFamily: 'inherit',
            fontSize: 12

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
            main: '#e71c5e',
        }
    }
})

export const getTheme = () => {
    return theme
}