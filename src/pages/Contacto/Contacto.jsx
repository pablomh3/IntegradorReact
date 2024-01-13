
import { Form, Formik } from "formik"
import { ContactoContainer, ContactoData, ContactoForm, ContactoWrapper, ContactoTitle, DataTitle, DataInfo } from "./ContactoStyles"
import { ContactoInitialValues } from "../../components/Formik/InitialValues"
import { ContactoValidationSchema } from "../../components/Formik/ValidationSchema"
import ContactoFormik from "./ContactoFormik"
import ContactoMessageFormik from "./ContactoMessageFormik"
import { RegisterButton } from "../Registro/RegistroStyles"
import Loader from "../../components/Loader/Loader"
import { IoLocationOutline } from "react-icons/io5"
import { MdPhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { formContacto } from "../../axios/axios-contacto"

const Contacto = () => {
    return (
        <ContactoWrapper>
            <ContactoTitle> Contactate con nosotros </ContactoTitle>
        <ContactoContainer>
            <ContactoForm>
                <Formik
                    initialValues= {ContactoInitialValues}
                    validationSchema={ContactoValidationSchema}
                    onSubmit={async (values, actions) => {
                         await formContacto(values.name, values.email, values.phone, values.message)
                        actions.resetForm()
                    }}
                >
                 {({ isSubmitting}) => (
                  <Form>
                    <ContactoFormik htmlFor='nombre'
                        name='name'
                        type='text'
                        id='nombre'
                        placeholder='Tu nombre'>
                            Nombre:
                        </ContactoFormik>
                        <ContactoFormik htmlFor='email'
                        name='email'
                        type='email'
                        id='email'
                        placeholder='email@email.com'>
                            Tu email:
                        </ContactoFormik>
                        <ContactoFormik htmlFor='cellphone'
                        name='cellphone'
                        type='number'
                        id='cellphone'
                        placeholder='1122334455'>
                            Celular:
                        </ContactoFormik>
                        <ContactoMessageFormik htmlFor='message'
                        name='message'
                        type='text'
                        id='message'
                        placeholder='Escribe tu mensaje...'>
                            Consulta:
                        </ContactoMessageFormik>
                        <RegisterButton type="submit">{isSubmitting ? <Loader/>  : 'Enviar'}</RegisterButton>
                  </Form>  
                 )
                  }   

                </Formik>
            </ContactoForm>
            <ContactoData>
                  <DataTitle> <h2>¡Visitá nuestra sucursal!</h2></DataTitle>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0514584472653!2d-58.42455958417498!3d-34.602860264960974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca63f2b17d91%3A0x3b5b02b8be14e1c8!2sAv.%20Corrientes%204095%2C%20C1194%20AAG%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1665181219314!5m2!1ses!2sar" title="sucursal"></iframe>
                  <DataInfo> <IoLocationOutline size={18}/> Avenida Corrientes 4095, CABA </DataInfo>
                  <DataInfo> <MdPhoneInTalk size={18}/> (+54)11-496-7207</DataInfo>
                  <DataInfo> <FaInstagram size={18}/> gameoveroficial </DataInfo>
                  <DataInfo> <FaTwitch size={18}/> gameoverok </DataInfo>
                  <DataInfo> <FiTwitter size={18}/> @gameoveroficial</DataInfo>
                  <DataInfo> <FaFacebookF size={18}/> gameovertiendaoficial</DataInfo>
            </ContactoData>
        </ContactoContainer>
    </ContactoWrapper>
    )
    
}

export default Contacto