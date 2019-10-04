import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram"
import Newsletter from "../components/newsletter"

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
    <SEO title="Home" />
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `50vh`,
          minHeight: `400px`,
          maxHeight: `500px`,
        }}
      >
        <div style={insideStyles}>
          <h1
            style={{
              textShadow: `3px 3px 6px rgba(0,0,0,.9)`,
              fontWeight: `400`,
            }}
          >
            <span className="nobreak">Magic is in the</span>
            <span className="nobreak"> Hair</span>
          </h1>
          <Link className="button" to="/book-now">
            Book Now
          </Link>
        </div>
      </div>
    </Parallax>
    <div className="frame_one_column">
      <p>
        Conjuring the best you in Seattle's Greenwood neighborhood. We offer the
        full range of hair services from cuts to high fashion color.
      </p>
    </div>
    <div className="frame_two_columns">
      <Instagram />
      <Newsletter />
    </div>
  </Layout>
)

export default IndexPage
