import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
}

export const PageHeading = ({ children }: Props) => {
  return <StyledH1>{children}</StyledH1>
}

/**
 * Styled components
 */

const StyledH1 = styled("h1")`
  position: relative;
  color: ${theme.colors.secondary};
  font-family: ${theme.font.family.secondary};
`
