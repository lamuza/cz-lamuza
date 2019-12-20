/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/header"
import "typeface-ibm-plex-sans"
import "typeface-roboto"
import { GlobalStyle } from "./global-style"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={"flex flex-col items-center p-10"}>{children}</main>
      <footer className={"flex flex-col items-center p-2"}>
        <p>
          telefon:{" "}
          <a href={"tel:+420733113525"} className={"text-primary"}>
            +420 733 113 525
          </a>
        </p>
        <p>
          email:{" "}
          <a href={"mailto:bendova@lamuza.cz"} className={"text-primary"}>
            bendova@lamuza.cz
          </a>
        </p>
        <p className={"p-2"}>Hlinecká 1558/3, České Budějovice, 37306</p>
      </footer>
    </>
  )
}

export default Layout
