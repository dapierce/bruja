import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css"

const Nav = ({ children }) => (
  <nav
    style={{
      display: `grid`,
      gridTemplateColumns: `auto min-content`,
      alignItems: `center`,
      justifyItems: `center`,
    }}
  >
    <ul className={styles.header__menu__links}>
      <li>
        <Link to="/stylists">Stylists</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <a href="https://app.saloninteractive.com/cel/Brujasalon">Shop</a>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
    <ul className={styles.header__menu__book}>
      <li>
        <Link className="button" to="/book-now">
          Book Now
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
