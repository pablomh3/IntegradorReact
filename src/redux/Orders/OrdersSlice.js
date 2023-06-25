import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: null,
    loading: false,
    error: null,
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        createOrdersFail: (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        fetchOrdersSuccess: (state, action) =>{
            return{
                ...state,
                loading: false,
                error: null,
                orders:[...action.payload]
            }
        },

        fetchOrdersFail: (state, action) =>{
            alert('error')
            return{
                ...state,
                loading: false,
                error: action.payload,
            
            }
        },
        fetchOrdersStart: (state) =>{
            return{
                ...state,
                loading: true,
            }
        },
        clearError: (state) =>{
            return{
                ...state,
                error: null,
            }
        },
        clearOrders: (state) =>{
            return{
                ...state,
                orders: null,
            }
        },
    }
})

export const { createOrdersFail, fetchOrdersSuccess, fetchOrdersFail, fetchOrdersStart, clearError, clearOrders
} = ordersSlice.actions

export default ordersSlice.reducer