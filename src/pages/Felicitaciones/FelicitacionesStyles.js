import styled from "styled-components";

export const FelicitacionesWrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 2rem;
  margin: 140px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
export const FelicitacionesTitle = styled.div`
display: flex;
margin-top: 120px;
gap: 20px;
justify-content: center;
h1{
    font-family: 'Geostar Fill', cursive;
    font-family: 'Press Start 2P', cursive;
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
    }
     
`
export const FelicitacionesH2 = styled.div`
display: flex;
gap: 15px;
justify-content: center;
align-items: center;
h2{
 size: 28px;
}
`
export const FelicitacionesButton = styled.button`

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