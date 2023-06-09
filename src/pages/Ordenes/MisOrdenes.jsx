import React from 'react'
import { OrdenesContainer, OrdenesWrapper, Orders, OrderContainerStyled } from './MisOrdenesStyles'

const MisOrdenes = () => {
  return (
    <OrdenesWrapper>
        <OrdenesContainer>
            <h1>Órdenes aprobadas</h1>

            <OrderContainerStyled>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
                <Orders> 
                    <h3>ID de la Orden: 2930</h3>
                    <p> fecha 12/12/1222</p>
                    <h2>$6709</h2>
                </Orders>
            </OrderContainerStyled>
        </OrdenesContainer>
    </OrdenesWrapper>
  )
}

export default MisOrdenes