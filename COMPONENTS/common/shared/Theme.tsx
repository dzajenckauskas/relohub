import { createTheme } from '@mui/material/styles';
// import { Uniform } from "next/font/google";

// const openSans = Open_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin-ext'] })

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
        MuiFormHelperText: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    lineHeight: 1.1
                }),
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    fontFamily: 'Calibri',
                    fontSize: 14,
                    py: 1.2,
                    letterSpacing: 1,
                    fontWeight: 700,
                    borderRadius: '2px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none' // Removing box shadow on hover
                    },
                    '&.Mui-disabled': {
                        opacity: .8,
                        backgroundColor: "gray !important",
                        color: "white !important" // Ensure text is visible
                    }
                })
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                popper: ({ theme }) => theme.unstable_sx({
                    boxShadow: '0 0 10px #0000001A',
                }),
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    // fontSize: '28px',
                }),

            }
        },
    },

    typography: {
        h1: {
            fontFamily: 'Calibri',
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
            fontFamily: 'Calibri',
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
            fontFamily: 'Calibri',
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
            fontFamily: 'Calibri',
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
            fontFamily: 'Calibri',
            fontSize: 20
        },
        h6: {
            fontFamily: 'Calibri',
        },
        subtitle1: {
            fontFamily: 'Calibri',
            fontSize: 18,
            '@media (min-width:600px)': {
                fontSize: 18,
            },
            '@media (min-width:960px)': {
                fontSize: 18,
            },
            '@media (min-width:1280px)': {
                fontSize: 20,
            },
            '@media (min-width:1920px)': {
                fontSize: 22,
            },
        },
        subtitle2: {
            fontFamily: 'Calibri',
            fontSize: 18,
        },
        body1: {
            fontFamily: 'Calibri',
            fontSize: 16,

        },
        body2: {
            fontFamily: 'Calibri',
            fontSize: 14
        },
        caption: {
            fontFamily: 'Calibri',
            fontSize: 12

        }
    },
    palette: {
        primary: {
            main: '#303030'
        },
        secondary: {
            main: '#377f61',
            dark: '#2c634c'
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
            main: '#e31212',
        }
    }
})

export const getTheme = () => {
    return theme
}