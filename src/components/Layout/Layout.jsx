import { LayoutWrapper } from "./LayoutStyles";
 import { useLocation } from "react-router-dom"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../redux/Cart/CartSlice";
import { toggleHiddenMenu } from "../../redux/User/userSlice";

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const hiddenCart = useSelector( state=> state.cart.hidden)
    const hiddenMenu = useSelector (state=> state.user.hiddenMenu)
     const { pathname } = useLocation ();
    useEffect (() => {

        if (!hiddenCart){
            dispatch (toggleHiddenCart())
        }
        if (!hiddenMenu){
            dispatch (toggleHiddenMenu())
        }
        window.scrollTo(0, 0)
    },[pathname]);

    return <LayoutWrapper>{ children } </LayoutWrapper>

};

export default Layout;