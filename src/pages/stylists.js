import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tishaPic from "../images/tisha-profile.jpg"
import hilaryPic from "../images/hilary-profile.jpg"

const Stylists = () => (
  <Layout>
    <SEO title="Stylists" />
    <div className="frame_one_column">
      <h1>Stylists</h1>
    </div>
    <div className="frame_two_columns">
      <div className="stylist">
        <h2>Tisha</h2>
        <img className="stylist__pic" src={tishaPic} alt="Tisha" />
        <p className="box_p">
          Tisha has been a hairstylist in Seattle for almost a decade, with
          interests in hair, art, music, nature, fashion and tech. Tisha's keen
          eye and attention to detail along with her extensive background in
          color theory and continuing education means she brings with every
          service her passion for conjuring the best you.
          <br />
          <br />
          It's not just a glamor it's a transformation!
        </p>
        <p>
          Phone: <a href="tel:+12063958231">206-395-8231</a>
          <br />
          Email: <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
        </p>
        <div className="box_p">
          <a className="button" href="https://www.instagram.com/bruja_hair/">
            Instagram
          </a>
        </div>
      </div>
      <div className="stylist">
        <h2>Hilary</h2>
        <img className="stylist__pic" src={hilaryPic} alt="Hilary" />
        <p className="box_p">
          Hilary has been living her dream of making Seattlites look and feel
          their best since 2010. Straight or curly, fine or coarse, short or
          long - she loves to do it all. Other than making her clients look and
          feel their best, her goal is to create ease, style and longevity in
          every cut and color (and extensions!) that she does and to educate her
          clients on how to make the most of their hair at home, whether you’re
          the wash-and-go type or you like put some effort in to styling. She’s
          always excited to meet new people and to play with new hair!
        </p>
        <p>
          Phone: <a href="tel:+13607751182">360-775-1182</a>
          <br />
          Email:{" "}
          <a href="mailto:hilarys.hair.chair@gmail.com">
            hilarys.hair.chair@gmail.com
          </a>
        </p>

        <div className="box_p">
          <a
            className="button"
            href="https://www.instagram.com/hilary.does.hair/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Stylists
