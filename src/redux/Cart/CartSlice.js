import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./Cart-utils";
import { SHIPPING } from "../../constants/constants";

const initialState = {
cartItems: [],
shippingCost: 0,
hidden: true,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload),
              shippingCost: SHIPPING,
            };
          },
        removeToCart: (state, action) =>{
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING)
            }
        },
        clearCart: (state) =>{
            return{
                ...state,
                cartItems:[],
                shippingCost: 0,
            }
        },
        toggleHiddenCart: (state) =>{
            return{
                ...state,
                hidden: !state.hidden,
            }
        },
    }
})

export const { addToCart, removeToCart, clearCart, toggleHiddenCart } = CartSlice.actions;

export default CartSlice.reducer;