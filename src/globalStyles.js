import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 100%;
  }
  *{
    margin:0;
    padding:0;
    font-family: "Roboto";
  }
  body{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
  }
  ol,ul{
    list-style: none;
  }
`;

export default GlobalStyle;
