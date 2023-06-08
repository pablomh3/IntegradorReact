import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
    --negro: #252525;
    --cyan: #4c96d7; 
    --magenta: #8a25b1;
    --blanco: #FFFFFF;
    --gris: #575555;
    --azul: #010329;
  --btn-gradient: linear-gradient(83deg, #8a25b1, #4c96d7);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: var(--negro);
    font-family: 'Noto Sans Mono', monospace;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    
    a {
    text-decoration: none;
    color: white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`