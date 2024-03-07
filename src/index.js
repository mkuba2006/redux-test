import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import theme from './chakra/theme';
import { ColorModeScript } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />  
    <App/>
</Provider>);

