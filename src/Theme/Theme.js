import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffca94',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#5a1a00',
            onBackgroundText: '#6b0000'
        },
        secondary: {
            light: '#ffed91',
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