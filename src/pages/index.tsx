import { PageHeading } from "components/page-heading"
import React from "react"

import { Layout } from "components/layout"
import SEO from "components/seo"

export default () => (
  <Layout>
    <SEO title={"Úvod"} />
    <PageHeading>{`Vítejte!`}</PageHeading>
  </Layout>
)
