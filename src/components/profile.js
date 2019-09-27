import React from "react"
import { StaticQuery, graphql } from "gatsby"

import profileStyles from "./profile.module.css"
import layoutStyles from "./layout.module.css"

import profilePicTisha from "../images/tisha-profile.jpg"
import profilePicHilary from "../images/hilary-profile.jpg"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            instagramLink
            bookingLink
            hilaryBookingLink
          }
        }
      }
    `}
    render={data => (
      <div className={profileStyles.container}>
        <div id="profile" className={layoutStyles.anchor} />
        <div className={profileStyles.profileContainer}>
          <h2 className={profileStyles.name}>Tisha</h2>
          <h3 className={profileStyles.profileTitle}>Stylist and owner</h3>
          <img
            className={profileStyles.profileImg}
            src={profilePicTisha}
            alt="Tisha"
          />
          <div className={profileStyles.profileDesc}>
            <p>
              Tisha has been a hairstylist in Seattle for almost a decade, with
              interests in hair, art, music, nature, fashion and tech. Tisha's
              keen eye and attention to detail along with her extensive
              background in color theory and continuing education means she
              brings with every service her passion for conjuring the best you.
            </p>
            <p>It's not just a glamor it's a transformation!</p>
            <p>Phone: <a href="tel:+12063958231">206-395-8231</a><br />Email: <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a></p>
            <ul className={profileStyles.buttonList}>
              <li>
                <a
                  className={profileStyles.button}
                  href={data.site.siteMetadata.bookingLink}
                >
                  Make an appointment
                </a>
              </li>
              <li>
                <a
                  className={profileStyles.button}
                  href={data.site.siteMetadata.instagramLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className={profileStyles.button}
                  href="https://tishaturner.com"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={profileStyles.profileContainer}>
        <h2 className={profileStyles.name}>Hilary</h2>
          <h3 className={profileStyles.profileTitle}>Stylist</h3>
          <img
            className={profileStyles.profileImg}
            src={profilePicHilary}
            alt="Hilary"
          />
          <div className={profileStyles.profileDesc}>
            <p>
              Hilary has been living her dream of making Seattlites look and 
              feel their best since 2010.  Straight or curly, fine or coarse, 
              short or long - she loves to do it all.  Other than making her 
              clients look and feel their best, her goal is to create ease, 
              style and longevity in every cut and color (and extensions!) that
              she does and to educate her clients on how to make the most of 
              their hair at home, whether you’re the wash-and-go type or you 
              like put some effort in to styling. She’s always excited to meet
              new people and to play with new hair!
            </p>
            <p>Phone: <a href="tel:+13607751182">360-775-1182</a><br />Email: <a href="mailto:hilarys.hair.chair@gmail.com">hilarys.hair.chair@gmail.com</a></p>
            <ul className={profileStyles.buttonList}>
              <li>
                <a
                  className={profileStyles.button}
                  href={data.site.siteMetadata.hilaryBookingLink}
                >
                  Make an appointment
                </a>
              </li>
              <li>
                <a
                  className={profileStyles.button}
                  href="https://www.instagram.com/hilary.does.hair/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )}
  />
)
