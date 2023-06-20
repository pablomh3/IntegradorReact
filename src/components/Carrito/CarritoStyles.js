import styled from "styled-components";
import { motion } from 'framer-motion';

export const Cart = styled(motion.div)`
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
    width: 360px;
    height: 86%;
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
@media (max-width: 476px){
    padding: 10px 10px 20px 30px;
    width: 210px;
    height: 100%;
 h2{
    font-size: 20px;
    text-align: center;
 }
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
@media (max-width: 476px){
gap: 10px;
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
    @media (max-width: 476px){
        max-width: 200px;
        gap: 0;
        padding: 6px;
        flex-direction: column;
        img{
            width: 50px;
            height: 50px;
        }
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
@media (max-width: 476px){
    h3{
        font-size: 13px;
    }
    p{
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
  @media (max-width: 476px){
    gap: 0;
    justify-content: center;
    padding: 0;
    flex-direction: column;
    padding: 0 2px;
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
  @media (max-width: 476px){
    gap: 6px;
    width: 50px;
  }

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
@media (max-width: 476px){
    gap: 10px;
    p{
        font-size: 18px;
    }
    span{
        font-size: 18px;
    }
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
  @media (max-width: 476px){
    font-size: 14px;
    padding: 13px 20px;
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
  @media (max-width: 476px){
    font-size: 14px;
    padding: 10px 20px;
  }
`