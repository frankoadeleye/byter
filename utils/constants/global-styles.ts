import { createGlobalStyle } from "styled-components";
import { FontSizeFor } from "../functions/font-size-for";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  html,
  body {
      height: 100%;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-family: 'Overpass', sans-serif;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  div,a,button,p,input,small,code,span{
      font-family: inherit;
      ${FontSizeFor.NormalText};
  }
  
  



`;

export default GlobalStyles;
