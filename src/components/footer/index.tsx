import React from "react"
import styled from "styled-components"
import { Copyright } from "components/footer/copyright"
import { SocialLinks } from "components/footer/social-links"
import { theme } from "theme"

type Props = {}

export const Footer = (_: Props) => {
  return (
    <Container>
      <Wrapper>
        <Copyright />
        <SocialLinks />
      </Wrapper>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 80px 0 40px 0;
  width: 100%;
  background-color: ${theme.footer.backgroundColor};
  background-image: ${theme.footer.backgroundImage};
`

const Wrapper = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "copyright . social-links";
  align-items: end;
  width: 100%;
  max-width: 1024px;
  padding: 0 40px;
`
