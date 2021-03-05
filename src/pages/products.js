import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const heroImgStyle = {
  minHeight: `400px`,
}

const heroContainerStyle = {
  height: `25vh`,
  minHeight: `100px`,
  maxHeight: `300px`,
}

const Products = () => (
  <Layout>
    <SEO title="Products" />
    <div className="frame_one_column">
      <h1>Products</h1>
    </div>
    <Hero containerStyle={heroContainerStyle}>
      <StaticImage
        className="hero__img"
        src="../images/water.jpg"
        alt="Water"
        layout="fullWidth"
        placeholder="none"
        backgroundColor="rgb(248, 222, 255)"
        style={heroImgStyle}
      />
    </Hero>
    <div className="frame_two_columns">
      <div className="box_p">
        <h2>Kevin Murphy</h2>
        <p>
          We use Kevin Murphy color and hair products at Bruja because they
          offer exceptional care for your hair, and are environmentally
          conscious. They are committed to products that are sulphate and
          paraben free and use no animal testing. They use ocean waste plastic
          for packaging and are conscious of leaving a small environmental
          footprint.
        </p>
        <p>
          We have their product ready to buy at our salon, but if you would like
          Kevin Murphy delivered straight to your door, you can order product
          here:
        </p>
        <p className="button_p">
          <a
            className="button"
            href="https://app.saloninteractive.com/cel/Brujasalon"
          >
            Buy Kevin Murphy
          </a>
        </p>
      </div>
      <div className="box_p">
        <h2>Deva Curl</h2>
        <p>
          Specializing in curly hair of all types, Deva Curl has a product for
          your curl type! These products are free of sulfates, parabens, and
          silicones to ensure they hydrate and nurish your hair without damaging
          it, and they offer No Poo conditioner, an alternative to shampoo that
          avoids removing important natural oils. They are 100% free of animal
          testing.
        </p>
      </div>
      <div className="box_p">
        <h2>Skin Authority</h2>
        <p>
          Their products incorporate the latest in skin care science to offer
          the healthiest solutions for your unique skin care needs. Skin
          Authority products have no parabens, no added dyes, no added perfumes
          and no mirco beads for clean skin care. Their products are made
          sustainably with no animal testing and created using renewable energy.
        </p>
      </div>
    </div>
  </Layout>
)

export default Products
