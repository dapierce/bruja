import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram"
import Newsletter from "../components/newsletter"
import Map from "../components/map"

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
          maxHeight: `500px`,
        }}
      >
        <div style={insideStyles}>
          <Link className="button" to="/book-now">
            Book Now
          </Link>
        </div>
      </div>
    </Parallax>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>
          Conjuring the best you in Seattle's Greenwood neighborhood. We offer
          the full range of hair services from cuts to high fashion color.
        </p>
        <blockquote className="box_block">
          City of Seattle closures include all businesses including barber shops
          and hair salons. We will be contacting scheduled clients to reschedule
          their appointments.
          <br />
          Thank you for your continued support. If you would like to purchase a
          gift certificate or prepay for your next appointment please contact us
          at <a href="mailto:brujahairsalon@gmail.com">brujahairsalon@gmail.com</a>
          <br />
          We wish everyone continued wellness, love and light during this time.
          <h4>Bruja Salon</h4>
        </blockquote>
      </div>
    </div>
    <div className="frame_two_columns">
      <Instagram />
      <Newsletter />
    </div>
    <Map />
  </Layout>
)

export default IndexPage
