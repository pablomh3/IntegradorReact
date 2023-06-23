import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 110px;
  padding: 2rem 5rem;
  @media (max-width: 992px) {
        flex-direction: column;
        gap: 50px;
    }
    @media (max-width: 576px){
      margin-top: 120px;
    padding: 0;
    width: 100%;
    gap: 30px;
}

`;

