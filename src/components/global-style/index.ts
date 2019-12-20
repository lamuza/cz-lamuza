import { createGlobalStyle } from "styled-components"
import { theme } from "theme"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.font.family.primary};
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
`
