import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tishaPic from "../images/tisha-profile.jpg"
import hilaryPic from "../images/hilary-profile.jpg"

const BookNow = () => (
  <Layout>
    <SEO title="Book Now" />
    <div className="frame_one_column">
      <h1>Book an appointment</h1>
    </div>
    <div className="frame_booking">
      <a href="https://www.vagaro.com/brujahairsalon/book-now">
        <div className="stylist">
          <h2>Tisha</h2>
          <img className="stylist__pic" src={tishaPic} alt="Tisha" />
        </div>
      </a>
      <a href="https://www.vagaro.com/hilaryshairchair/book-now">
        <div className="stylist">
          <h2>Hilary</h2>
          <img className="stylist__pic" src={hilaryPic} alt="Hilary" />
        </div>
      </a>
    </div>
  </Layout>
)

export default BookNow
