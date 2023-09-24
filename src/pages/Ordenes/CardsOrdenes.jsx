import React from 'react'
import { Orders } from './MisOrdenesStyles'

const CardsOrdenes = ({ createdAt, total, _id }) => {

  return (
    <Orders> 
            <h3>ID de la Orden: #{_id.slice(0, 7)}</h3>
            <p> <strong> Fecha: </strong> {createdAt.slice(0, 10)}</p>
            <h2> ${total}</h2>
    </Orders>
  )
}

export default CardsOrdenes