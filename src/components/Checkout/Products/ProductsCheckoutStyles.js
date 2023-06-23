import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
display: flex;
flex-direction: column;
gap: 30px;
justify-content: center;
align-items: center;
  h2{
    font-weight: 500;
  font-size: 22px;
  text-align: center;
  background: linear-gradient(to top, var(--magenta), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: 'Press Start 2P', cursive;
  }

  @media (max-width: 992px) {
        width: 100%;
       
    }
    @media (max-width: 476px) {
      h2{
          font-size: 25px;
        }
    }
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  ::-webkit-scrollbar{
    width: 12px;    
}
::-webkit-scrollbar-thumb{
    border-radius: 20px;
    background-color: var(--cyan);
    border: 3px solid var(--negro);
}

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 992px) {
        width: 100%;
        & img {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    object-fit: cover;
  }
    }
`;


export const Divider = styled.div`
    margin-top: 20px;
    border-top: 0.5px solid var(--magenta);
    width: 100%;
`
export const TotalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    background-color: #181818;
    width: 90%;
    border: 1px solid var(--cyan);
    border-radius: 10px;

  @media (max-width: 992px){
    width: 80%;
  
}
@media (max-width: 476px){
   width: 90%;
   gap: 0;
}
`
export const SubTotalDivider = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
p{
    color: var(--cyan);
    font-weight: 700;
    font-size: 18px;
}
span{
    color: var(--blanco);
    font-weight: 600;
    font-size: 18px;
}
@media (max-width: 476px){
   gap: 10px;
  p{
    font-size: 16px;
  }
  span{
    font-size: 16px;
  }
  }

`
export const TotalDivider = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
p{
    color: var(--magenta);
    font-weight: 800;
    font-size: 22px;
}
span{
    color: var(--blanco);
    font-weight: 800;
    font-size: 22px;
}
@media (max-width: 476px){
   gap: 10px;
  p{
    font-size: 20px;
  }
  span{
    font-size: 20px;
  }
  }
`