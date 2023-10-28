import { Formik } from "formik"
import { ContainerIniciarSesion, Form, IniciarSesionWrapper, LinkLogIn, LinksLogIn, LogInButton } from "./IniciarSesionStyles"
import { useNavigate } from "react-router-dom"
import IniciarSesionForm from "./IniciarSesionFormik";
import { logInInitialValues } from "../../components/Formik/InitialValues";
import { logInValidationSchema } from "../../components/Formik/ValidationSchema";
import { useDispatch } from "react-redux";
import { useRedirect } from "../../hooks/UseRedirect";
import { loginUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/User/userSlice";
import Loader from "../../components/Loader/Loader";

const IniciarSesion =() =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useRedirect('/productos')
    return(
        <IniciarSesionWrapper>
            
             <ContainerIniciarSesion>
             <h1>Por favor ingrese sus datos</h1>
             <Formik 
               initialValues={logInInitialValues}
               validationSchema={logInValidationSchema}
               onSubmit={async (values) => {
                const user = await loginUser(values.email, values.password)
                if (user){
                    dispatch(setCurrentUser({
                        ...user.usuario,
                        token: user.token
                    }))
                }
            }}>
                 {({ isSubmitting}) =>(
                    <Form>

                        <IniciarSesionForm
                        name='email'
                        type='text'
                        placeholder='email@email.com'>
                            Email:
                        </IniciarSesionForm>

                        <IniciarSesionForm
                        name='password'
                        type='password'
                        
                        placeholder='Contraseña'>
                            Contraseña:
                        </IniciarSesionForm>
                        <LinksLogIn>
                            <LinkLogIn onClick={() => navigate('/recuperar')}> <u> Olvidé mi contraseña</u> </LinkLogIn>
                            <LinkLogIn onClick={() => navigate('/registrarse')}>¿No tenés cuenta? <u>Registrate</u></LinkLogIn>
                        </LinksLogIn>
                        <LogInButton type="submit" > {isSubmitting ? <Loader/>  : 'Enviar'}</LogInButton>
                    </Form>
                )}
               </Formik>
            </ContainerIniciarSesion>
        </IniciarSesionWrapper>
           
        
    )
}

export default IniciarSesion