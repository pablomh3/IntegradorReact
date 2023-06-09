import React from 'react'
import { CheckoutDatosStyled, Formik, Form, CheckoutButton } from './FormStyles'
import { CheckoutInitialValues } from '../../Formik/InitialValues'
import { checkoutValidationSchema } from '../../Formik/ValidationSchema'
import FormikForm from './FormFormik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../../axios/axios-orders'
import { clearCart } from '../../../redux/Cart/CartSlice'
import Loader from '../../Loader/Loader'

const Formulario = (  {cartItems, shippingCost, price}  ) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.user)
    
  return (
    <CheckoutDatosStyled>
        <h2>Ingresá tus datos de contacto</h2>
        <Formik initialValues={CheckoutInitialValues}
        validationSchema={checkoutValidationSchema} 
        onSubmit={async values => {
            const orderData = {
              items: cartItems,
              price: price,
              shippingCost,
              total: price + shippingCost,
              shippingDetails: { ...values },
            };
            console.log (orderData.items)
            try {
              await createOrder(orderData, dispatch, currentUser);
              navigate('/felicitaciones');
              dispatch(clearCart());
            } catch (error) {
                alert('hubo un error')
            }
          }}
        >
            {({ isSubmitting}) =>(
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
                    <CheckoutButton disabled={ cartItems.length < 1}> {isSubmitting ? <Loader/>  : 'Enviar pedido'} </CheckoutButton>
                </div> 
                
                
               
               
            </Form>
            )}
        </Formik>
    </CheckoutDatosStyled>
  )
}

export default Formulario