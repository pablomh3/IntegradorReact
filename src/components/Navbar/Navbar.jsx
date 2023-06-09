import { LogoImg, NavbarContainer, NavbarLi, NavbarUl, IniciaSesion, ContainerUserCarrito, Registrarse } from "./Navbar.Styles"
import { ImUser, ImUserPlus } from 'react-icons/im';
import { Link, useNavigate } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import { CarritoContainer } from "../Carrito/CarritoContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/User/userSlice";

const Navbar =() =>{

const currentUser = useSelector(state => state.user.currentUser);
const dispatch = useDispatch();     
 const navigate = useNavigate ();

    return(
        <>
         <NavbarContainer>
         <Carrito ></Carrito>
            <LogoImg>
                <Link to='/'> <img src="https://integradorjavascript-taupe.vercel.app/img/logo-nombre1.png" alt="logo" /></Link>
                
            </LogoImg>
            <NavbarUl>
               <NavbarLi> <Link to='/'> Home </Link>  </NavbarLi> 
               
              
            </NavbarUl>
            <ContainerUserCarrito>
                { currentUser ? 
                <>
                    <IniciaSesion onClick={() => navigate('/mis-ordenes')}> <ImUser size={22}/> <u> {currentUser.nombre} </u> </IniciaSesion>
                    <Registrarse onClick={() => {dispatch(setCurrentUser(null))}}>  <u>Cerrar sesión </u></Registrarse>
                </> :
                <>
                
                <IniciaSesion onClick={() => navigate('/iniciar-sesion')}> <ImUser size={22}/> <u> Iniciá Sesión </u></IniciaSesion>
                <Registrarse onClick={() => navigate('/registrarse')}> <ImUserPlus size={17}/>¿No tenés cuenta? <u> Registrate</u> </Registrarse>
                </>
                }

            
           
            </ContainerUserCarrito> 
            <CarritoContainer/>
            
        </NavbarContainer>
        
        </>
       
    )
}
export default Navbar

// #181818