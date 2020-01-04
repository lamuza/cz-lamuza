import { Logo } from "components/logo"
import { Link } from "gatsby"
import React from "react"
import { routes } from "routes"
import styled from "styled-components"
import { theme } from "theme"
import { Navigation } from "../navigation"
import { NavigationLink } from "../navigation-link"

type Props = {
  children?: never
}

export const Header = (_: Props) => (
  <Container>
    <Wrapper>
      <Link to={"/"}>
        <Logo height={"20px"} width={"auto"} />
      </Link>
      <Navigation>
        <NavigationLink to={routes.cs.home}>{`Úvod`}</NavigationLink>
        <NavigationLink to={routes.cs.services}>{`Služby`}</NavigationLink>
        <NavigationLink to={routes.cs.pricing}>{`Ceny`}</NavigationLink>
        <NavigationLink to={routes.cs.about}>{`O nás`}</NavigationLink>
        <NavigationLink to={routes.cs.contact}>{`Kontakt`}</NavigationLink>
      </Navigation>
    </Wrapper>
  </Container>
)

/**
 * Styled components
 */

export const HEADER_HEIGHT = 80

const Container = styled("header")`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${theme.header.backgroundColor};
  box-shadow: 0 2px 4px ${theme.colors.shadow};
`

const Wrapper = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: max-content auto;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
`
