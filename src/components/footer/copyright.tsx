import { Logo } from "components/logo"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children?: never
}

export const Copyright = (_: Props) => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <Link to={"/"}>
        <Logo height={"16px"} width={"auto"} />
      </Link>
      <Motto>{`překlady | tlumočení | výuka`}</Motto>
      <CopyrightText>
        {`© ${currentYear} Lamuza | `}
        <AnchorLink
          href={
            "https://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJVYP&OKRES=&CASTOBCE=&OBEC=&ULICE=&CDOM=&COR=&COZ=&ICO=&OBCHJM=&OBCHJMATD=0&ROLES=P&JMENO=%B9%E1rka&PRIJMENI=Bendov%E1&NAROZENI=&ROLE=&VYPIS=1&PODLE=osoba&IDOSOBY=46e4f37ed7ef897b99ca&PRESVYBER=1&IDICO=4fedf070dee99068&HISTORIE=0"
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
  align-items: flex-start;
  grid-area: copyright;
`

const Motto = styled("span")`
  position: relative;
  font-size: 14px;
  color: ${theme.colors.secondary};
  margin-top: 5px;
`

const CopyrightText = styled("span")`
  position: relative;
  font-size: 12px;
  color: ${theme.colors.primary};
  margin-top: 10px;
`

const AnchorLink = styled("a")`
  position: relative;
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
