import React from 'react'
import { CardContainerStyled, CartInfo, HandleQuantity, HandleQuantityContainer } from './CardsCheckoutStyles'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../redux/Cart/CartSlice';
import {BsTrash3} from 'react-icons/bs'
import { BiPlus, BiMinus } from 'react-icons/bi'

const CardsCheckout = ({ img, name, price, quantity, id }) => {
    const dispatch = useDispatch()

  return (
    <CardContainerStyled>
        <img src= {img} alt={name} />
        <CartInfo>
            <h3>{name}</h3>
        </CartInfo>
            <HandleQuantityContainer>
                <p>${price}</p>
                <HandleQuantity>
                     <span onClick={() => dispatch (removeToCart( id))}> {quantity === 1 ? <BsTrash3 color='white'/> : <BiMinus/> }</span>
                     <span>{quantity}</span>
                     <span onClick={() => dispatch (addToCart({ img, name, price, quantity, id}))}> <BiPlus /> </span>
        </HandleQuantity>
            </HandleQuantityContainer>
    </CardContainerStyled>
  )
}

export default CardsCheckout