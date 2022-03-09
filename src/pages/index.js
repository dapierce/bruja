import React from "react"
import Link from "../components/link"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/gallery"
import Newsletter from "../components/newsletter"

const insideStyles = {
  position: "relative",
  top: "-25vh",
  textAlign: "center",
}

const IndexPage = () => (
  <Layout>
    <Seo />
    <StaticImage
      src="../images/salon-exterior.jpg"
      alt="Front door of Bruja Salon"
      layout="fullWidth"
      placeholder="none"
      backgroundColor="rgb(248, 222, 255)"
      style={{
        height: `50vh`,
        minHeight: `400px`,
      }}
    />
    <div style={insideStyles}>
      <Link className="button" to="/book-now" style={{ fontSize: "1.2rem" }}>
        Book Now
      </Link>
    </div>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>Conjuring the best you in Seattle's Phinney Ridge neighborhood!</p>
        <p>
          <strong>We are curly and kinky hair specialists,</strong> and we offer
          the full range of hair services from cuts to high fashion color. We
          use and sell Kevin Murphy, Deva Curl and Skin Authority products to
          fully reveal your beautiful self.
        </p>
      </div>
    </div>
    <div className="frame_two_columns">
      <Gallery />
      <Newsletter />
    </div>
  </Layout>
)

export default IndexPage
