import React from 'react'
import { Card, CardButton, CardButtonContainter, CardH3, CardPrecio } from './ProductsStyles'
import { useDispatch }  from 'react-redux'
import { addToCart } from '../../redux/Cart/CartSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ name, img, price, id}) => {
  const dispatch = useDispatch()

  return (

    <>
      <Card>
      <ToastContainer/>
        <img src={img} alt={name} />
                    <CardH3>
                        <h3>{name}</h3>
                    </CardH3>
                    <CardPrecio> <p> ${price}</p></CardPrecio>
                    <CardButtonContainter>
                        <CardButton onClick={() => { dispatch(addToCart({ name, img, price, id }));
                        toast.success("Producto agregado al carrito", {
                          position: "bottom-center"
                        });
                      
                      }} > AGREGAR AL CARRITO</CardButton>
                    </CardButtonContainter>
    
    </Card>
    </>
 
        
  )
}

export default Cards