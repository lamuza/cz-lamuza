import { PageHeading } from "components/page-heading"
import { Paragraph } from "components/paragraph"
import React from "react"

import SEO from "components/seo"
import { Layout } from "components/layout"

export default () => (
  <Layout>
    <SEO title={"404: Nenalezeno"} />
    <PageHeading>{`Nenalezeno`}</PageHeading>
    <Paragraph>{`You just hit a route that doesn't exist... the sadness.`}</Paragraph>
  </Layout>
)
