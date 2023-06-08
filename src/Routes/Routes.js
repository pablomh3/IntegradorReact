import { Routes as ReactRoutes, Route} from 'react-router-dom'
import Main from '../pages/Main/Main'
import IniciarSesion from '../pages/IniciarSesion/IniciarSesion';
import Registro from '../pages/Registro/Registro';
import NotFound from '../pages/NotFound/NotFound';
import Checkout from '../pages/Checkout/Checkout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';



function Routes  () {
    return(
        <>
            <ReactRoutes>
                <Route path='/' element={<Main/>} />
                <Route path='/iniciar-sesion' element={<IniciarSesion/>} />
                <Route path='/registrarse' element={<Registro/>} />
                <Route path='/checkout' element={<ProtectedRoute redirectTo='/registrarse'>
                    <Checkout/>
                </ProtectedRoute> }/>
                <Route path='*' element={<NotFound/>} />
                
            </ReactRoutes>
        </>
    )
}

export default Routes;