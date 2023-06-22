import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const RegistroWrapper = styled.div`
  width: 90vw;
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
  @media (max-width: 576px){
    padding: 0;
    max-width: 340px;
    width: 100%;
}
`;

export const RegistroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: column;
  padding: 30px 0;
`
export const RegistroTitle = styled.div`
 font-family: 'Press Start 2P', cursive;
 margin-top: 120px;
  font-size: 18px;
  font-weight: 800;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
 
  h2{
    text-align: center;
  }
  @media (max-width: 576px){
    font-size: 15px;
}
`
export const FormularioContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  border-radius: 2%;
  padding: 40px 50px; 
  flex-direction:column;
  gap: 10px;
  h2{
    color: var(--cyan);
  }
  @media (max-width: 576px){
    padding: 40px 0;
    width: 350px;
    h2{
      font-size: 15px;
      text-align: center;
    }
}
`
export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 5px;
  
`;

export const RegisterButton = styled.button`
  padding-top: 60px;
  border: 1px solid var(--azul);
   border-radius: 10%;
   padding: 9px 14px;
   background: linear-gradient(to left, #4c96d7, #8a25b1);
   font-family: 'Geostar Fill', cursive;
   font-size: 18px;
   color: var(--azul);
   font-weight: 700;
   cursor: pointer;
   margin-top: 20px;
 :hover{
   color: var(--blanco);
   transition: all 0.3s;
 }`
 export const CheckboxInput = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0;
 `

 export const ButtonDiv = styled.div`

 margin: 10px auto;
 `
 export const FormContainer = styled.div`
 display: flex;
 flex-direction: column; 
 align-items: center;
 `
 
 export const RegisterText = styled.p`
 color: var(--blanco);
 font-size: 14px;
 font-weight: 600;
 text-align: left;
 `
 export const RegisterInput = styled.input`
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
 
 `
 export const ErrorMessageStyled = styled.p`
 
   margin: 0;
   margin-top: 2px;
   color: #fb103d;
   font-size: 14px;
   
 `

export const LinksRegister = styled.div`
display: flex;
gap: 20px;
font-size: 14px;
transition: all 0.3s;
font-family: 'Noto Sans Mono', monospace;
gap: 55px;
align-items: center;
justify-content: center;
margin: 20px 0;
`
export const LinkRegister = styled.span`
font-size: 14px;
  transition: all 0.3s;
  font-family: 'Noto Sans Mono', monospace;
  color: var(--cyan);
  :first-child{
    color: var(--magenta);
  }
  
  u{
    color: var(--cyan);
    cursor: pointer;
    transition: all 0.3s;
  }
  u:hover{
    color: var(--blanco);
  }
  `