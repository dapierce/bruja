import React from "react"
import { slide as Menu } from "react-burger-menu"

import Link from "./link"

import styles from "./footer.module.css"
import "./slide-menu.css"

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
            <td>12:00 PM - 7:00 PM</td>
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
  </Menu>
)

export default SlideMenu
