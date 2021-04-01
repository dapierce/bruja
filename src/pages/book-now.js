import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import tishaPic from "../images/tisha-profile.jpg"

const BookNow = () => (
  <Layout>
    <Seo title="Book Now" />
    <div className="frame_one_column">
      <h1>Book an appointment</h1>
    </div>
    <div className="frame_booking">
      <div className="booking_stylist">
        <a href="https://www.vagaro.com/brujahairsalon/book-now">
          <div className="stylist">
            <h2>Tisha</h2>
            <img className="stylist__pic" src={tishaPic} alt="Tisha" />
          </div>
        </a>
      </div>
    </div>
  </Layout>
)

export default BookNow
