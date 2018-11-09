import React from "react"

import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ display: `grid`, margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Bruja Salon</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/payitforward">Pay It Forward</ListLink>
        <ListLink to="/gallery/">Gallery</ListLink>
        <Link to="#" style={{ background: `white`, border: `1px solid purple`, borderRadius: `.6em`, padding: `.6em`}}>Make an Appointment</Link>
      </ul>
    </header>
    {children}
    <footer>
      <div>
        <table>
          <tbody>
          <tr><th>Hours</th></tr>
          <tr>
            <td>Tuesday</td>
            <td>12 pm - 6 pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>12 pm - 6 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>12 pm - 6 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12 pm - 6 pm</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>206-555-5555</p>
        <p>311 Bruja Ave<br/>
        Seattle, WA 98102</p>
      </div>
      <div>
        <p>Map</p>
      </div>
      <div>
        <p>Site map</p>
      </div>
    </footer>
  </div>
)