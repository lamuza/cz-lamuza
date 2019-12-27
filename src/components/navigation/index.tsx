import React from "react"
import styled from "styled-components"

type Props = {
  children: React.ReactNode
}

export const Navigation = ({ children }: Props) => {
  return <Container>{children}</Container>
}

/**
 * Styled components
 */

const Container = styled("nav")`
  display: grid;
  position: relative;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  justify-self: end;
`
