import { createGlobalStyle } from "styled-components"
import { theme } from "theme"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto&display=swap&subset=latin-ext');

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${theme.font.family.primary};
    font-weight: 400;
    font-size: 16px;
  }
`
