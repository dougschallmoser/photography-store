import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

function CartItems() {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-items">
      {cartItems.map(item => <CartItem key={item.id + item.size} item={item} />)}
    </div>
  )
}

export default CartItems;