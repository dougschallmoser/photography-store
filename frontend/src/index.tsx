import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { CartContextProvider } from './contexts/CartContext';

ReactDOM.render(
  <CartContextProvider>
    <Routes />
  </CartContextProvider>,
  document.querySelector('#root')
);
