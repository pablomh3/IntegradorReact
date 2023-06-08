import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { FormText, LogInContainer, LogInInput, ErrorMessageStyled } from './IniciarSesionStyles'

const IniciarSesionForm = ({ name, type, children, placeholder}) => {
  return (
    <Field name = {name}>
        {
            ({field, form: { errors, touched }}) => (
                <LogInContainer>
                    <FormText> {children}</FormText>
                    <LogInInput type={type} placeholder={placeholder} {...field} isError={errors[field.name] && touched[field.name]}/>
                    <ErrorMessage name= {field.name}>
                        {message => <ErrorMessageStyled> {message} </ErrorMessageStyled> }
                    </ErrorMessage>
                </LogInContainer>
                
            )
        }
    </Field>
  )
}

export default IniciarSesionForm 