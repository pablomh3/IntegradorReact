import React from 'react';
import { CarroContainer } from '../Navbar/Navbar.Styles';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleHiddenCart } from '../../redux/Cart/CartSlice';

export const CarritoContainer = () =>{
    const dispatch = useDispatch()
   
    return (
        <CarroContainer onClick={() => dispatch (toggleHiddenCart())}>
            <BsCart3 size={22}/>
        </CarroContainer>
    )
}