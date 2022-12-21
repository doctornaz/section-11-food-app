import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from '../Cart/CartIcon';
import { Badge, IconContainer, StyledButton } from "./HeaderCartButton.styles";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const itemsAmount = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <StyledButton onClick={props.onClick}>
      <IconContainer>
        <CartIcon />
      </IconContainer>
      <span>Your Cart</span>
      <Badge>{itemsAmount}</Badge>
      {/* dummy value  */}
    </StyledButton>
  )
};

export default HeaderCartButton;
