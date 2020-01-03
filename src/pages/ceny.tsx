import { PageHeading } from "components/page-heading"
import SEO from "components/seo"
import React from "react"
import { Layout } from "components/layout"

export default () => {
  return (
    <Layout>
      <SEO title={"Ceny"} />
      <PageHeading>{`Ceny`}</PageHeading>
    </Layout>
  )
}
