import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Thank you" />
    <div className="frame_one_column">
      <h1>Thank you!</h1>
    </div>
    <StaticImage
      src="../images/water.jpg"
      alt="Water"
      layout="fullWidth"
      placeholder="none"
      backgroundColor="rgb(248, 222, 255)"
      style={{
        height: `25vh`,
        minHeight: `100px`,
        maxHeight: `300px`,
      }}
    />
    <div className="frame_one_column">
      <div className="centered_p">
        <p>
          Thank you for subscribing! Check your email for updates and discounts
          to come!
          <br />
          <br />
        </p>
        <p style={{ textAlign: `center` }}>
          <Link to="/">Click here to go back.</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default Success
