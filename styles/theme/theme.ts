import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Monument Grotesk'].join(','),
    fontSize: 15,
    h6: {
      fontSize: 32,
      color: '#0E103C',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '44.29px',
    },
    subtitle1: {
      fontSize: 40,
      color: '#FF4C00',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '55px',
    },
    subtitle2: {
      fontSize: 52,
      color: '#0E103C',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '72px',
    },
    body1: {
      fontSize: 24,
    },
    body2: {
      fontSize: 20,
      color: '#0E103C',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '27.6px',
    },
    h3: {
      fontSize: 50,
      color: '#0E103C',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '70px',
    },
  },
  palette: {
    background: {
      default: '#FFFFFF',
    },
    primary: {
      main: '#5D2070',
    },
    secondary: {
      main: '#1C4ECF',
    },
    warning: {
      main: '#1C4ECF',
    },
    text: {
      primary: '#1A0836',
    },
  },
});

export default theme;
