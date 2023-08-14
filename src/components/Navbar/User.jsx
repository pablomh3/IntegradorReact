import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ImUser, ImUserPlus } from 'react-icons/im';
import { FaUserMinus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/User/userSlice";
import { ContainerUser, IniciaSesionUser, ListaProductos, ProductosH2, RegistrarseUser } from './UserStyles';
import { MdGames } from 'react-icons/md'
import UserCategories from './UserCategories';
const User = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();     
    const navigate = useNavigate ();
    const hiddenMenu = useSelector(state => state.user.hiddenMenu);
  return (
    <>
    <AnimatePresence>

      {!hiddenMenu && (    <ContainerUser initial={{ translateX: -500 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -500 }}
                transition={{ type: 'spring', damping: 27 }}>
                  { currentUser ? 
                <>
                    <IniciaSesionUser onClick={() => navigate('/mis-ordenes')}> <ImUser size={15}/> <u> Mis órdenes </u> </IniciaSesionUser>
                    <RegistrarseUser onClick={() => {dispatch(setCurrentUser(null))}}> <FaUserMinus size={14}/> <u>Cerrar sesión </u></RegistrarseUser>
                </> :
                <>
                <IniciaSesionUser onClick={() => navigate('/iniciar-sesion')}> <ImUser size={14}/> <u> Iniciá Sesión </u></IniciaSesionUser>
                <RegistrarseUser onClick={() => navigate('/registrarse')}> <ImUserPlus size={12}/> <u> Registrate</u> </RegistrarseUser>
                </>
                }  
              <ListaProductos>
                <ProductosH2> <MdGames size={15} color='var(--cyan)'/> Productos</ProductosH2>
                <UserCategories>

                </UserCategories>

              </ListaProductos>
            </ContainerUser>
        
      )

      }
        
    </AnimatePresence>
        
    
    </>
    
  )
}

export default User