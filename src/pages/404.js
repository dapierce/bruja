import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page not found" />
    <h1>Page not found</h1>
    <p>
      There is nothing here, please click{" "}
      <Link to="/">here to go back Home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
