import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
display: flex;
z-index: 999;
height: 115px;
align-items: center;
justify-content: space-around;
position: fixed;
top: 0;
overflow: hidden;
background-color: #181818;

@media (max-width: 992px){

    gap: 10px;
}

`
export const LogoImg = styled.div`
cursor: pointer;
display: flex;
transition: all 0-2s;


:hover{
    transform: scale(1.01);
}
@media (max-width: 992px){
    img{ 
        width: 150px;
    } 
}

`
export const NavbarUl = styled.ul`
display: flex;
justify-content: flex-end;
gap: 100px;
font-family: 'Geostar Fill', cursive;
font-size: 18px; 
width: 50%;
`
export const NavbarLi = styled.div`
background-color: var(--negro);
padding: 12px 15px;
border-radius: 20px;
border: 1px solid var(--cyan);

a{
    font-weight: 800;
    background: linear-gradient(to left, var(--magenta), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.5s;
    cursor: pointer;

}


a:hover{
    transform: scale(1.0);
    color: var(--blanco);
}

@media (max-width: 992px){
    background-color: var(--negro);
    padding: 8px 5px;
border-radius: 15px;
border: 1px solid var(--negro);
}

@media (max-width: 480px){
  display: none;
}
   
`
export const ContainerUserCarrito = styled.div`
display: flex;
gap: 10px;
margin-right: 20px;
flex-direction: column;
cursor: pointer;
background-color: var(--negro);
padding: 12px 15px;
border-radius: 20px;
border: 1px solid var(--cyan);

@media (max-width: 992px){
    gap: 5px;
    margin-right: none;
    p{
        display: none;
    }
}
@media (max-width: 480px){
    border: 1px solid var(--negro);
    gap: 0;
    
}
`
export const IniciaSesion = styled.span `
font-weight: 800;
font-size: 15px;
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
@media (max-width: 480px){
  font-size: 12px;
}
`

export const Registrarse = styled.span `
font-weight: 800;
font-size: 13px;
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

@media (max-width: 480px){
  
}
`
export const CarroContainer = styled.div `
padding: 13px 20px;
border-radius: 10px;
transition: all 0.6s;
background-color: var(--negro);
width: 20px;
justify-content: center;
align-items: center;
border: 1px solid var(--magenta);
color: var(--cyan);
cursor: pointer;

:hover{
    background-color: var(--magenta);
    color: var(--cyan);
    transform: scale(1.0);
    font-weight: 800;
   border: 1px solid var(--cyan);
}
`
