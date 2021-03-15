import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Item } from '../../types';

function CartItem({ item }: { item: Item} ) {

  const { increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  
  return (
    <div className="cart-item-container">
      <div>
        <img
          className="product-image-cart"
          src={`${item.photo}`}
          alt={item.name}
        />
      </div>
      <div>
        <h3>{item.name}</h3>
        <h4>Size: {item.size}</h4>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
      <div>
        <p>Qty: {item.quantity}</p>
      </div>
      <div>
        <button onClick={() => increaseQty!(item)} className="btn-qty increase">&#43;</button>
        <button onClick={() => decreaseQty!(item)} className="btn-qty decrease">&#8722;</button>
        <button onClick={() => removeItem!(item)} className="btn-qty trash">
          <img src={process.env.PUBLIC_URL + '/images/trash.svg'} alt="trash can"/>
        </button>
      </div>
    </div>
  )
}

export default CartItem;