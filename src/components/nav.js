import React from "react"
import { Link } from "gatsby"

const Nav = ({ children }) => (
  <nav>
    <ul
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        listStyle: `none`,
      }}
    >
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
        <Link to="/book-now">Shop</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link className="button" to="/book-now">
          Book Now
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
