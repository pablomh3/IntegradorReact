import React, { useEffect } from 'react'
import { Button, OrdenesContainer, OrdenesWrapper,  OrderContainerStyled } from './MisOrdenesStyles'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import CardsOrdenes from './CardsOrdenes'
import { useNavigate } from 'react-router-dom'
import { clearError, fetchOrdersFail } from '../../redux/Orders/OrdersSlice'
import { getOrders } from '../../axios/axios-orders'

const MisOrdenes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const { orders, error } = useSelector(state => state.orders);
   console.log(orders)
    console.log(currentUser)
    useEffect(() => {
      if (!orders) {
        getOrders(dispatch, currentUser);
      }
      if (!currentUser?.token) {
        dispatch(fetchOrdersFail());
      } else {
        error && dispatch(clearError());
      }
    }, [dispatch, currentUser?.token, orders, error]);
  
  return (
    <OrdenesWrapper>
        <OrdenesContainer>
            <h1>Órdenes aprobadas</h1>

            <OrderContainerStyled>

        {
        orders?.length ? (
          orders.map(order => <CardsOrdenes key={order._id} {...order} />)
        ): (
          <h2>No tenés pedidos realizados</h2>
        )
      }
                
            </OrderContainerStyled>
            <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </OrdenesContainer>
    </OrdenesWrapper>
  )
}

export default MisOrdenes