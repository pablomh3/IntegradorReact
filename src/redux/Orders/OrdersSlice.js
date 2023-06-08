import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: null,
    loading: false,
    error: null,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        createOrderFail: (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        fetchOrderSuccess: (state, action) =>{
            return{
                ...state,
                loading: false,
                error: null,
                orders:[...action.payload]
            }
        }
    }
})