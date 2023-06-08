import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { CheckoutInput, CheckoutText, ErrorMessageStyled, FormContainer } from './FormStyles'

const FormikForm = ({ children, name, htmlFor, type, id, placeholder}) => {
  return (
    <Field name = {name}>
        {
            ({field, form: { errors, touched }}) => (
                <FormContainer>
                    <CheckoutText htmlFor={htmlFor}> {children}</CheckoutText>
                    <CheckoutInput type={type} id={id} placeholder={placeholder} {...field} isError={errors[field.name] && touched[field.name]}/>
                    <ErrorMessage name= {field.name}>
                        {message => <ErrorMessageStyled> {message} </ErrorMessageStyled> }
                    </ErrorMessage>
                </FormContainer>
                
            )
        }
    </Field>
  )
}

export default FormikForm