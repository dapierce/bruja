import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./footer.module.css"

const Footer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMapQuery {
        site {
          siteMetadata {
            siteMap {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="frame_one_column">
          <p className={styles.address}>
            <a href="https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6903981,-122.3542453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xde7c422f4b3c7cfc!8m2!3d47.6903981!4d-122.3520566">
              <span className={styles.title}>Bruja Hair Salon</span>
              <br />
              511 N 85th St
              <br />
              Seattle, WA 98103
            </a>
          </p>
        </div>
        <div className="frame_two_columns">
          <div className={styles.contact}>
            <p>
              <span className={styles.title}>Contact Tisha</span>
              <br />
              <span itemProp="telephone">
                <a href="tel:+12063958231">206-395-8231</a>
              </span>
              <br />
              <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
            </p>
          </div>
          <div className={styles.contact}>
            <p>
              <span className={styles.title}>Contact Hilary</span>
              <br />
              <span itemProp="telephone">
                <a href="tel:+13607751182">360-775-1182</a>
              </span>
              <br />
              <a href="mailto:hilarys.hair.chair@gmail.com">
                hilarys.hair.chair@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="frame_one_column">
          <div className={styles.sitemap}>
            <ul>
              {data.site.siteMetadata.siteMap.map(link => (
                <li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
