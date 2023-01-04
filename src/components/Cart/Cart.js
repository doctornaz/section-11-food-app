import React, { useContext } from "react"
import Modal from "../UI/Modal";
import CartContext from '../../context/cart-context';
import { ActionsSection, CartItems, CloseButton, OrderButton, TotalSection } from "./Cart.styles";
import CartItem from "./CartItem";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <CartItems>
      {cartCtx.items.map( (item) => 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} />
      )}
    </CartItems>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <TotalSection>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalSection>
      <ActionsSection>
        <CloseButton onClick={props.onClose}>Close</CloseButton>
        {hasItems && <OrderButton>Order</OrderButton>}
      </ActionsSection>
    </Modal>
  )
};

export default Cart;