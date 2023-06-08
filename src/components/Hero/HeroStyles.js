import styled from "styled-components";

export const HeroContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items:center;
    color: var(--blanco);
    border-radius: 2%;
    padding: 180px 0;
    gap: 30px;
    width: 100%;

`
export const HeroData = styled.div `
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align:center;
  width: 70%;
  flex-wrap: wrap;
`

export const H1Hero = styled.div `
display: flex;
  padding: 0 20px;
 font-size: 15px; 
 line-height: 25px;
 flex-wrap: wrap;

h1{
  font-family: 'Press Start 2P', cursive;
  font-size: 60px;
  font-weight: 800;
  background: linear-gradient(to top, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  line-height: 60px;
}
`

export const H3Hero = styled.div`
 display: flex;
 padding: 0 20px;
 font-size: 15px; 
 line-height: 25px; 
 span{
    background: linear-gradient(to left, #4c96d7, #8a25b1);
  font-family: 'Geostar Fill', cursive;
  cursor: pointer;
  padding: 0 5px;
  transition: all 0.3s;
  color: var(--azul);
}
span:hover {
    color: var(--blanco);
}
`
export const HeroFoto = styled.div `
    display: flex;
  align-items: center;
  width: 880px;
  overflow: none;
  justify-content: center;

img{
    width: 90%;
}
`


