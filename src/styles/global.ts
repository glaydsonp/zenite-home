import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    height: 100%;
    min-width: 280px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #__next {
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  button {
    outline: none;
    cursor: pointer;
  }
  `;
