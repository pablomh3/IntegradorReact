import { LogoImg, NavbarContainer, NavbarLi, NavbarUl, IniciaSesion, ContainerUserCarrito, Registrarse, LogoMini, UserContainer } from "./Navbar.Styles"
import { ImUser, ImUserPlus } from 'react-icons/im';
import { Link, useNavigate } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import { CarritoContainer } from "../Carrito/CarritoContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../redux/User/userSlice";
import User from "./User";
import { GiHamburgerMenu } from 'react-icons/gi'
import { toggleHiddenCart } from "../../redux/Cart/CartSlice";
import { FaUserMinus } from 'react-icons/fa';

const Navbar =() =>{

const currentUser = useSelector(state => state.user.currentUser);
const {
    hidden: hiddenCart,
  } = useSelector(state => state.cart)
const dispatch = useDispatch();     
 const navigate = useNavigate ();

    return(
        <>
         <NavbarContainer>
         <User></User>
            <Carrito></Carrito>
            
            <LogoImg>
                <Link to='/'> <img src="https://integradorjavascript-taupe.vercel.app/img/logo-nombre1.png" alt="logo" /></Link>
            </LogoImg>
            

            <UserContainer onClick={() => hiddenCart ?  dispatch (toggleHiddenMenu()) : dispatch (toggleHiddenCart()) & dispatch (toggleHiddenMenu())} >
                <GiHamburgerMenu size={22} />
            </UserContainer>
            <NavbarUl>
                <NavbarLi> <Link to='/productos'> Productos </Link>  </NavbarLi> 
                <NavbarLi> <Link to='/contacto'> Contacto </Link>  </NavbarLi> 
            </NavbarUl>
            <LogoMini>
                <Link to='/'> <img src="https://integradorjavascript-taupe.vercel.app/img/logosolo.png" alt="logo" /></Link>
            </LogoMini>
            <ContainerUserCarrito>
                { currentUser ? 
                <>
                    <IniciaSesion onClick={() => navigate('/mis-ordenes')}> <ImUser size={22}/> <u> Mis órdenes </u> </IniciaSesion>
                    <Registrarse onClick={() => {dispatch(setCurrentUser(null)); {navigate('/')} }} >  <FaUserMinus size={21}/> <u>Cerrar sesión </u> </Registrarse>
                </> 
                :
                <>
                <IniciaSesion onClick={() => navigate('/iniciar-sesion')}> <ImUser size={18}/> <u> Iniciá Sesión </u></IniciaSesion>
                <Registrarse onClick={() => navigate('/registrarse')}> <ImUserPlus size={16}/> <u> Registrate</u> </Registrarse>
                </>
                }
            </ContainerUserCarrito> 
           
           
            
            <CarritoContainer/>
            
        </NavbarContainer>
        
        </>
       
    )
}
export default Navbar
