import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    height: 100%;
    min-width: 280px;
    max-width: 1440px;
    overflow-y: auto;
    margin: auto;
  }

  #__next {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
  }
  `;
