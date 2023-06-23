import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    max-width: 350px;
    background-color: var(--blanco);
    padding: 10px;
    border: 1px solid var(--magenta);
    border-radius: 20px;
    img{
        width: 65px;
        height: 65px;
    }
    @media (max-width: 476px){
        max-width: 320px;
        width: 65%;
        gap: 0;
        padding: 6px;
        flex-direction: column;
        img{
            width: 50px;
            height: 50px;
        }
}
`;
export const CartInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center ;
h3{
    color: var(--azul);
    text-align: center;
    font-size: 17px;
}
p{
    color: var(--azul);
    text-align: center;
    font-weight: 800;
    font-size: 18px;
}
@media (max-width: 476px) {
        h3{
          font-size: 14px;
        }
      }
`
export const HandleQuantityContainer = styled.div`
display: flex;
  padding: 0 5px;
  transition: all 0.3s;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  p{
    color: var(--azul);
  }
  @media (max-width: 476px) {
        p{
          font-size: 14px;
          font-weight: 700;
        }
      }
`

export const HandleQuantity = styled.div`
 background: linear-gradient(to left, #4c96d7, #8a25b1);
  font-family: 'Geostar Fill', cursive;
  cursor: pointer;
  padding: 5px;
  gap: 13px;
  transition: all 0.3s;
  color: var(--azul);
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 476px) {
        width: 50px;
        gap: 5px;
        font-size: 14px;
      }
`
