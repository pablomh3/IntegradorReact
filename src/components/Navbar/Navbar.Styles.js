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

    gap: 20px;
}

@media (max-width: 576px){


}
`
export const LogoImg = styled.div`
cursor: pointer;
display: flex;
transition: all 0-2s;
padding: 5px;

:hover{
    transform: scale(1.01);
}
@media (max-width: 992px){
    img{ 
        width: 130px;
    } 
}
@media (max-width: 576px){
    img{ 
        display: none;
    } 
}
`
export const LogoMini = styled.div`
display: none;

@media (max-width: 576px){
    display: flex;
    img{ 
        width: 50px;
        
    } }

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

@media (max-width: 576px){
  display: none;
}
   
`
export const ContainerUserCarrito = styled.div`
display: flex;
gap: 10px;

flex-direction: column;
cursor: pointer;
background-color: var(--negro);
padding: 12px 15px;
border-radius: 20px;
border: 1px solid var(--cyan);
margin: 10px 0;
flex-wrap: wrap;
align-items: center;
justify-content: center;

@media (max-width: 992px){
    gap: 5px;
    margin-right: none;
    width: 240px;
    
    p{
        display: none;
    }
}
@media (max-width: 576px){
    display: none;
    border: 1px solid #181818;
    margin: 0;    
    min-width: 230px;
   
    background-color: #181818;
    gap: 10px;
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
@media (max-width: 992px){
  font-size: 14px;
}

@media (max-width: 576px){
  font-size: 13px;
  gap: 7px;
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
@media (max-width: 992px){
  font-size: 12px;
  
}
@media (max-width: 576px){
    font-size: 11px;
  gap: 7px;
}
`
export const CarroContainer = styled.div `
display: flex;
padding: 13px 20px;
border-radius: 13px;
transition: all 0.6s;
background-color: var(--negro);
width: 25px;
justify-content: center;
align-items: center;
border: 1px solid var(--magenta);
color: var(--cyan);
cursor: pointer;
height: 30px;
:hover{
    background-color: var(--magenta);
    color: var(--cyan);
    transform: scale(1.0);
    font-weight: 800;
   border: 1px solid var(--cyan);
}
@media (max-width: 992px){
  width: 20px;
  margin-right: 10px;
  height: 20px;
}
@media (max-width: 576px){
  width: 19px;
  margin-right: 30px;
}
`
