import React from "react"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <h1 className={"text-4xl my-4 px-2 font-bold"}>Jazyky srdcem - Language by heart</h1>
    <p className={"text-lg px-2 my-2"}>PŘEKLADY – TLUMOČENÍ – VÝUKA</p>
  </Layout>
)

export default IndexPage
