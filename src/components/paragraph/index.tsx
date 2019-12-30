import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
}

export const Paragraph = ({ children }: Props) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

/**
 * Styled components
 */

const StyledParagraph = styled("p")`
  position: relative;
  color: ${theme.colors.secondary};
`
