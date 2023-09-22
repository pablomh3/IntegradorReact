import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import {
  createOrdersFail,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from '../redux/Orders/OrdersSlice';

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStart());
 
  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      mode: 'cors',
      headers: {
        'x-token': currentUser.token,
      },
      
    });

    
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }

    if (!orders) {
      alert("no se encontraron órdenes")
      return
    }
  } catch (error) {
    console.error({ error });
    dispatch(
      fetchOrdersFail('Oops, algo salío mal')
    );
    return
  }
};

export const createOrder = async (order, dispatch, currentUser) => {

  console.log('Order:', order);
  console.log('Dispatch:', dispatch);
  console.log('CurrentUser:', currentUser);
  
  console.log(currentUser.token)
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        'x-token': currentUser.token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    dispatch(createOrdersFail());
  }
};

