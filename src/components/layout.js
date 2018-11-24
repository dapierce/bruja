import React from "react";

import { Link } from "gatsby";

import layoutStyles from "./layout.module.css";
import logoPic from "./img/logo.png";
import mapPic from "./img/map.png";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={layoutStyles.layout} style={{ margin: `0`, padding: `0` }}>
    <header style={{ display: `grid`, gridAutoColumns: `repeat(3, 1fr)`}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <img className={layoutStyles.title} src={logoPic} alt="Bruja Salon"/>
      </Link>
      <ul style={{display: `grid`, gridColumnStart: `4`, gridAutoFlow: `column`, margin: `20px 0`, padding: `0`, listStyle: `none` }}>
        <ListLink to="#profile">About</ListLink>
        <ListLink to="#fundraiser">Fundraiser</ListLink>
        <li style={{display: `inline-block`, marginRight: `1rem`}}><a className={layoutStyles.button} href="https://www.vagaro.com/">Make an Appointment</a></li>
      </ul>
    </header>
    {children}
    <footer style={{ display: `grid`, gridTemplateColumns: `repeat(5, 1fr)`}}>
      <div style={{ gridColumnStart: `1`, gridColumnEnd: `4` }}>
        <table>
          <strong>Hours</strong>
          <tbody>
          <tr>
            <td>Tuesday</td>
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
      <div style={{ gridColumn: `4` }}>
        <p>206-555-5555</p>
        <p>511 N 85th St<br/>
        Seattle, WA 98103</p>
        <p>witch@brujasalon.com</p>
      </div>
      <div>
        <a href="https://www.google.com/maps/place/511+N+85th+St,+Seattle,+WA+98103"><img className={layoutStyles.map} src={mapPic} alt="Located on North 85th St between Fremont Ave and Dayton Ave"/></a>
      </div>
      <div style={{ display: `grid`, gridColumnStart: `1`, gridColumnEnd: `6` }}>
        <ul className={layoutStyles.sitemap}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="#profile">About</ListLink>
          <ListLink to="#fundraiser">Fundraiser</ListLink>
          <li><a href="https://www.vagaro.com/">Make an Appointment</a></li>
        </ul>
      </div>
    </footer>
  </div>
)