import React from 'react'
import { Orders } from './MisOrdenesStyles'
import { formatDate } from '../../constants/constants'

const CardsOrdenes = ({ createdAt, total, _id }) => {

  return (
    <Orders> 
            <h3>ID de la Orden: #{_id.slice(0, 7)}</h3>
            <p> <strong> Fecha: </strong> {formatDate({createdAt})}</p>
            <h2> ${total}</h2>
    </Orders>
  )
}

export default CardsOrdenes