import React from "react";

import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import layoutStyles from "./layout.module.css";
import logoPic from "../images/logo.png";
import mapPic from "../images/map.png";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            googleMapsLink,
            bookingLink
          }
        }
      }
    `
}
    render={data => (
  <div className={layoutStyles.container}>
    <Helmet>
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Macondo" rel="stylesheet" />
      <meta name="description" content="Magic is in the hair! Conjuring the best you in Seattle's Greenwood neighborhood. We offer the full range of hair services from cuts to high fashion color." />
    </Helmet>
    <header>
      <div className={layoutStyles.titleCrop}>
        <Link to="/">
          <img className={layoutStyles.title} src={logoPic} alt="Bruja Hair Salon"/>
        </Link>
      </div>
      <ul className={layoutStyles.headerMenu}>
        <ListLink to="#profile">About</ListLink>
        <ListLink to="#kevinMurphy">Kevin Murphy</ListLink>
        <ListLink to="#fundraiser">Fundraiser</ListLink>
        <li className={layoutStyles.headerMenuItem}>
          <a className={layoutStyles.button} href={data.site.siteMetadata.bookingLink}>
            Make an Appointment
          </a>
        </li>
      </ul>
    </header>
    {children}
    <footer>
      <div className={layoutStyles.hours}>
        <table>
          <tbody>
            <tr style={{fontWeight: "bold"}}>
              <td>Hours</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>5:00 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:30 AM - 7:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>9:00 AM - 7:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={layoutStyles.address}>
        <p><a href="tel:1-206-395-8231">206-395-8231</a></p>
        <p>
          <a href={data.site.siteMetadata.googleMapsLink}>
            511 N 85th St<br/>
            Seattle, WA 98103
          </a>
        </p>
        <p><a href="tisha@brujasalon.com">tisha@brujasalon.com</a></p>
      </div>
      <div>
        <a href={data.site.siteMetadata.googleMapsLink} alt="Open address in Google Maps">
          <img className={layoutStyles.map} src={mapPic} 
          alt="Located on North 85th St between Fremont Ave and Dayton Ave"/>
        </a>
      </div>
      <div className={layoutStyles.sitemap}>
        <ul className={layoutStyles.sitemapList}>
          <ListLink to="#profile">About</ListLink>
          <ListLink to="#kevinMurphy">Kevin Murphy</ListLink>
          <ListLink to="#fundraiser">Fundraiser</ListLink>
          <li><a href={data.site.siteMetadata.bookingLink}>Make an Appointment</a></li>
        </ul>
      </div>
    </footer>
  </div>
)}
/>
)