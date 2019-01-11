import React from "react";
import { StaticQuery, graphql } from "gatsby";

import kevinMurphyStyles from "./kevinMurphy.module.css";
import profileStyles from "./profile.module.css";
import layoutStyles from "./layout.module.css";
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
        <div id="kevinMurphy" className={layoutStyles.anchor}></div>
      <div className={kevinMurphyStyles.container}>
        <div className={kevinMurphyStyles.copy}>
          <h2>Kevin Murphy</h2>
          <p>
            We use Kevin Murphy color and hair products at Bruja because they
            offer the best care for your hair, and are environmentally
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
        </div>
        <img className={kevinMurphyStyles.img} src={oceanImg} />
      </div>
      </div>
    )}
  />
);
