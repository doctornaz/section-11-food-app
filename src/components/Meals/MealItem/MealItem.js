import React, {useContext} from "react"
import CartContext from "../../../context/cart-context";
import { MealItemDescription, MealItemPrice, MealListItem } from "./MealItem.styles";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <MealListItem>
        <div>
            <h3>{props.name}</h3>
            <MealItemDescription>{props.description}</MealItemDescription>
            <MealItemPrice>{price}</MealItemPrice>
        </div>
        <div>
            <MealItemForm onAddToCart={addItemToCartHandler}/>
        </div>
    </MealListItem>
  )
};

export default MealItem;
