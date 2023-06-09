import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { createOrderFail, fetchOrderFail, fetchOrderStart, fetchOrderSuccess } from '../redux/Orders/OrdersSlice';

export const getOrders = async (dispatch, currentUser) =>{
dispatch(fetchOrderStart())

try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
        headers: {
            'x-token': currentUser.token
        }
    });
    if (orders){
        dispatch(fetchOrderSuccess(orders.data.data))
    }
} catch (error) {
    console.log({error})
    dispatch(fetchOrderFail('error, no hay órdenes sin usuario'))
}
}

export const createOrder = async (order, dispatch, currentUser) =>{
    try {
        const response = await axios.post(`${BASE_URL}/orders`, order, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if(response){
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
        dispatch(createOrderFail())
    }
}
