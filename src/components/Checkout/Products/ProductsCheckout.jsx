import React from 'react'
import { CardsWrapper, ProductosContainerStyled, SubTotalDivider, TotalContainer, TotalDivider } from './ProductsCheckoutStyles'
import CardsCheckout from '../../CardsCheckout/CardsCheckout'


const ProductsCheckout = ({ cartItems, shippingCost, price }) => {

  return (
    <ProductosContainerStyled>
        <h2>Tu pedido</h2>
        <CardsWrapper>
        {
          cartItems.length ? (
            cartItems.map(item => <CardsCheckout key={item.id} {...item} />)
          ) : (
            <p>Tu carrito se encuentra vacío</p>
          )
        }
        </CardsWrapper>
            {cartItems.length ? 
            
            <TotalContainer>
                <SubTotalDivider>
                    <p>Subtotal:</p>
                    <span>${ price }</span>
                </SubTotalDivider>
                <SubTotalDivider>
                <p>Envío:</p>
                <span> ${shippingCost} </span>
                </SubTotalDivider>
                <TotalDivider>
                    <p>Total:</p>
                    <span> ${price + shippingCost} </span>
                </TotalDivider>
           
            </TotalContainer> : ''}
             
        

    </ProductosContainerStyled>
  )
}

export default ProductsCheckout