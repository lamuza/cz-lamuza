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
  font-family: ${theme.font.family.secondary};
  font-weight: 400;
  background-color: ${theme.pageHeading.backgroundColor};
  background-image: ${theme.pageHeading.backgroundImage};
  color: ${theme.pageHeading.color};
  padding: 8px 20px;
  margin: 0;
  border-radius: 3px;
`
