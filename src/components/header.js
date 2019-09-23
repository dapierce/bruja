import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

import logo from "../images/logo-black.png"

const Header = ({ siteTitle }) => (
  <header>
    <div
      className="header__logo"
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Bruja Hair Salon" />
        </Link>
      </h1>
    </div>
    <div className="header__menu">
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
