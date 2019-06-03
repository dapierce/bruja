import React from "react";

import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import layoutStyles from "./layout.module.css";

import logoPic from "../images/logo.png";
import mapPic from "../images/map.png";

const ListLink = props => (
  <li>
    <a href={props.to}>{props.children}</a>
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
        <ListLink to="#profile">Stylists</ListLink>
        <ListLink to="#product">Products</ListLink>
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
            <tr id="sun">
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
            <tr id="mon">
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr id="tue">
              <td>Tuesday</td>
              <td>5:00 PM - 9:00 PM</td>
            </tr>
            <tr id="wed">
              <td>Wednesday</td>
              <td>9:00 AM - 8:00 PM</td>
            </tr>
            <tr id="thu">
              <td>Thursday</td>
              <td>12:00 PM - 9:00 PM</td>
            </tr>
            <tr id="fri">
              <td>Friday</td>
              <td>9:30 AM - 7:00 PM</td>
            </tr>
            <tr id="sat">
              <td>Saturday</td>
              <td>9:00 AM - 7:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={layoutStyles.address}>
        <p><span itemProp="telephone"><a href="tel:+12063958231">206-395-8231</a></span></p>
        <p>
          <a href={data.site.siteMetadata.googleMapsLink}>
            511 N 85th St<br/>
            Seattle, WA 98103
          </a>
        </p>
        <p><a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a></p>
      </div>
      <div>
        <a href={data.site.siteMetadata.googleMapsLink} alt="Open address in Google Maps">
          <img className={layoutStyles.map} src={mapPic} 
          alt="Located on North 85th St between Fremont Ave and Dayton Ave"/>
        </a>
      </div>
      <div className={layoutStyles.sitemap}>
        <ul className={layoutStyles.sitemapList}>
          <ListLink to="#profile">Stylists</ListLink>
          <ListLink to="#product">Products</ListLink>
          <li><a href={data.site.siteMetadata.bookingLink}>Make an Appointment</a></li>
        </ul>
      </div>
    </footer>
  </div>
)}
/>
)