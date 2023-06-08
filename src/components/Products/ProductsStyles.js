import styled from "styled-components";

export const ProductsContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`

export const ProductsTitle = styled.div`
 display: flex;
  font-family: 'Press Start 2P', cursive;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(to top, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  gap: 5px;
  img{
    width: 22px;
  }

`

export const ProductsCategories = styled.div`
 display: flex;
  flex-direction: row;
  gap: 30px;
  overflow: hidden;
  justify-content: center;

`


export const ProductsCategory = styled.button`
  border: 1px solid var(--cyan);
  border-radius: 10%;
  padding: 0px 14px;
  background-color: ${({ selected }) =>
    selected ? 'var(--azul)' : 'var(--blanco)'};
  cursor: pointer;
  h2{
  font-family: 'Geostar Fill', cursive;
  font-size: 18px;
  color: var(--magenta);
  font-weight: 700;
  }

  :hover{
  background-color: var(--cyan);
  transition: all 0.3s;
   color: var(--blanco);
  }

`

export const ProductsRender = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  gap: 30px;
  overflow: hidden;

`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 500px;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: var(--blanco);
  border-radius: 2%;
  padding: 20px;
  gap: 25px;
img{
  height: 250px;
  width: 250px;
}

@media (max-width: 992px){
  img{
    height: 100px;
    width: 100px;
  }
}
`
export const CardH3 = styled.div`
 color: var(--azul);
  text-align: center;
  font-family: 'Noto Sans Mono', monospace;
  overflow-y: hidden;
`
export const CardPrecio = styled.div`
 font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  font-weight: 600;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
   overflow-y: hidden;
`
export const CardButtonContainter = styled.div`
 display: flex;
  align-items: center;
`
export const CardButton = styled.button`
background: linear-gradient(to left, #4c96d7, #8a25b1);
  font-family: 'Noto Sans Mono', monospace;
  transition: all 0.3s;
  width: 200px;
  padding: 5px;
  border-radius: 7%;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  color: var(--blanco);
  @media (max-width: 992px){
    width: 100px;
    font-size: 13px;
  }
`
export const VerMas = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`
export const VerMasButton = styled.button`
 border: 1px solid var(--azul);
  border-radius: 10%;
  padding: 9px 14px;
  background: var(--magenta);
  font-family: 'Geostar Fill', cursive;
  font-size: 18px;
  color: var(--azul);
  font-weight: 700;
  cursor: pointer;
:hover{
  color: var(--blanco);
  transition: all 0.3s;
}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--azul);
    color: var(--blanco);
  }
`

export const VerMenosButton = styled.button`
 border: 1px solid var(--azul);
  border-radius: 10%;
  padding: 9px 14px;
  background:  var(--cyan);
  font-family: 'Geostar Fill', cursive;
  font-size: 18px;
  color: var(--azul);
  font-weight: 700;
  cursor: pointer;
:hover{
  color: var(--blanco);
  transition: all 0.3s;
}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--azul);
    color: var(--blanco);
  }
`