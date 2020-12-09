import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tishaPic from "../images/tisha-profile.jpg"

const Stylists = () => (
  <Layout>
    <SEO title="Stylists" />
    <div className="frame_one_column">
      <h1>Stylists</h1>
      <div className="frame_two_columns">
        <div className="stylist">
          <h2>Tisha</h2>
          <h3>Owner, Stylist</h3>
          <img className="stylist__pic" src={tishaPic} alt="Tisha" />
          <p className="box_p">
            Tisha has been a hairstylist in Seattle for almost a decade, with
            interests in hair, art, music, nature, fashion and tech. Tisha's
            keen eye and attention to detail along with her extensive background
            in color theory and continuing education means she brings with every
            service her passion for conjuring the best you.
            <br />
            <br />
            It's not just a glamor it's a transformation!
          </p>
          <p className="box_p" style={{ textAlign: `center` }}>
            Phone: <a href="tel:+12063958231">206-395-8231</a>
            <br />
            Email:{" "}
            <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
          </p>
          <div className="button_p">
            <a className="button" href="https://www.instagram.com/bruja_hair/">
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
    </div>
  </Layout>
)

export default Stylists
