import React from "react";
import CartIcon from '../Cart/CartIcon';
import { Badge, IconContainer, StyledButton } from "./HeaderCartButton.styles";

const HeaderCartButton = (props) => {
  return (
    <StyledButton>
      <IconContainer>
        <CartIcon />
      </IconContainer>
      <span>Your Cart</span>
      <Badge>3</Badge>
      {/* dummy value  */}
    </StyledButton>
  )
};

export default HeaderCartButton;
