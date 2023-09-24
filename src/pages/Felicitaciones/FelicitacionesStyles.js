import styled from "styled-components";

export const FelicitacionesWrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 0 2rem;
  margin: 160px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media (max-width: 992px) {
        
        gap: 20px;
        padding: 0 1rem;
    }
    @media (max-width: 576px){
      width: 100%;
    padding: 0;
   gap: 30px;
    
}
`
export const FelicitacionesTitle = styled.div`
display: flex;
align-items: center;
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
    
    @media (max-width: 992px) {
        gap: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--magenta);
      background-color: #181818;
      padding: 0 15px;
      border-radius: 30px;
       h1{
        font-size: 30px;
       }
    }
    @media (max-width: 576px){
      width: 340px;
      border: inherit;
      background-color: #181818;
      padding: 0;
      h1{
        font-size: 22px;
       }
}  
`
export const FelicitacionesH2 = styled.div`
display: flex;
gap: 15px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
h2{
 font-size: 25px;
}
@media (max-width: 992px) {
        h2{
          font-size: 22px;
    }}
    @media (max-width: 576px){
      gap: 0;
      flex-direction: column;
    h2{
      font-size: 18px;
    }
    h3{
      font-size: 16px;
      color: var(--cyan);
    }
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
 }
 @media (max-width: 576px){
      padding: 8px 12px;
      font-size: 16px;
}  
 `

export const FelicitacionesButtonAlt = styled.button`

border: 1px solid var(--azul);
 border-radius: 10%;
 padding: 9px 14px;
 background: var(--blanco);
 font-family: 'Geostar Fill', cursive;
 font-size: 18px;
 color: var(--azul);
 font-weight: 700;
 
 cursor: pointer;
 margin-top: 10px;
:hover{
 color: var(--azul);
 transition: all 0.3s;
}
@media (max-width: 576px){
    padding: 8px 12px;
    font-size: 16px;
}  
`