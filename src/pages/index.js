import React from "react"
import Link from "../components/link"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram-single"
import Newsletter from "../components/newsletter"
// import Map from "../components/map"

import image1 from "../images/salon-exterior.jpg"

const insideStyles = {
  color: "white",
  paddingTop: 20,
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
          height: `50vh`,
          minHeight: `400px`,
          maxHeight: `600px`,
        }}
      >
        <div style={insideStyles}>
          <blockquote className="box_block">
            <h3>We're Moving!</h3>
            <p>
              A great new opportunity has presented itself in Seattle's Phinney
              Ridge neighborhood! We are preparing to move, and should be set up
              on the last week of December.
              <br />
              Thank you for your continued support!
            </p>
          </blockquote>
        </div>
      </div>
    </Parallax>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>
          Conjuring the best you in Seattle's Phinney Ridge neighborhood. We
          offer the full range of hair services from cuts to high fashion color.
          <br />
          <br />
          Please read this page for your next appointment:
        </p>
        <p className="button_p">
          <Link className="button" to="/covid19">
            COVID-19 Information
          </Link>
        </p>
      </div>
    </div>
    <div className="frame_two_columns">
      <Instagram />
      <Newsletter />
    </div>
    {/* <Map /> */}
  </Layout>
)

export default IndexPage
