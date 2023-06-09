import styled from "styled-components";

export const HeroContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items:center;
    color: var(--blanco);
    padding: 180px 0;
    gap: 30px;
    width: 100%;
    @media (max-width: 992px) {
        flex-direction: column;
        gap: 10px;
        padding: 130px 0px 70px 0px;;
    }
    @media (max-width: 400px) {
        flex-direction: column;
        gap: 0px;
        padding: 100px 0px 70px 0px;
    }
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

  @media (max-width: 992px) {
        flex-direction: column;
        gap: 0;
        width: 100%;
    }
`

export const H1Hero = styled.div `
display: flex;
  padding: 0 20px;
 font-size: 15px; 
 line-height: 25px;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;

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
  @media (max-width: 992px) {
    font-size: 40px;
    }
    @media (max-width: 460px) {
    font-size: 30px;
    padding: 0;
    }
}



`

export const H3Hero = styled.div`
 display: flex;
 padding: 0 20px;
 font-size: 15px; 
 line-height: 25px; 
 @media (max-width: 992px) {
    font-size: 14px;
    }
    @media (max-width: 460px) {
    font-size: 12px;
    }

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
  @media (max-width: 992px) {
        width: 500px;
        img{
    width: 100%;
}
    }
    @media (max-width: 460px) {
        width: 400px;
        img{
      width: 70%;
}
    }

`


