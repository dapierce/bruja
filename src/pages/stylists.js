import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Stylists = () => (
  <Layout>
    <Seo title="Stylists" />
    <div className="frame_one_column">
      <h1>Stylists</h1>
    </div>
    <div className="frame_two_columns">
      <div
        className="stylist"
        vocab="http://schema.org/"
        resource="#tisha"
        typeof="Person"
      >
        <h2 property="name">Tisha</h2>
        <h3 property="jobTitle">Owner, Stylist</h3>
        <StaticImage
          className="stylist__pic"
          src="../images/tisha-profile.jpg"
          alt="Tisha"
          property="image"
        />
        <p className="box_p" property="description">
          Tisha has been a hairstylist in Seattle for almost a decade, with
          interests in hair, art, music, nature, fashion and tech. Tisha's keen
          eye and attention to detail along with her extensive background in
          color theory and continuing education means she brings with every
          service her passion for conjuring the best you.
          <br />
          <br />
          It's not just a glamor it's a transformation!
        </p>
        <p className="box_p" style={{ textAlign: `center` }}>
          Phone:{" "}
          <a href="tel:+12063958231" property="telephone">
            206-395-8231
          </a>
          <br />
          Email:{" "}
          <a href="mailto:tisha@brujasalon.com" property="email">
            tisha@brujasalon.com
          </a>
        </p>
        <div className="button_p">
          <a
            className="button"
            property="url"
            href="https://www.instagram.com/bruja_hair/"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="stylist">
        <h2>Hilary</h2>
        <p className="box_p" style={{ textAlign: `center` }}>
          Hilary has moved to Alter Hair Studio.
          <br />
          Contact her at{" "}
          <a href="mailto:hilarys.hair.chair@gmail.com">
            hilarys.hair.chair@gmail.com
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default Stylists
