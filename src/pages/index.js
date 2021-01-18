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
    <Parallax bgImage={image1} blur={0.5} strength={300}>
      <div
        style={{
          width: `100vw`,
          height: `60vh`,
          minHeight: `400px`,
          maxHeight: `600px`,
        }}
      >
        <div style={insideStyles}>
          <blockquote className="box_block">
            <h3>We've Moved!</h3>
            <p>
              A great new opportunity has presented itself in Seattle's Phinney
              Ridge neighborhood! We have moved the salon over, and are now
              accepting appointments at{" "}
              <a href="https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6764528,-122.356326,17z/data=!3m1!4b1!4m5!3m4!1s0x549015e3cb618539:0xde7c422f4b3c7cfc!8m2!3d47.6764528!4d-122.3541373">
                our new address
              </a>
              .
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
          We use and sell Kevin Murphy, Deva Curl and Skin Authority products to
          fully reveal your beautiful self.
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
