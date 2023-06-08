import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const IniciarSesionWrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
  padding: 2rem;
  margin: 140px auto;

  h1{
    font-family: 'Noto Sans Mono', monospace;
  margin-top: 100px;
  font-size: 28px;
  font-weight: 800;
  color: var(--blanco);
  text-align: center;
}
`
export const ContainerIniciarSesion = styled.div`
 display: flex;
 background-color: #181818;
  border-radius: 2%;
  color: var(--blanco);
  flex-direction: column;
  padding: 0 40px 20px;
h1{
  color: var(--cyan);
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
  gap: 0px;

`;

export const FormText = styled.p`
color: var(--blanco);
font-size: 16px;
font-weight: 600;
`
export const LogInInput = styled.input`
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
export const LogInContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
`

export const LinksLogIn = styled.div`
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
export const LinkLogIn = styled.span`
font-size: 14px;
  transition: all 0.3s;
  font-family: 'Noto Sans Mono', monospace;
  color: var(--cyan);

  u{
    color: var(--cyan);
    cursor: pointer;
    transition: all 0.3s;
  }
  u:first-child{
    color: var(--magenta);
    cursor: pointer;
    transition: all 0.3s;
  }
  u:hover{
    color: var(--blanco);
  }
  `
  export const LogInButton = styled.button`
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
 :hover{
   color: var(--blanco);
   transition: all 0.3s;
 }
 `