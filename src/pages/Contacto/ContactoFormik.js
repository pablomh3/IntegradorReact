import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ContactoInput, ContactoText, ErrorMessageStyled, FormContactoContainer } from './ContactoStyles'

const ContactoFormik = ({ name, type, children, placeholder}) => {
    return (
      <Field name = {name}>
          {
              ({field, form: { errors, touched }}) => (
                  <FormContactoContainer>
                      <ContactoText> {children}</ContactoText>
                      <ContactoInput type={type} placeholder={placeholder} {...field} isError={errors[field.name] && touched[field.name]}/>
                      <ErrorMessage name= {field.name}>
                          {message => <ErrorMessageStyled> {message} </ErrorMessageStyled> }
                      </ErrorMessage>
                  </FormContactoContainer>
                  
              )
          }
      </Field>
      )
    }
    
    export default ContactoFormik
    