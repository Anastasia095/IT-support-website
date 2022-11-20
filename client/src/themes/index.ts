import { createTheme } from '@material-ui/core/styles';

export const customTheme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#d50000',
    },
    info: {
      main: '#ffffff',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});