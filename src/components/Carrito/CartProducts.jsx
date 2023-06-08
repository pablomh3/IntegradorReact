import React from 'react'
import { CartContainer, CartInfo, HandleQuantity, HandleQuantityContainer } from './CarritoStyles'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../redux/Cart/CartSlice';
import {BsTrash3} from 'react-icons/bs'
import { BiPlus, BiMinus } from 'react-icons/bi'

const CartProducts = ({ img, name, price, quantity, id}) => {
    const dispatch = useDispatch ();

  return (
    <CartContainer>
    <img src={img} alt={name}/>
    <CartInfo>
      <h3>{name}</h3>
      <HandleQuantityContainer>
      <p>${price}</p>
        <HandleQuantity>
        <span onClick={() => dispatch (removeToCart( id))}> {quantity === 1 ? <BsTrash3 color='white'/> : <BiMinus/> }</span>
        <span>{quantity}</span>
        <span onClick={() => dispatch (addToCart({ img, name, price, quantity, id}))}> <BiPlus /> </span>
        </HandleQuantity>
      </HandleQuantityContainer>
    </CartInfo>
  </CartContainer>
  )
}

export default CartProducts