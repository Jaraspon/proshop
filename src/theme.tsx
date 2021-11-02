import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const defaultTheme = createTheme();

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#b179fa',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#474747',
        },
        error: {
            // This is green.A700 as hex.
            main: '#ee1010',
        },
        warning: {
            // This is green.A700 as hex.
            main: '#c8fd34',
        },
        info: {
            // This is green.A700 as hex.
            main: '#6d6d6d',
        },
        success: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        }
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    minWidth: '39px',
                    minHeight: '39px',
                    borderRadius: '9px',
                },
            },
            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        textTransform: 'none',

                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                      
                    },
                },
                {
                    props: { variant: 'contained' },
                    style: {
                      
                    },
                },
                {
                    props: { variant: 'contained', size: 'large' },
                    style: {
                        minHeight: '50px'

                    },
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: {

                    borderRadius: '9px',
                },
            },
        },
    },
});

export default theme