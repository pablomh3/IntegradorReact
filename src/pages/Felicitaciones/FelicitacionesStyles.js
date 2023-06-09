import styled from "styled-components";

export const FelicitacionesWrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 2rem;
  margin: 140px auto;
`
export const FelicitacionesTitle = styled.div`
display: flex;
margin-top: 120px;
gap: 20px;
justify-content: center;
h1{
    font-family: 'Geostar Fill', cursive;
    font-family: 'Press Start 2P', cursive;
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
    }
     
`
export const FelicitacionesH2 = styled.div`
display: flex;
gap: 15px;
justify-content: center;
align-items: center;
h2{
 size: 28px;
}
`