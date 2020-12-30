import React from "react"
import { slide as Menu } from "react-burger-menu"

import Link from "./link"

import styles from "./styles/footer.module.css"
import "./styles/slide-menu.css"

const SlideMenu = ({ menuLinks }) => (
  <Menu disableAutoFocus width={`300px`}>
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
    <hr />
    {/* TODO: Make hours data-driven and feed to both footer and here */}
    <div className={styles.hours}>
      <span className={styles.title}>Hours</span>
      <table>
        <tbody>
            <tr style={new Date().getDay() === 0 ? { fontWeight: 600 } : {}}>
              <td>Sunday</td>
              <td>10:30 AM - 6:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 1 ? { fontWeight: 600 } : {}}>
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr style={new Date().getDay() === 2 ? { fontWeight: 600 } : {}}>
              <td>Tuesday</td>
              <td>11:00 AM - 2:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 3 ? { fontWeight: 600 } : {}}>
              <td>Wednesday</td>
              <td>12:30 PM - 8:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 4 ? { fontWeight: 600 } : {}}>
              <td>Thursday</td>
              <td>Closed</td>
            </tr>
            <tr style={new Date().getDay() === 5 ? { fontWeight: 600 } : {}}>
              <td>Friday</td>
              <td>10:30 AM - 6:00 PM</td>
            </tr>
            <tr style={new Date().getDay() === 6 ? { fontWeight: 600 } : {}}>
              <td>Saturday</td>
              <td>10:30 AM - 6:00 PM</td>
            </tr>
        </tbody>
      </table>
    </div>
  </Menu>
)

export default SlideMenu
