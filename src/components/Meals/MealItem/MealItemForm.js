import React from "react"
import Input from "../../UI/Input";
import { StyledForm } from "./MealItemForm.styles";

const MealItemForm = (props) => {
  return (
    <StyledForm>
      <Input 
        label='Amount' 
        input={{
          id: 'amount_' + props.id,
          type:'number', 
          min:'1', 
          max: '5', 
          step: '1', 
          defaultValue: '1'
        }} 
      />
      <button>+ Add</button>
    </StyledForm>
  )
};

export default MealItemForm;
