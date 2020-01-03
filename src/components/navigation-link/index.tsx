import { Link as GatsbyLink } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
  to: string
}

export const NavigationLink = ({ children, to }: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        setIsActive(isCurrent)
        return {}
      }}
    >
      <LinkText isActive={isActive}>{children}</LinkText>
    </Link>
  )
}

/**
 * Styled components
 */

const Link = styled(GatsbyLink)`
  text-decoration: none;
`

const LinkText = styled("span")<{ isActive: boolean }>`
  position: relative;
  font-family: ${theme.font.family.secondary};
  font-weight: normal;
  font-size: 16px;
  color: ${theme.colors.secondary};
  text-decoration: ${props => (props.isActive ? "underline" : "none")};
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`
