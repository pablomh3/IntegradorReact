import * as Yup from 'yup'
import { regEmail } from '../../constants/constants';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required(' Escribe tu nombre'),
    cellphone: Yup.string().required('Escribe tu celular'),
    location: Yup.string().required('Escribe tu localidad'),
    address: Yup.string().required('Escribe tu domicilio'),
  });

  export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo vacío'),
    email: Yup.string().matches(regEmail,'Mail inválido').required('Campo vacío'),
    password: Yup.string().min(6, 'Contraseña muy corta').required('Campo vacío')
  })

  export const logInValidationSchema = Yup.object({
    email: Yup.string().matches(regEmail,'Mail inválido').required('Campo vacío'),
    password: Yup.string().min(6, 'Contraseña muy corta').required('Campo vacío')
  })