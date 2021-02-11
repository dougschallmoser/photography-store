import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 20px;
  background: ${props => props.added ? "white" : "black"};
  color: ${props => props.added ? "black" : "white"};
  border: ${props => props.added ? "2px solid black" : "2px solid transparent"};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.added ? "black" : ""};
    color: ${props => props.added ? "white" : ""};
  }
`

function Product({ data }) {

  const { cartItems } = useContext(CartContext);
  const { addItem } = useContext(CartContext);

  const added = cartItems.some(item => item.id === data.id)
  
  return (
    <div>
      <img src={`${data.photo}`} alt={data.name} />
      <h3>{data.name}</h3>
      <h2>${data.price.toFixed(2)}</h2>
      <Button added={added} onClick={() => addItem(data)}>
        {added ? "ADD ANOTHER" : "ADD TO CART"}
      </Button>
    </div>
  )
}

export default Product;