import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
  to: string
}

export const NavigationLink = ({ children, to }: Props) => {
  return <Container to={to}>{children}</Container>
}

/**
 * Styled components
 */

const Container = styled(Link)`
  position: relative;
  font-family: ${theme.font.family.secondary};
  font-weight: normal;
  font-size: 18px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`
