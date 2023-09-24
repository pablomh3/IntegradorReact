import styled from "styled-components";

export const OrdenesWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 0rem;
  margin: 140px auto;

  @media (max-width: 992px) {
        
        width: 100%;
        h2{
          font-size: 20px;
        }
        }
    
        @media (max-width: 576px){
          
          h2{
            font-size: 16px;
          }
    }
`;

export const OrdenesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: column;

  h1{
    font-family: 'Press Start 2P', cursive;
 margin-top: 120px;
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  }
   @media (max-width: 576px){
    h1{
      margin-top: 100px;
      font-size: 30px;
    }
   }
`

export const OrderContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`
export const Orders = styled.div`
 width: 500px;
  background: var(--blanco);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3{
    color: var(--azul);
    text-align: center;
    font-size: 23px;
}
p{
    font-weight: 800;
    background: linear-gradient(to left, var(--magenta), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.5s;
    font-size: 20px;
}

h2{
  font-family: 'Press Start 2P', cursive;
    font-weight: 800;
    background: linear-gradient(to left, var(--magenta), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.5s;
    cursor: pointer;
}
@media (max-width: 576px) {
        max-width: 330px;

        h3{font-size: 20px;
        }
      h2{
        font-size: 20px;
      }
      }
    
`
export const Button = styled.button`
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
 @media (max-width: 992px) {
        
       padding: 7px 12px;

        }
    
        @media (max-width: 576px){
          
          font-size: 16px;
    }
`