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
            206-510-2324
          </a>
          <br />
          Email:{" "}
          <a href="mailto:brujahairsalon@gmail.com" property="email">
            brujahairsalon@gmail.com
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
      <div
        className="stylist"
        vocab="http://schema.org/"
        resource="#james"
        typeof="Person"
      >
        <h2 property="name">James</h2>
        <h3 property="jobTitle">Stylist</h3>
        <StaticImage
          className="stylist__pic"
          src="../images/james-profile.jpg"
          alt="James"
          property="image"
        />
        <p className="box_p" property="description">
          James Duckett is a highly talented Deva Certified Stylist who
          specializes in curly hair, a Color Expert who thrives on creating
          personalized hair concepts at the highest level for his clients. With
          over 23 years in the hair industry, James worked as the Regional Color
          Director for Elizabeth Arden in Washington DC and Chicago before
          moving to New York City where he worked for John Barrett in the
          Bergdorf Goodman store and then for Roy Teeluk at his Salon in
          Manhattan right off 5th Avenue. He eventually became creative director
          for six of the Jeffrey Stein Salons throughout Manhattan. James moved
          to Seattle in 2015 to be closer to his family. James is a creative and
          dynamic stylist and educator who is generous to his clients and fellow
          stylists.
        </p>
        <p className="box_p" style={{ textAlign: `center` }}>
          Phone:{" "}
          <a href="tel:+12067024465" property="telephone">
            206-702-4465
          </a>
          <br />
        </p>
        <div className="button_p">
          <a
            className="button"
            property="url"
            href="https://www.instagram.com/styledbyjames/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Stylists
