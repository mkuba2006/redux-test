import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ 
  config,
  colors: {
    text: {
      light: 'black',
      dark: 'white',
    },
    nav:{
      light: '#a1a1aa',
      dark: '#171923',
    },
    formtext: {
      light: 'black',
      dark: 'white',
    },
    formbg: {
      light: 'white',
      dark: '#171923',
    },
    card: {
      light: '#f0fdfa',
      dark: '#171923',
    },
    bcb: {
      light: '#71717a',
      dark: '#27272a',
    },
    reg: {
      light: '#0c5d56',
      dark: '#0c5d56',
    },
    swit: {
      light: '#0c5d56',
      dark: '#86efac',
    },
  },
});

export default theme;

