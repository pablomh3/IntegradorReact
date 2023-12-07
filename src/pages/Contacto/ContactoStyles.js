import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const ContactoWrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
  padding: 2rem;
  margin: 160px auto;
  min-width: 200px;

@media (max-width: 576px){
    padding: 12px;
    max-width: 530px;
    width: 100%;
  
}
`

export const ContactoContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items:center;
    background-color: #181818;
    margin-top: 40px;
    border-radius: 2%;
  padding: 40px 50px; 
  gap: 20px;
    width: 100%;
    @media (max-width: 992px) {
        flex-direction: column;
        gap: 10px;
        padding: 10px 30px 30px 30px;;
        width: 80%;
    }
    @media (max-width: 400px) {
        gap: 0px;
        padding: 100px 0px 70px 0px;
        width: 100%;
    }
`
export const ContactoForm = styled.div `
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align:center;
  width: 70%;
  flex-wrap: wrap;

  @media (max-width: 992px) {
        flex-direction: column;
        gap: 0;
        width: 100%;
    }
`
export const ContactoData = styled.div `
    display: flex;
  width: 880px;
  overflow: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  img{
    width: 90%;
}
  @media (max-width: 992px) {
        width: 500px;
        img{
    width: 100%;
}
    }
    @media (max-width: 460px) {
        width: 400px;
        img{
      width: 70%;
}
    };
iframe{
  width: 70%;
  height: 280px;
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
export const ContactoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 25px;
  font-weight: 800;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;

  @media (max-width: 460px) {
     font-size: 22px;
    }
`;

export const FormContactoContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: left;
justify-content: center;

`

export const ContactoText = styled.p`
color: var(--blanco);
font-size: 14px;
font-weight: 600;
text-align: left;
align-items: left;
`
export const ContactoInput = styled.input`
 padding: 0 5px;
 color: var(--magenta);
 font-weight: 600;
 width: 500px;
 height: 30px;
 border: ${({ isError }) => (isError ? '1px solid red' : 'none')};

 ::placeholder{
  color: var(--magenta);
  opacity: 0.5; 
 }
 @media (max-width: 720px) {
        width: 400px;
    }
    @media (max-width: 720px) {
        width: 300px;
    }
`
export const ContactoInputMessage = styled.input`
 padding: 0 5px;
 color: var(--magenta);
 font-weight: 600;
 width: 500px;
 height: 100px;
 border: ${({ isError }) => (isError ? '1px solid red' : 'none')};

 ::placeholder{
  color: var(--magenta);
  opacity: 0.5; 
 }
 @media (max-width: 720px) {
        width: 400px;
    }
    @media (max-width: 720px) {
        width: 300px;
    }
`

export const ErrorMessageStyled = styled.p`

  margin: 0;
  margin-top: 2px;
  color: #fb103d;
  font-size: 14px;
  
`
export const DataTitle = styled.div`
align-items: center;
justify-content: center;
display: flex;
text-align: center;
h2{
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
}
`
export const DataInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
gap: 4px;
`