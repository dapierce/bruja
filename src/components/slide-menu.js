import React from "react"
import { slide as Menu } from "react-burger-menu"

import Link from "./link"
import Hours from "./hours"

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
    <Hours />
  </Menu>
)

export default SlideMenu
