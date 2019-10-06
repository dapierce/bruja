import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import "./slide-menu.css"

const SlideMenu = ({ menuLinks }) => (
  <Menu width={`280px`}>
    {menuLinks.map(link => (
      <Link to={link.link}>{link.name}</Link>
    ))}
  </Menu>
)

export default SlideMenu
