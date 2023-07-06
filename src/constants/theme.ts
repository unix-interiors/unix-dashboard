import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    blue: string;
    lightGrey: string;
    darkGrey: string;
    mindGrey: string;
    lightBrown: string;
    black: string;
    plainWhite: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: 'Open Sans',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 400,
      color: '#616161',
    },
    button: {
      textTransform: 'none',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: '#212121',
          white: '#fafafa',
          blue: '#0B57F5',
          lightGrey: '#8D93A1',
          mindGrey: '#B1BBC6',
          darkGrey: '#616161',
          lightBrown: '#efebe9',
          plainWhite: '#ffffff',
        },
        primary: {
          main: '#4e342e',
        },
        secondary: {
          main: '#27C59A',
        },
        background: {
          default: '#f1f1f1',
        },
      },
    },
  },
});

export type Theme = typeof theme;
