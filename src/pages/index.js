import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image1 from "../images/salon-interior.jpg"

const insideStyles = {
  color: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
}

const IndexPage = () => (
  <Layout>
    <SEO />
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `45vh`,
        }}
      >
        <div style={insideStyles}>
          <h1
            style={{
              whiteSpace: `nowrap`,
              textShadow: `2px 3px 1px rgba(0,0,0,.5)`,
            }}
          >
            Magic is in the Hair
          </h1>
          <Link className="button" to="/book-now">
            Book Now
          </Link>
        </div>
      </div>
    </Parallax>
    <div style={{ height: `800px`, padding: `1rem 10vw` }}>
      <p />
      <p>Conjuring the best you in Seattle's Greenwood neighborhood!</p>
    </div>
  </Layout>
)

export default IndexPage
