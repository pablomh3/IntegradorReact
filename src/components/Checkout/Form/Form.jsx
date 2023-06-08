import React from 'react'
import { CheckoutDatosStyled, Formik, Form, CheckoutButton } from './FormStyles'
import { CheckoutInitialValues } from '../../Formik/InitialValues'
import { checkoutValidationSchema } from '../../Formik/ValidationSchema'

import FormikForm from './FormFormik'

const Formulario = (  {cartItems}  ) => {
  return (
    <CheckoutDatosStyled>
        <h2>Ingresá tus datos de contacto</h2>
        <Formik initialValues={CheckoutInitialValues}
        validationSchema={checkoutValidationSchema} 

        onSubmit={values => console.log(values)}>
            <Form>
                <div>
                    <FormikForm htmlFor='nombre'
                        name='name'
                        type='text'
                        id='nombre'
                        placeholder='Tu nombre'>
                        Nombre:
                    </FormikForm>

                    <FormikForm htmlFor='celular'
                        name='cellphone'
                        type='number'
                        id='cellphone'
                        placeholder='112345678'>
                        Celular:
                    </FormikForm>
                </div>   
                <div>
                    <FormikForm htmlFor='localidad'
                        name='location'
                        type='text'
                        id='location'
                        placeholder='Tu ciudad'>
                        Localidad:
                    </FormikForm>
                    <FormikForm htmlFor='dirección'
                        name='address'
                        type='text'
                        id='address'
                        placeholder='Tu dirección'>
                        Dirección:
                    </FormikForm>
                </div> 
                    

                
                
                <CheckoutButton disabled={ cartItems.length < 1}> Enviar pedido</CheckoutButton>
                
               
            </Form>
        </Formik>
    </CheckoutDatosStyled>
  )
}

export default Formulario