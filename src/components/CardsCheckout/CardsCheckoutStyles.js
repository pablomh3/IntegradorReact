import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  background: var(--blanco);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;


  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 992px) {
        width: 7  0%;
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

`
