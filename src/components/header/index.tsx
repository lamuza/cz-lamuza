import React from "react"
import styled from "styled-components"
import { HeaderLogoQuery } from "types/graphql-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

type Props = {
  children?: never
}

export const Header = (_: Props) => {
  const data: HeaderLogoQuery = useStaticQuery(graphql`
    query HeaderLogo {
      placeholderImage: file(relativePath: { eq: "lamuza.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const fluidImage = data?.placeholderImage?.childImageSharp?.fluid

  return (
    <Container>
      <Wrapper>
        <Link to={"/"}>
          <Logo fluid={fluidImage as FluidObject} alt={"logo"} />
        </Link>
      </Wrapper>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled("header")`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: white;
`

const Wrapper = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 220px auto;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  border-bottom: 1px solid #000;
`

const Logo = styled(Img)`
  position: relative;
  width: 220px;
`
