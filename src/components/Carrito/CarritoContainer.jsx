import React from 'react';
import { CarroContainer } from '../Navbar/Navbar.Styles';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../redux/Cart/CartSlice';
import { toggleHiddenMenu } from '../../redux/User/userSlice';



export const CarritoContainer = () =>{
    const dispatch = useDispatch()
    const hiddenMenu = useSelector(state => state.user.hiddenMenu);

    return (
        <CarroContainer onClick={() => hiddenMenu ? dispatch (toggleHiddenCart()) :  dispatch (toggleHiddenMenu()) & dispatch (toggleHiddenCart()) }>
            <BsCart3 size={22}/>
        </CarroContainer>
    )
}