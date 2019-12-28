import { createGlobalStyle } from "styled-components"
import * as fonts from "fonts"
import { theme } from "theme"

export const GlobalStyle = createGlobalStyle`
  /* ibm-plex-sans-regular - latin_latin-ext */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'), local('IBMPlexSans'),
         url(${fonts.IBMPlexSansRegularWOFF2}) format('woff2'), /* Super Modern Browsers */
         url(${fonts.IBMPlexSansRegularWOFF}) format('woff'), /* Modern Browsers */
  }
  
  /* roboto-regular - latin_latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
         url(${fonts.RobotoRegularWOFF2}) format('woff2'), /* Super Modern Browsers */
         url(${fonts.RobotoRegularWOFF}) format('woff'); /* Modern Browsers */
  }

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
