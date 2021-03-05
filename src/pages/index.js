import React from "react"
import Link from "../components/link"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import Newsletter from "../components/newsletter"
// import Map from "../components/map"

const heroContainerStyle = {
  height: `50vh`,
  minHeight: `400px`,
}

// TODO: make media queries for StaticImage min height
const heroImgStyle = {
  minHeight: `900px`,
}

const heroInsideStyle = {
  position: "absolute",
  right: "0",
  left: "0",
  top: "calc( 140px + 20vh)",
  textAlign: "center",
}

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero containerStyle={heroContainerStyle}>
      <StaticImage
        className="hero__img"
        src="../images/salon-exterior.jpg"
        alt="Front door of Bruja Salon"
        layout="fullWidth"
        placeholder="none"
        backgroundColor="#fae8ff"
        style={heroImgStyle}
      />
    </Hero>
    <div style={heroInsideStyle}>
      <Link
        className="button"
        to="https://www.vagaro.com/brujahairsalon/book-now"
        style={{ fontSize: "1.2rem" }}
      >
        Book Now
      </Link>
    </div>
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
      <Gallery />
      <Newsletter />
    </div>
    {/* <Map /> */}
  </Layout>
)

export default IndexPage
