import React from "react"
import { slide as Menu } from "react-burger-menu"

import Link from "./link"

import "./slide-menu.css"

const SlideMenu = ({ menuLinks }) => (
  <Menu disableAutoFocus width={`280px`}>
    {menuLinks.map(link => (
      <li key={link.name}>
        <Link to={link.link}>{link.name}</Link>
      </li>
    ))}
  </Menu>
)

export default SlideMenu
