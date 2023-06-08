import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    position: fixed;
    top: 110px;
    right: 0;
    padding: 10px 30px 50px;
    background-color: #181818;
    border-top: 1px solid var(--blanco);
    border-left: 1px solid var(--blanco);
    border-bottom: 1px solid var(--blanco);
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 180px);
    overflow: scroll;
    z-index: 2;
    width: 0px;
    min-width: 365px;
    transition: all 0.3s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    ::-webkit-scrollbar{
        display: none;
    }

h2{
    background: linear-gradient(to top, var(--magenta), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: 'Press Start 2P', cursive;
}

p{
    align-self: center;
}
`

export const ContainerProducts = styled.div`
display: flex;
flex-direction: column;
height: 500px;
overflow-y: scroll;
gap: 30px;
overflow-x: hidden;

::-webkit-scrollbar{
    width: 12px;
}
::-webkit-scrollbar-thumb{
    border-radius: 20px;
    background-color: var(--cyan);
    border: 3px solid var(--azul);
}
`
export const CartContainer = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    max-width: 400px;
    background-color: var(--blanco);
    padding: 10px;
    border: 1px solid var(--magenta);
    border-radius: 10px;
    img{
        width: 65px;
        height: 65px;
    }
`
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
export const Divider = styled.div`
    margin-top: 20px;
    border-top: 0.5px solid var(--magenta);
`
export const TotalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
p{
    color: var(--blanco);
    font-weight: 700;
    font-size: 20px;
}
span{
    color: var(--blanco);
    font-weight: 600;
    font-size: 20px;
}
`

export const ButtonComprar = styled.button`
    background: var(--magenta);
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    font-weight: 900;
    border: 1px solid var(--blanco);
    padding: 15px 25px;
    color: var(--blanco);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
    background: var(--blanco);
    border: 1px solid var(--magenta);
    color: var(--magenta);
    transition: all 0.3s;
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--azul);
    color: var(--blanco);
  }
`

export const ButtonVaciar = styled.button`
    background: var(--cyan);
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    font-weight: 900;
    border: 1px solid var(--blanco);
    padding: 15px 25px;
    color: var(--blanco);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
    background-color: var(--blanco);
    color: var(--cyan);
    border: 1px solid var(--cyan);
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--azul);
    color: var(--blanco);
  }

`