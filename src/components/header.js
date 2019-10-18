import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SlideMenu from "./slide-menu"
import Nav from "./nav"

import styles from "./styles/header.module.css"
import logo from "../images/logo-black.svg"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div className={styles.header__slide}>
      <SlideMenu menuLinks={menuLinks} />
    </div>
    <div className={styles.header__logo}>
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
    </div>
    <div className={styles.header__menu}>
      <Nav menuLinks={menuLinks} />
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
