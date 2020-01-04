import { Logo } from "components/logo"
import { Link } from "gatsby"
import React, { useLayoutEffect, useState } from "react"
import { routes } from "routes"
import styled from "styled-components"
import { theme } from "theme"
import { Navigation } from "../navigation"
import { NavigationLink } from "../navigation-link"

export const HEADER_HEIGHT = 80

type Props = {
  children?: never
}

export const Header = (_: Props) => {
  const [isTransparent, setIsTransparent] = useState(true)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > HEADER_HEIGHT / 2) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Container isTransparent={isTransparent}>
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
}

/**
 * Styled components
 */

const Container = styled("header")<{ isTransparent: boolean }>`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${props => (props.isTransparent ? "transparent" : theme.header.backgroundColor)};
  box-shadow: ${props => (props.isTransparent ? "none" : `0 2px 4px ${theme.header.shadow}`)};
  backdrop-filter: blur(8px);
  transition: all 250ms ease-in-out;
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
  padding: 0 40px;
`
