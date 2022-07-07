import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: #799fb5;
  }
`;

export default GlobalStyle;
