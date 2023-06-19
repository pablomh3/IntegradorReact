import styled from "styled-components";

export const FooterContainer = styled.div `
margin-top: 90px;
display: flex;
flex-direction: column;
gap: 10px;
border-top: 1px solid var(--magenta);
padding: 20px 0;
align-items: center;
background-color: #181818;
width: 100%;
@media (max-width: 476px){
 gap: 4px;
  
}
`
export const FooterImg = styled.div `
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    height: 80px;
}
@media (max-width: 476px){
 img{
  height: 50px;
 } 
  
}
`
export const FooterName = styled.div`
display: flex;
justify-content: center;
gap: 0px;
font-weight: 800;
background: linear-gradient(to left, var(--magenta), var(--cyan));
background-clip: text;
-webkit-background-clip: text;
color: transparent;
font-family: 'Geostar Fill', cursive;
font-size: 30px;
@media (max-width: 476px){
  
  font-size: 20px;
}
`
export const FooterText = styled.div`
    display: flex;
  align-items: flex-end;
  justify-content: center;
  color: var(--blanco);
  @media (max-width: 476px){
  p{
    font-size: 13px;
  }
  
}
`