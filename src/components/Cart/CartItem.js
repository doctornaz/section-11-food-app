import { CartItemActions, CartItemAmount, CartItemLi, CartItemPrice, CartItemSummary } from './CartItem.styles';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <CartItemLi>
      <div>
        <h2>{props.name}</h2>
        <CartItemSummary>
          <CartItemPrice>{price}</CartItemPrice>
          <CartItemAmount>x {props.amount}</CartItemAmount>
        </CartItemSummary>
      </div>
      <CartItemActions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </CartItemActions>
    </CartItemLi>
  );
};

export default CartItem;
