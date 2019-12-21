import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { FooterLogoQuery } from "types/graphql-types"
import { theme } from "theme"

type Props = {
  children?: never
}

export const Copyright = (_: Props) => {
  const currentYear = new Date().getFullYear()
  const data: FooterLogoQuery = useStaticQuery(graphql`
    query FooterLogo {
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
      <Link to={"/"}>
        <Logo fluid={fluidImage as FluidObject} alt={"logo"} />
      </Link>
      <Motto>jazyky srdcem</Motto>
      <CopyrightText>
        {`© ${currentYear} Lamuza | `}
        <AnchorLink
          href={
            "https://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&OKRES=&CASTOBCE=&OBEC=&ULICE=&CDOM=&COR=&COZ=&ICO=&OBCHJM=&OBCHJMATD=0&ROLES=P&JMENO=%B9%E1rka&PRIJMENI=Bendov%E1&NAROZENI=&ROLE=&VYPIS=1&PODLE=osoba&Action=List&IDOSOBY=21e9662eda926277f506"
          }
          title={"Bc. Šárka Bendová, MSc - Živnostenský rejstřík"}
        >{`Bc. Šárka Bendová, MSc.`}</AnchorLink>
      </CopyrightText>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-area: copyright;
`

const Logo = styled(Img)`
  position: relative;
  width: 120px;
`

const Motto = styled("span")`
  position: relative;
  font-size: 14px;
  font-weight: 300;
  color: gray;
  margin-top: 5px;
`

const CopyrightText = styled("span")`
  position: relative;
  font-size: 12px;
  font-weight: 300;
  color: black;
  margin-top: 10px;
`

const AnchorLink = styled("a")`
  position: relative;
  color: ${theme.colors.primary};
`
