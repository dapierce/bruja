import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image1 from "../images/water.jpg"

const Success = () => (
  <Layout>
    <SEO title="Thank you" />
    <div className="frame_one_column">
      <h1>Thank you!</h1>
    </div>
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `25vh`,
          minHeight: `100px`,
          maxHeight: `300px`,
        }}
      ></div>
    </Parallax>
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
