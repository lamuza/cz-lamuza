/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
// import { useStaticQuery, graphql } from "gatsby"

import { Header } from "components/header"
import styled from "styled-components"
import { GlobalStyle } from "./global-style"
import { Footer } from "components/footer"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Content>{children}</Content>
        <Header />
        <Footer />
        {/*<footer className={"flex flex-col items-center p-2"}>*/}
        {/*  <p>*/}
        {/*    telefon:{" "}*/}
        {/*    <a href={"tel:+420733113525"} className={"text-primary"}>*/}
        {/*      +420 733 113 525*/}
        {/*    </a>*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    email:{" "}*/}
        {/*    <a href={"mailto:bendova@lamuza.cz"} className={"text-primary"}>*/}
        {/*      bendova@lamuza.cz*/}
        {/*    </a>*/}
        {/*  </p>*/}
        {/*  <p className={"p-2"}>Hlinecká 1558/3, České Budějovice, 37306</p>*/}
        {/*</footer>*/}
      </Container>
    </Fragment>
  )
}

/**
 * Styled components
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: auto max-content;
  grid-template-areas: "content" "footer";
  width: 100%;
  min-height: 100vh;
`

const Content = styled("main")`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 100px 20px 0 20px;
  grid-area: content;
`
