import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from '../Cart/CartIcon';
import { Badge, IconContainer, StyledButton } from "./HeaderCartButton.styles";

const HeaderCartButton = (props) => {
  const [btnAnimated, setBtnAnimated] = useState(false);
  const cartCtx = useContext(CartContext);

  //use object destructuring because if we use cartctx the animation will play whenever anything changes in cart context
  const { items } = cartCtx;

  const itemsAmount = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(()=> {
    if(items.length === 0) return;

    setBtnAnimated(true);
    //300ms because that's how it lasts in the styles file
    const timer = setTimeout(()=> {
      setBtnAnimated(false);
      //cleanup function in case we keep adding more items
      return () => clearTimeout(timer);
    }, 300);
  }, [items]); //if we do it like this, this will execute only whenever the items in the array changes

  return (
    <StyledButton onClick={props.onClick} animate={btnAnimated}>
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
