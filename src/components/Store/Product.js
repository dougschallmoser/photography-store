import React, { useState, useContext, useMemo } from 'react';
import './Product.css';
import { CartContext } from '../../contexts/CartContext';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 18px;
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

const Select = styled.select`
  margin: 0 14px 10px 10px;
  padding: 8px 16px 8px 8px;
  background: #f2f2f2;
  color: black;
  border: 2px solid #e6e6e6;
  cursor: pointer;
  &:focus {
    outline: none;
`

function Product({ data }) {

  const { cartItems, addItem } = useContext(CartContext);
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState('5x7')

  const added = useMemo(() => cartItems.some(item => item.id === data.id && item.size === size), [cartItems, data, size])

  const handleSelect = (event) => {
    setSize(event.target.value)
  }

  const handleAddItem = () => {
    const modifiedData = Object.assign({}, data)
    modifiedData.price = modifiedData.price[size]
    modifiedData.size = size
    addItem(modifiedData)
  }
  
  return (
    <div>
      {open && 
        <div className="image-modal">
          <img onClick={() => setOpen(!open)} src={`${data.photo}`} alt={data.name} />
        </div>
      }
      <img
        className="product-image"
        onClick={() => setOpen(!open)}
        src={`${data.photo}`}
        alt={data.name}
      />
      <h3>{data.name}</h3>
      <h2>${data.price[size].toFixed(2)}</h2>
      Size:
      <Select 
        value={size} 
        onChange={handleSelect} 
      >
        <option value="5x7">5 x 7</option>
        <option value="8x10">8 x 10</option>
        <option value="11x14">11 x 14</option>
        <option value="16x20">16 x 20</option>
        <option value="24x30">24 x 30</option>
        <option value="30x40">30 x 40</option>
      </Select>
      <Button added={added} onClick={handleAddItem}>
        {added ? "ADD ANOTHER" : "ADD TO CART"}
      </Button>
    </div>
  )
}

export default Product;