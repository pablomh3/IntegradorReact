import React from 'react'
import { ContainerCheckout } from './CheckoutStyles'
import Formulario from '../../components/Checkout/Form/Form'
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const { cartItems, shippingCost } = useSelector( state => state.cart);
    const totalPrice = cartItems.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
      );
  return (
    <ContainerCheckout>
        <Formulario cartItems = {cartItems} shippingCost = {shippingCost} price ={totalPrice} >
        </Formulario>
        <ProductsCheckout cartItems = {cartItems} shippingCost = {shippingCost} price ={totalPrice}>

        </ProductsCheckout>
    </ContainerCheckout>
  )
}

export default Checkout