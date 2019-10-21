import React from "react"

import Link from "./link"

import styles from "./styles/nav.module.css"

const Nav = ({ menuLinks }) => (
  <nav
    style={{
      display: `grid`,
      gridTemplateColumns: `auto min-content`,
      alignItems: `center`,
      justifyItems: `center`,
    }}
  >
    <ul className={styles.header__menu__links}>
      {menuLinks.map(link => {
        if (link.name !== "Home" && link.name !== "Book Now") {
          return (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        }
      })}
    </ul>
    <ul className={styles.header__menu__book}>
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
