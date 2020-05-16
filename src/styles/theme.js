import { createMuiTheme } from '@material-ui/core/styles';

const appPalette = {
  salmon: '#ff6c80',
  slate: '#65656c',
  steel: '#8d8d8e',
  gainsboro: '#d8d8d8',
  smoke: '#f7f8f9',
  indigo: '#304075',
  teal: '#03c4c8',
  charcoalGrey: '#313134',
  red: '#cc284e',
  white: 'white',
  error: '#ff3362',
  warning: '#ffc12a',
  black: 'black',
  grey200: '#d3d3d3',
  grey300: '#c9c9c9',
  grey500: '#888b8d',
  grey600: '#65656d',
  grey700: '#4b4b4b'
};

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  colors: { ...appPalette }
});

export default theme;