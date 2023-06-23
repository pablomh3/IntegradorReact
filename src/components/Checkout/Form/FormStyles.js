import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 40%;
  margin: 20px auto;
  background-color: var(--azul);
  gap: 40px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  h2{
    text-align: center;
    font-size: 25px;
    }

    @media (max-width: 992px) {
        width: 80%;
        gap: 30px;
        padding: 0 10px;
    }
    @media (max-width: 467px) {
        width: 85%;
        gap: 10px;
        
        h2{
          font-size: 20px;
        }
    }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  
`;

export const Form = styled(FormikForm)`
 display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
   

    @media (max-width: 992px) {
        flex-direction: column;
        gap: 5px;
    }
  }
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
`

export const CheckoutText = styled.p`
color: var(--blanco);
font-size: 14px;
font-weight: 600;
text-align: left;
@media (max-width: 992px) {
        font-size: 13px;
    }
`
export const CheckoutInput = styled.input`
 padding: 0 5px;
 color: var(--magenta);
 font-weight: 600;
 width: 300px;
 height: 30px;
 border: ${({ isError }) => (isError ? '1px solid red' : 'none')};
 ::placeholder{
  color: var(--magenta);
  opacity: 0.5; 
 }
 @media (max-width: 992px) {
        width: 270px;
    }
    @media (max-width: 476px) {
        width: 240px;
        height: 25px;
    }
`
export const ErrorMessageStyled = styled.p`

  margin: 0;
  margin-top: 2px;
  color: #fb103d;
  font-size: 14px;
  @media (max-width: 476px) {
        font-size: 12px;
        margin-top: 1px;
    }
`
export const CheckoutButton = styled.button`

  border: 1px solid var(--azul);
   border-radius: 10%;
   padding: 9px 14px;
   background: linear-gradient(to left, #4c96d7, #8a25b1);
   font-family: 'Geostar Fill', cursive;
   font-size: 18px;
   color: var(--azul);
   font-weight: 700;
   width: 200px;
   align-self: center;
   margin: 40px;  
   cursor: pointer;
 :hover{
   color: var(--blanco);
   transition: all 0.3s;
 }
 &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    
    color: var(--blanco);
  }

 @media (max-width: 476px) {
  width: 160px;
  font-size: 15px;
  padding: 6px 10px;
 }
 `