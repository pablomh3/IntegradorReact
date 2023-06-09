import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;

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
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  height: 300px;
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
`;


export const Divider = styled.div`
    margin-top: 20px;
    border-top: 0.5px solid var(--magenta);
`
export const TotalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;

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
}`