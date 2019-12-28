import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
  to: string
}

export const NavigationLink = ({ children, to }: Props) => {
  return (
    <StyledLink
      to={to}
      getProps={({ isCurrent }) => {
        return isCurrent ? { style: { textDecoration: "underline" } } : {}
      }}
    >
      {children}
    </StyledLink>
  )
}

/**
 * Styled components
 */

const StyledLink = styled(Link)`
  position: relative;
  font-family: ${theme.font.family.secondary};
  font-weight: normal;
  font-size: 18px;
  color: ${theme.colors.black};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`
