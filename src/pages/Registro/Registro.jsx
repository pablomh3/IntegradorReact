import { Formik } from "formik"
import { Form, FormularioContainer, LinkRegister, LinksRegister, RegisterButton } from "../Registro/RegistroStyles"
import { RegistroContainer, RegistroTitle, RegistroWrapper } from "./RegistroStyles"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { registerInitialValues } from "../../components/Formik/InitialValues"
import { registerValidationSchema } from "../../components/Formik/ValidationSchema"
import { createUser } from "../../axios/axios.user"
import { setCurrentUser } from "../../redux/User/userSlice"
import { useRedirect } from "../../hooks/UseRedirect"
import RegisterForm from "./RegisterFormik"
import Loader from "../../components/Loader/Loader"

const Registro =() => {

    const dispatch = useDispatch()
    const { state } = useLocation()
    useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/')
    const navigate = useNavigate()
    return(

        <RegistroWrapper>
            <RegistroContainer>
            <RegistroTitle>
                <h2> Ingresá en un mundo de beneficios</h2>
            </RegistroTitle>
            <FormularioContainer>
                <h2>Llená el formulario y formá parte de nuestra comunidad</h2>
                <Formik 
                 initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={async (values, actions) => {
                    const user = await createUser(values.name, values.email, values.password)
                    actions.resetForm()
                   navigate('/iniciar-sesion')
                }}
                 >
                    {({ isSubmitting}) =>(
                    <Form>
                        <RegisterForm htmlFor='nombre'
                        name='name'
                        type='text'
                        id='nombre'
                        placeholder='Tu nombre'>
                            Nombre:
                        </RegisterForm>
                        <RegisterForm htmlFor='email'
                        name='email'
                        type='email'
                        id='email'
                        placeholder='email@email.com'>
                            Email:
                        </RegisterForm>

                        <RegisterForm htmlFor='password'
                        name='password'
                        type='password'
                        id='password'
                        placeholder='contraseña'>
                            Contraseña:
                        </RegisterForm>
                        <LinksRegister>
                            <LinkRegister onClick={() => navigate('/iniciar-sesion')}> ¿Ya tenés cuenta? <u>Iniciar Sesión</u></LinkRegister>
                        </LinksRegister>
                        <RegisterButton type="submit">{isSubmitting ? <Loader/>  : 'Enviar'}</RegisterButton>
                    </Form>
                )}    
                </Formik>
            </FormularioContainer>
        </RegistroContainer>
        </RegistroWrapper>
        
    )
}
export default Registro