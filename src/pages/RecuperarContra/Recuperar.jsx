import { Formik } from "formik"
import { ContainerIniciarSesion, Form, H3Recover, IniciarSesionWrapper, LinkLogIn, LinksLogIn, LogInButton } from "../IniciarSesion/IniciarSesionStyles"
import { useNavigate } from "react-router-dom"
import IniciarSesionForm from "../IniciarSesion/IniciarSesionFormik";
import { sendEmailValues } from "../../components/Formik/InitialValues";
import { sendEmailValidationSchema } from "../../components/Formik/ValidationSchema";
import { useDispatch } from "react-redux";
import { useRedirect } from "../../hooks/UseRedirect";
import { setCurrentUser } from "../../redux/User/userSlice";
import { sendEmail } from "../../axios/axios.user";

const RecuperarClave =() =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useRedirect('/')
    return(
        <IniciarSesionWrapper>
            
             <ContainerIniciarSesion>
             <h1>Recuperar contraseña</h1>
             <Formik 
               initialValues={sendEmailValues}
               validationSchema={sendEmailValidationSchema}
               onSubmit={async (values) => {
                const user = await sendEmail(values.email)
                if (user){
                    dispatch(setCurrentUser({
                        ...user.usuario,
                        token: user.token
                    }))
                }
            }}>
                    <Form>

                        <IniciarSesionForm
                        name='email'
                        type='text'
                        placeholder='email@email.com'>
                            Ingrese su email:
                        </IniciarSesionForm>
                        <H3Recover>Recibirás un código y un link para generar una nueva clave</H3Recover>
                        <LinksLogIn>
                            <LinkLogIn onClick={() => navigate('/registrarse')}>¿No tenés cuenta? <u>Registrate</u></LinkLogIn>
                        </LinksLogIn>
                       
                        <LogInButton onClick={() => setTimeout (navigate ('/contraseña'), 1000 )}>Recuperar</LogInButton>
                    </Form>
               </Formik>
            </ContainerIniciarSesion>
        </IniciarSesionWrapper>
           
        
    )
}

export default RecuperarClave