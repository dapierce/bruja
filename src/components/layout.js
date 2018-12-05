import React from "react";

import { Link } from "gatsby";
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
  <div className={layoutStyles.container}>
    <Helmet>
      <html lang="en" />
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
        <ListLink to="#fundraiser">Fundraiser</ListLink>
        <li className={layoutStyles.headerMenuItem}>
          <a className={layoutStyles.button} href="https://www.vagaro.com/">
            Make an Appointment
          </a>
        </li>
      </ul>
    </header>
    {children}
    <footer>
      <div className={layoutStyles.footerData}>
        <table>
          <tbody>
          <tr style={{fontWeight: "bold"}}>
            <td>Hours</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>T.B.D.</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>T.B.D.</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>T.B.D.</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>T.B.D.</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>T.B.D.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={layoutStyles.address}>
        <p><a href="tel:1-206-395-8231">206-395-8231</a></p>
        <p>
          <a href="https://www.google.com/maps/place/511+N+85th+St,+Seattle,+WA+98103">
            511 N 85th St<br/>
            Seattle, WA 98103
          </a>
        </p>
        <p><a href="tisha@brujasalon.com">tisha@brujasalon.com</a></p>
      </div>
      <div>
        <a href="https://www.google.com/maps/place/511+N+85th+St,+Seattle,+WA+98103" 
        alt="Open address in Google Maps"><img className={layoutStyles.map} src={mapPic} 
        alt="Located on North 85th St between Fremont Ave and Dayton Ave"/></a>
      </div>
      <div className={layoutStyles.sitemap}>
        <ul className={layoutStyles.sitemapList}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="#profile">About</ListLink>
          <ListLink to="#fundraiser">Fundraiser</ListLink>
          <li><a href="https://www.vagaro.com/">Make an Appointment</a></li>
        </ul>
      </div>
    </footer>
  </div>
)