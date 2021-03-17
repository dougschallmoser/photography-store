import { useContext } from 'react';
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

function Navbar(): JSX.Element {

  const { cartCount } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li>DOUG SCHALLMOSER</li>
      </ul>
      <ul>
        <Link to="/"><li>MAIN</li></Link>
        <Link to="/store"><li>STORE</li></Link>
        <Link to="/cart">
          <li>
            <img src={process.env.PUBLIC_URL + '/images/shopping_cart.svg'} alt="cart icon"/>
            CART(<Span empty={cartCount === 0}>{cartCount}</Span>)
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar;