import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    blue: string;
    background: string;
    lightGrey: string;
    darkGrey: string;
    mindGrey: string;
    lightBrown: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: 'Open Sans',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 400,
      color: '#424242',
    },
    button: {
      textTransform: 'none',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: '#000',
          white: '#fafafa',
          blue: '#0B57F5',
          lightGrey: '#8D93A1',
          mindGrey: '#B1BBC6',
          lightBrown: '#efebe9',
        },
        primary: {
          main: '#4e342e',
        },
        secondary: {
          main: '#27C59A',
        },
        background: {
          default: '#f5f5f5',
        },
      },
    },
  },
});

export type Theme = typeof theme;
