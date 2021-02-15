import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../../contexts/CartContext';
import styled from 'styled-components';

interface SpanProps {
  empty: boolean
}

const Span = styled.span<SpanProps>`
  color: ${props => props.empty ? "black" : "#26ad5e"};
`

function Navbar() {

  const { cartCount } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li>DOUG SCHALLMOSER</li>
      </ul>
      <ul>
        <li><Link to="/">MAIN</Link></li>
        <li><Link to="/store">STORE</Link></li>
        <li>
          <img src={process.env.PUBLIC_URL + '/images/shopping_cart.svg'} alt="cart icon"/>
          <Link to="/cart">
            CART(<Span empty={cartCount === 0}>{cartCount}</Span>)
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;