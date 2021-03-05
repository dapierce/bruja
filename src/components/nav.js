import React from "react"

import Link from "./link"

import * as navStyles from "./styles/nav.module.css"

const Nav = ({ menuLinks }) => (
  <nav
    style={{
      display: `grid`,
      gridTemplateColumns: `auto min-content`,
      alignItems: `center`,
      justifyItems: `center`,
    }}
  >
    <ul className={navStyles.header__menu__links}>
      {menuLinks.map(link => {
        if (link.name !== "Home" && link.name !== "Book Now") {
          return (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        } else {
            return ("")
          }
        }
      )}
    </ul>
    <ul className={navStyles.header__menu__book}>
      <li>
        <Link
          className="button"
          to={menuLinks.find(({ name }) => name === "Book Now").link}
        >
          Book Now
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
