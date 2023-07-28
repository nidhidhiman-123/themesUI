import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',

        },
        background: {
            default: '#212121',
        },

    },
    mixins: {
        centered: {
            margin: 'auto',
            width: '95%',
        },
    },
    typography: {
        fontFamily: 'SemplicitaPro'

    },

});



const colors = {
    color: {
        priceText: {
            main: '#EF782B',
        },
        textSecondary: {
            main: '#A1A1A1',
        },
        title: {
            main: '#212121',
        },
    }
};




const theme = {
    colors,
    mainTheme,


};



export default theme;