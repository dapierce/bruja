import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LogoKevinMurphy from "../images/product/kevinmurphy.svg"
import LogoDevaCurl from "../images/product/devacurl.svg"
import LogoSchwarzkopf from "../images/product/schwarzkopf.svg"

const Products = () => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>
    <div>
      <ul>
        <li style={{ cursor: `pointer` }}>
          <img src={LogoKevinMurphy} alt="Kevin Murphy" />
        </li>
        <li style={{ cursor: `pointer` }}>
          <img src={LogoDevaCurl} alt="Deva Curl" />
        </li>
        <li style={{ cursor: `pointer` }}>Living Proof</li>
        <li style={{ cursor: `pointer` }}>
          <img src={LogoSchwarzkopf} alt="Schwarzkopf" />
        </li>
      </ul>

      <div>
        <h2>Kevin Murphy</h2>
        <p>
          We use Kevin Murphy color and hair products at Bruja because they
          offer exceptional care for your hair, and are environmentally
          conscious. They are committed to products that are sulphate and
          paraben free and use no animal testing.
        </p>
        <p>
          We have their product ready to buy at our salon, but if you would
          like Kevin Murphy delivered straight to your door, you can order
          product here:
        </p>
        <p>
          <a
            className="page-button"
            href="https://app.saloninteractive.com/cel/Brujasalon"
          >
            Buy Kevin Murphy
          </a>
        </p>
      </div>
      <div>
        <h2>Deva Curl</h2>
        <p>Info about deva curl here!</p>
        <p>More info</p>
      </div>
      <div>
        <h2>Living Proof</h2>
        <p>
          Living Proof uses science and patented technology to create
          smoothness, fullness and overall healthy hair. Free of silicones,
          parabens, phthalates and animal testing these products are non-toxic
          and color safe.
        </p>
      </div>
      <div>
        <h2>Schwarzkopf</h2>
        <p>
          Schwarzkopf is a hair color line that gives you true results that
          last without comprising the health of your hair with its Fiberplex
          Bond Enforcing System.
        </p>
      </div>
    </div>
  </Layout>
)

export default Products
