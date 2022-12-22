import React, { useContext } from "react"
import Modal from "../UI/Modal";
import CartContext from '../../context/cart-context';
import { ActionsSection, CartItems, CloseButton, OrderButton, TotalSection } from "./Cart.styles";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <CartItems>
      {cartCtx.items.map( (item) => 
        <li>{item.name}</li>
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