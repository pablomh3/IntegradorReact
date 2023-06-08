import React from 'react'
import { Card, CardButton, CardButtonContainter, CardH3, CardPrecio } from './ProductsStyles'
import { useDispatch }  from 'react-redux'
import { addToCart } from '../../redux/Cart/CartSlice'

const Cards = ({ name, img, price, id}) => {
  const dispatch = useDispatch()

  return (

   <Card>
        <img src={img} alt={name} />
                    <CardH3>
                        <h3>{name}</h3>
                    </CardH3>
                    <CardPrecio> <p> ${price}</p></CardPrecio>
                    <CardButtonContainter>
                        <CardButton onClick={ () => dispatch(addToCart({ name, img, price, id }))}>AGREGAR AL CARRITO</CardButton>
                    </CardButtonContainter>
    
    </Card>
        
  )
}

export default Cards