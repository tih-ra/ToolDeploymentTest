import { createGlobalStyle } from 'styled-components';
import ArrivalApercuRegular from 'assets/fonts/ARRIVALApercuPro-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ArrivalApercuRegular';
    src: url('${ArrivalApercuRegular}') format('opentype');
  };
  body {
    all: initial;
    background: ${props => props.theme.background};
    font-family: 'ArrivalApercuRegular';
    color: ${props => props.theme.colors[0]};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
  *:focus {
    outline: none;
  };
  h1 {
    font-size: 24px;
    font-weight: normal;
  }
  h4 {
    font-size: 14px;
    font-weight: normal;
  }
  input {
    color: ${props => props.theme.colors[0]};
  }
`;

export default GlobalStyle;
