import React from 'react'
import { ButtonComprar, ButtonVaciar, Cart, ContainerProducts, Divider, TotalContainer } from './CarritoStyles'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from './CartProducts';
import { useNavigate } from 'react-router-dom';
import { clearCart} from '../../redux/Cart/CartSlice';
const Carrito = (id) => {
  const navigate = useNavigate()
  const {
    cartItems,
    hidden: hiddenCart,
  } = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
   const dispatch = useDispatch()

  return (
  <>
  {!hiddenCart && (
  <Cart>
  <h2>Tu Carrito</h2>

<ContainerProducts>
{
    cartItems.length ? ( cartItems.map(item =>( <CartProducts key={item.id} {...item}/>))) : (
      <p> No tenés productos en el carrito </p>
    )
  }
</ContainerProducts>
 

  <Divider/>
  { cartItems.length ? ( <TotalContainer>
    <p>Subtotal:</p>
    <span>${ totalPrice }</span>
  </TotalContainer>) : ('')}
 
 
    
 
<ButtonComprar disabled={ cartItems.length < 1} onClick={() => navigate('/checkout') }

>Comprar</ButtonComprar>
<ButtonVaciar disabled={ cartItems.length < 1} onClick={() => dispatch (clearCart (id))}>Vaciar Carrito</ButtonVaciar>
</Cart>
  )}   
</>
  )} 
export default Carrito