import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#e6e6e6',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#000',
            onBackgroundText: '#444'
        },
        secondary: {
            light: '#fff3b8',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#2b0000',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Roboto Mono'
        },
    },
});

export default theme