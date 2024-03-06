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
      light: '#4FD1C5',
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
  },
});

export default theme;
