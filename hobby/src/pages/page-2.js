import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Dance</h1>
    <p>Dance is how you feel and how you groove</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
