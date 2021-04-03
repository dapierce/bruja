import React from "react"

import Link from "./link"
import Hours from "./hours"

import * as footerStyles from "./styles/footer.module.css"

const Footer = ({ menuLinks }) => (
  <footer>
    <div className="frame_two_columns">
      <div className={footerStyles.location}>
        <p className={footerStyles.address}>
          <a href="https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6764528,-122.356326,17z/data=!3m1!4b1!4m5!3m4!1s0x549015e3cb618539:0xde7c422f4b3c7cfc!8m2!3d47.6764528!4d-122.3541373">
            <span className={footerStyles.title}>Bruja Hair Salon</span>
            <br />
            6512 Phinney Ave N
            <br />
            Seattle, WA 98103
          </a>
        </p>
        <div className={footerStyles.contact}>
          <p>
            <span className={footerStyles.title}>Contact Tisha</span>
            <br />
            <a href="tel:+12063958231">206-395-8231</a>
            <br />
            <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
          </p>
        </div>
      </div>
      <Hours />
    </div>
    <div className="frame_one_column">
      <div className={footerStyles.sitemap}>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
