import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
}

export const SectionHeading = ({ children }: Props) => {
  return <StyledH2>{children}</StyledH2>
}

/**
 * Styled components
 */

const StyledH2 = styled("h2")`
  position: relative;
  color: ${theme.colors.secondary};
  font-family: ${theme.font.family.secondary};
  margin-block-start: 1.83em;
  margin-block-end: 0.83em;
`
