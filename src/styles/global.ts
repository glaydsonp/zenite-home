import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    width: 100vw;
    height: 100vh;
  }

  body {
    overflow-x: hidden;
  }

  #__next {
    z-index: 0;
  }

  button {
    outline: none;
    cursor: pointer;
  }
  `;
