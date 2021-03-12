import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { CartContextProvider } from '../contexts/CartContext';

const AllTheWrappers = ({ children }) => {
  return (
    <CartContextProvider>
      <Router>
        {children}
      </Router>
    </CartContextProvider>
  )
}

const renderWithRouter = (ui, options) => {
  return (
    render(ui, { wrapper: AllTheWrappers, ...options })
  )
}

export * from '@testing-library/react';

export { renderWithRouter as render }