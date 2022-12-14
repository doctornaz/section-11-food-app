import React from "react"
import { ImageContainer, StyledHeader } from "./Header.styles";
import importsImage from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <>
      <StyledHeader>
        <h1>React Meals</h1>
        <button>Cart</button>
      </StyledHeader>
      <ImageContainer>
        <img src={importsImage} alt='A table full of delicious food!'/>
      </ImageContainer>
    </>
  )
};

export default Header;
