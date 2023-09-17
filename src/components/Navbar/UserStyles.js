import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContainerUser = styled(motion.div)`
display: none;
top: 110px;
left: 0;
gap: 20px;
@media (max-width: 576px){
    display: flex;
    position: fixed;
    flex-wrap: nowrap;
    justify-content: left;
    align-items: left;
    background-color: #181818;
    border-top: 1px solid var(--blanco);
    border-right: 1px solid var(--blanco);
    border-bottom: 1px solid var(--blanco);
    flex-direction: column;
    overflow: none;
    z-index: 2;
    padding: 15px;
    width: 45%;
}
`
export const IniciaSesionUser = styled.span `
font-weight: 600;
font-size: 12px;
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
color: var(--magenta);
transition: all 0.5s;
cursor: pointer;

:hover{
    transform: scale(1.0);
    color: var(--blanco);
}

`

export const RegistrarseUser = styled.span `
font-weight: 600;
font-size: 12px;
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
background-clip: text;
background: white;
-webkit-background-clip: text;
color: var(--cyan);
transition: all 0.5s;
cursor: pointer;


:hover{
    transform: scale(1.0);
    color: var(--blanco);
}
`
export const ListaProductos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
justify-content: center;
margin-top: 30px;
`

export const ProductosH2 = styled.div `
  background: linear-gradient(to left, var(--magenta), var(--cyan));
background-clip: text;
-webkit-background-clip: text;
font-family: 'Press Start 2P', cursive;
color: transparent;
font-size: 15px;
font-weight: 800;
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
`
export const ProductosUl = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
justify-content: center;
`

export const ProductosLi = styled.p`
color: var(--blanco);
font-size: 6px; 
cursor: pointer;
transition: all 0.2s;
:hover{
    color: var(--cyan);
    transform: scale(1.0);
}
`