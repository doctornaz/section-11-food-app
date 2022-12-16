import React from "react"
import Modal from "../UI/Modal";
import { ActionsSection, CloseButton, OrderButton, TotalSection } from "./Cart.styles";


const Cart = (props) => {
    const cartItems = [
      { id: "c1", name: 'Sushi', amount: 2, price:12.99 },
    ].map((item)=> <li>{item.name}</li>);

  return (
    <Modal>
      {cartItems}
      <TotalSection>
        <span>Total Amount</span>
        <span>35.62</span>
      </TotalSection>
      <ActionsSection>
        <CloseButton>Close</CloseButton>
        <OrderButton>Order</OrderButton>
      </ActionsSection>
    </Modal>
  )
};

export default Cart;