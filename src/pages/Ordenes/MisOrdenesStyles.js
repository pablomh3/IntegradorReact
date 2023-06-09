import styled from "styled-components";

export const OrdenesWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;

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
`

export const OrderContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`
export const Orders = styled.div`
 max-width: 500px;
 min-width: 400px;
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
    font-family: 'Geostar Fill', cursive;
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
`
