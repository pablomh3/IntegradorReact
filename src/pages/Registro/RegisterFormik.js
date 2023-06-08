import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { RegisterInput, RegisterText, ErrorMessageStyled, FormContainer } from './RegistroStyles'

const RegisterForm = ({ name, type, children, placeholder}) => {
  return (
    <Field name = {name}>
        {
            ({field, form: { errors, touched }}) => (
                <FormContainer>
                    <RegisterText> {children}</RegisterText>
                    <RegisterInput type={type} placeholder={placeholder} {...field} isError={errors[field.name] && touched[field.name]}/>
                    <ErrorMessage name= {field.name}>
                        {message => <ErrorMessageStyled> {message} </ErrorMessageStyled> }
                    </ErrorMessage>
                </FormContainer>
                
            )
        }
    </Field>
  )
}

export default RegisterForm