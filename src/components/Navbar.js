import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../contexts/CartContext';

function Navbar() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;