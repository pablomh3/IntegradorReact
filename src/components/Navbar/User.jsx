import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ImUser, ImUserPlus } from 'react-icons/im';
import { FaUserMinus } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/User/userSlice";
import { ContactoNavbar, ContainerUser, IniciaSesionUser, ListaProductos, ProductosH2, RegistrarseUser } from './UserStyles';
import { MdGames } from 'react-icons/md'
import UserCategories from './UserCategories';
import { MdOutlineEmail } from "react-icons/md";

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
                    <RegistrarseUser onClick={() => {dispatch(setCurrentUser(null)); {navigate('/')} }} > <FaUserMinus size={14}/> <u>Cerrar sesión </u></RegistrarseUser>
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
                <ContactoNavbar onClick={() => navigate ('/contacto')}> <MdOutlineEmail size={16} color='var(--cyan)' /> Contacto</ContactoNavbar>
                

              </ListaProductos>
            </ContainerUser>
        
      )

      }
        
    </AnimatePresence>
        
    
    </>
    
  )
}

export default User