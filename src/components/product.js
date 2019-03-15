import React from "react";
import { StaticQuery, graphql } from "gatsby";

import productStyles from "./product.module.css";
import profileStyles from "./profile.module.css";
import layoutStyles from "./layout.module.css";

import kevinMurphyLogo from "../images/product/kevinMurphy-logo.svg";
import devacurlLogo from "../images/product/devacurl-logo.svg";
import schwarzkopfLogo from "../images/product/schwarzkopf-logo.svg";
import oceanImg from "../images/ocean.jpg";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            productKevinMurphyLink
          }
        }
      }
    `}
    render={data => (
      <div>
        <div id="product" className={layoutStyles.anchor} />
        <div className={productStyles.container}>
          <div className={productStyles.copy}>
            <img className={productStyles.logo} src={kevinMurphyLogo} alt="Kevin Murphy" />
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
            <ul className={profileStyles.buttonList}>
              <li>
                <a
                  className={profileStyles.button}
                  href={data.site.siteMetadata.productKevinMurphyLink}
                >
                  Buy Kevin Murphy
                </a>
              </li>
            </ul>
            <p>Additionally, we use these products for your services:</p>
            <img className={productStyles.logo, productStyles.mini} src={devacurlLogo} alt="DevaCurl" />
            <img className={productStyles.logo, productStyles.mini} src={schwarzkopfLogo} alt="Schwarzkopf Professional HairCare for you" />
          </div>
          <img className={productStyles.img} src={oceanImg} alt="Water at sunrise" />
        </div>
      </div>
    )}
  />
);
