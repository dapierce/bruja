import React from "react";

import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import layoutStyles from "./layout.module.css";

import logoPic from "../images/logo.svg";
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
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Josefin+Sans:400,700&display=swap" rel="stylesheet" />
      <meta name="description" content="Magic is in the hair! Conjuring the best you in Seattle's Greenwood neighborhood. We offer the full range of hair services from cuts to high fashion color." />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link href="/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
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
          <Link className={layoutStyles.button} to="book-now/">
            Make an Appointment
          </Link>
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
            <tr style={new Date().getDay() === 0 ? { fontWeight: "bold" } : {}}>
              <td>Sunday</td>
              <td>10:00 AM - 5:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 1 ? { fontWeight: "bold" } : {}}>
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr style={new Date().getDay() === 2 ? { fontWeight: "bold" } : {}}>
              <td>Tuesday</td>
              <td>Closed</td>
            </tr>
            <tr style={new Date().getDay() === 3 ? { fontWeight: "bold" } : {}}>
              <td>Wednesday</td>
              <td>10:00 AM - 8:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 4 ? { fontWeight: "bold" } : {}}>
              <td>Thursday</td>
              <td>12:00 PM - 8:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 5 ? { fontWeight: "bold" } : {}}>
              <td>Friday</td>
              <td>10:00 AM - 8:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 6 ? { fontWeight: "bold" } : {}}>
              <td>Saturday</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={layoutStyles.address}>
        <p>
          Contact Tisha<br />
          <span itemProp="telephone"><a href="tel:+12063958231">206-395-8231</a></span><br />
          <a href="mailto:tisha@brujasalon.com">tisha@brujasalon.com</a>
        </p>
        <p>
          Contact Hilary<br />
          <span itemProp="telephone"><a href="tel:+13607751182">360-775-1182</a></span><br />
          <a href="mailto:hilarys.hair.chair@gmail.com">hilarys.hair.chair@gmail.com</a>
        </p>
          <a href={data.site.siteMetadata.googleMapsLink}>
            511 N 85th St<br/>
            Seattle, WA 98103
          </a>
        </p>
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
          <ListLink to="book-now/">Book Now</ListLink>
        </ul>
      </div>
    </footer>
  </div>
)}
/>
)