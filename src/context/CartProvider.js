import React,{ useReducer } from "react"
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (currState, action) => {
    switch (action.type){
        case 'ADD_ITEM': {
            //try to find currently being added item and add update if more items are added
            const existingCartItemIndex = currState.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = currState.items[existingCartItemIndex];
            let updatedItems;
            
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...currState.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = currState.items.concat(action.item);
            }

            const updatedTotalAmount = currState.totalAmount + action.item.price * action.item.amount;
            return { items: updatedItems, totalAmount: updatedTotalAmount };
        }
        case 'REMOVE_ITEM': {
            const existingCartItemIndex = currState.items.findIndex(item => item.id === action.id);
            const existingItem = currState.items[existingCartItemIndex];
            const updatedTotalAmount = currState.totalAmount - existingItem.price;
            let updatedItems;
            //if only one remaining
            if(existingItem.amount === 1){
                //Get items without current id (we're removing it since we're decreasing the amount by 1 and there's only 1 left)
                updatedItems = currState.items.filter(item => item.id !== action.id);
            }
            else {
                const updatedItem = {...existingItem, amount: existingItem.amount -1 };
                updatedItems = [...currState.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return { items : updatedItems, totalAmount: updatedTotalAmount };
        }
        default: return defaultCartState;
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item}); 
    };
    
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id}); 
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
