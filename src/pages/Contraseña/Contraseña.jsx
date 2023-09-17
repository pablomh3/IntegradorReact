import { Formik } from "formik"
import { ContainerIniciarSesion, Form, IniciarSesionWrapper, LogInButton } from "../IniciarSesion/IniciarSesionStyles"
import IniciarSesionForm from "../IniciarSesion/IniciarSesionFormik";
import { useDispatch } from "react-redux";
import { useRedirect } from "../../hooks/UseRedirect";
import { setCurrentUser } from "../../redux/User/userSlice";
import { newPasswordValues } from "../../components/Formik/InitialValues";
import { newPasswordValidationSchema } from "../../components/Formik/ValidationSchema";
import { recoverPassword } from "../../axios/axios.user";

const NuevaContraseña =() =>{

    const dispatch = useDispatch();
    useRedirect('/')
    return(
        <IniciarSesionWrapper>
            
             <ContainerIniciarSesion>
             <h1>Crear nueva contraseña</h1>
             <Formik 
               initialValues={newPasswordValues}
               validationSchema={newPasswordValidationSchema}
               onSubmit={async (values) => {
                const user = await recoverPassword (values.email, values.code, values.password)
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
                        <IniciarSesionForm 
                        name='code'
                        type='text'
                        placeholder='123456'>
                            Ingrese su código de 6 dígitos:
                        </IniciarSesionForm>
                        <IniciarSesionForm 
                        name='password'
                        type='password'
                        placeholder='********'>
                            Ingrese su nueva contraseña:
                        </IniciarSesionForm>
                       
                        <LogInButton>Enviar</LogInButton>
                    </Form>
               </Formik>
            </ContainerIniciarSesion>
        </IniciarSesionWrapper>
           
        
    )
}

export default  NuevaContraseña