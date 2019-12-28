import { Logo } from "components/logo"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { Navigation } from "../navigation"
import { NavigationLink } from "../navigation-link"

export const HEADER_HEIGHT = 80

type Props = {
  children?: never
}

export const Header = (_: Props) => (
  <Container>
    <Wrapper>
      <Link to={"/"}>
        <Logo height={"40px"} />
      </Link>
      <Navigation>
        <NavigationLink to={"/"}>{`Úvod`}</NavigationLink>
        <NavigationLink to={"/sluzby"}>{`Služby`}</NavigationLink>
        <NavigationLink to={"/ceny"}>{`Ceny`}</NavigationLink>
        <NavigationLink to={"/o-nas"}>{`O nás`}</NavigationLink>
      </Navigation>
    </Wrapper>
  </Container>
)

/**
 * Styled components
 */

const Container = styled("header")`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 4px ${theme.colors.shadow};
`

const Wrapper = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 220px auto;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
`
