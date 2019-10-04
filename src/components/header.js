import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

import styles from "./header.module.css"
import logo from "../images/logo-black.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.header__logo}>
      <Link to="/">
        <img src={logo} alt="Bruja Hair Salon" />
      </Link>
    </div>
    <div className={styles.header__menu}>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
