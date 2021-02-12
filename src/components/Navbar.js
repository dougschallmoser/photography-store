import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.empty ? "black" : "#26ad5e"};
`

function Navbar() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li><Link to="/store">Store</Link></li>
        <li>
          <img src={process.env.PUBLIC_URL + '/images/shopping_cart.svg'} alt="cart icon"/>
          <Link to="/cart">
            Cart (<Span empty={!cartItems.length}>{cartItems.length}</Span>)
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;