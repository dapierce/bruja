import React from "react"

import Link from "./link"
import Hours from "./hours"

import * as footerStyles from "./styles/footer.module.css"

const Footer = ({ menuLinks }) => (
  <footer>
    <div className="frame_two_columns">
      <div
        className={footerStyles.location}
        vocab="https://schema.org/"
        typeof="HairSalon"
      >
        <p className={footerStyles.address}>
          <a
            property="hasMap"
            href="https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6764528,-122.356326,17z/data=!3m1!4b1!4m5!3m4!1s0x549015e3cb618539:0xde7c422f4b3c7cfc!8m2!3d47.6764528!4d-122.3541373"
          >
            <span className={footerStyles.title} property="name">
              Bruja Hair Salon
            </span>
            <br />
            <span property="address" typeof="PostalAddress">
              6512 Phinney Ave N
            </span>
            <br />
            <span property="addressLocality">Seattle</span>,{" "}
            <span property="addressRegion">WA</span>{" "}
            <span property="postalCode">98103</span>
          </a>
        </p>
        <div className={footerStyles.contact} property="member" typeof="Person">
          <p>
            <span className={footerStyles.title}>
              Contact <span property="name">Tisha</span>
            </span>
            <br />
            <a href="tel:+12063958231" property="telephone">
              206-395-8231
            </a>
            <br />
            <a href="mailto:tisha@brujasalon.com" property="email">
              tisha@brujasalon.com
            </a>
          </p>
        </div>
        <div className={footerStyles.contact} property="member" typeof="Person">
          <p>
            <span className={footerStyles.title}>
              Contact <span property="name">James</span>
            </span>
            <br />
            <a href="tel:+12067024465" property="telephone">
              206-702-4465
            </a>
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
