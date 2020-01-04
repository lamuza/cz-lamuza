import { Link as GatsbyLink } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
  to: string
}

export const NavigationLink = ({ children, to }: Props) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        setIsSelected(isCurrent)
        return {}
      }}
    >
      <LinkText isSelected={isSelected}>{children}</LinkText>
    </Link>
  )
}

/**
 * Styled components
 */

const Link = styled(GatsbyLink)`
  text-decoration: none;
`

const LinkText = styled("span")<{ isSelected: boolean }>`
  position: relative;
  font-family: ${theme.font.family.secondary};
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.isSelected ? theme.navigationLink.color.selected : theme.navigationLink.color.default)};
  text-transform: uppercase;
  border-bottom: 1px solid ${props => (props.isSelected ? theme.navigationLink.color.selected : "transparent")};
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${theme.navigationLink.color.highlighted};
    border-bottom: 1px solid ${props => (props.isSelected ? theme.navigationLink.color.highlighted : "transparent")};
  }
`
