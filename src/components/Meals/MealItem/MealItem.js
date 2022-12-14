import React from "react"
import { MealItemDescription, MealItemPrice, MealListItem } from "./MealItem.styles";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

  return (
    <MealListItem>
        <div>
            <h3>{props.name}</h3>
            <MealItemDescription>{props.description}</MealItemDescription>
            <MealItemPrice>{price}</MealItemPrice>
        </div>
        <div></div>
    </MealListItem>
  )
};

export default MealItem;
