import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Open+Sans:wght@400;500;600&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    line-height: 1.5;
  }

  #root {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    html {
      font-size: 14px;
    }
  }
`; 