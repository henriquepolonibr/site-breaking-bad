import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    font-family: 'Oswald', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: #050811;
    color: #FFFF;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
