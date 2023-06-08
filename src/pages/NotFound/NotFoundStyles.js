import styled from "styled-components";

export const NotFoundWrapper = styled.div`
 width: 90vw;
  max-width: 1200px;
  padding: 2rem;
  margin: 140px auto;
h1{
    font-family: 'Press Start 2P', cursive;
    font-size: 90px;
    color: var(--gris);
    opacity: 0.5;
    text-align: center;
}
h2{
    font-family: 'Press Start 2P', cursive;
    font-size: 50px;
    background: linear-gradient(to left, var(--magenta), var(--cyan));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.3s;
:hover{
    color: white;
}
}
`