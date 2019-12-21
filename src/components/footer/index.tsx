import React from "react"
import styled from "styled-components"
import { Copyright } from "components/footer/copyright"
import { SocialLinks } from "components/footer/social-links"

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
  padding: 40px 0;
  width: 100%;
  background-color: whitesmoke;
`

const Wrapper = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "copyright . social-links";
  width: 100%;
  max-width: 1024px;
  padding: 0 20px;
`
