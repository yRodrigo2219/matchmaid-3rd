import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h3 {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font.montserrat};
    font-size: ${(props) => props.theme.font.size.h3};
    color: ${(props) => props.theme.color.theme.dark.zero};
  }
  
  h5 {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font.montserrat};
    font-size: ${(props) => props.theme.font.size.h5};
    color: ${(props) => props.theme.color.theme.dark.zero};
  }

  h6 {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font.montserrat};
    font-size: ${(props) => props.theme.font.size.h6};
    color: ${(props) => props.theme.color.theme.dark.zero};
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
