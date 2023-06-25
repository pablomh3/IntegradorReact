import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContainerUser = styled(motion.div)`
display: none;
top: 110px;
left: 0;
gap: 13px;
@media (max-width: 576px){
    display: flex;
    position: fixed;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: #181818;
    border-top: 1px solid var(--blanco);
    border-right: 1px solid var(--blanco);
    border-bottom: 1px solid var(--blanco);
    flex-direction: column;
    overflow: none;
    z-index: 2;
    height: 140px;
    width: 120px;
}
`
export const IniciaSesionUser = styled.span `
font-weight: 600;
font-size: 10px;
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
font-size: 10px;
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