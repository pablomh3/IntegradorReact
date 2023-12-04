import { Routes as ReactRoutes, Route} from 'react-router-dom'
import Main from '../pages/Main/Main'
import IniciarSesion from '../pages/IniciarSesion/IniciarSesion';
import Registro from '../pages/Registro/Registro';
import NotFound from '../pages/NotFound/NotFound';
import Checkout from '../pages/Checkout/Checkout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import MisOrdenes from '../pages/Ordenes/MisOrdenes';
import Products from '../pages/Products/Products';
import RecuperarClave from '../pages/RecuperarContra/Recuperar';
import NuevaContraseña from '../pages/Contraseña/Contraseña';
import Contacto from '../pages/Contacto/Contacto';



function Routes  () {
    return(
        <>
            <ReactRoutes>
                <Route path='/' element={<Main/>} />
                <Route path='/iniciar-sesion' element={<IniciarSesion/>} />
                <Route path='/registrarse' element={<Registro/>} />
                <Route path='/productos' element={<Products/>} />
                <Route path='/felicitaciones' element={<Felicitaciones />} />
                <Route path='/recuperar' element={<RecuperarClave />} />
                <Route path='/mis-ordenes' element={<MisOrdenes />} />
                <Route path='/contraseña' element= {<NuevaContraseña/> } />
                <Route path='/contacto' element= {<Contacto/> } />
                <Route path='/checkout' element={<ProtectedRoute redirectTo='/registrarse'>
                    <Checkout/>
                </ProtectedRoute> }/>
                <Route path='*' element={<NotFound/>} />
                
            </ReactRoutes>
        </>
    )
}

export default Routes;