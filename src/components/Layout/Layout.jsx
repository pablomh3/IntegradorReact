import { LayoutWrapper } from "./LayoutStyles";
 import { useLocation } from "react-router-dom"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../redux/Cart/CartSlice";

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const hiddenCart = useSelector( state=> state.cart.hidden)

     const { pathname } = useLocation ();
    useEffect (() => {

        if (!hiddenCart){
            dispatch (toggleHiddenCart())
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return <LayoutWrapper>{ children } </LayoutWrapper>
};

export default Layout;