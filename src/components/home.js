import React from "react";
import { StaticQuery, graphql } from "gatsby";

import layoutStyles from "../components/layout.module.css";
import layoutHomeSwiper from "../components/homeSwiper.module.css";

import logoPic from "../images/logo.png";
import ReynoldsCaps from "../fonts/ReynoldsCaps.ttf";

import styled from "styled-components";

const LogoFont = styled.h1`
  @font-face {
    font-family: ReynoldsCaps;
    font-style: normal;
    font-weight: normal;
    src: url('${ReynoldsCaps}') format('truetype');
  }

  font-family: ReynoldsCaps, sans-serf;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 1.4px;
  font-size: 3rem;

  @media (max-width: 900px) {
    font-size: 2.8rem;
  }

  @media (max-width: 600px) {
    font-size: 2.4rem;
    letter-spacing: 1px;
  }
`;

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            instagramLink,
            bookingLink
          }
        }
      }
    `}
    render={data => (
      <div id="home">
        {/* <HomeSwiper/> */}
        <div className={layoutHomeSwiper.slide1}>
          <LogoFont>
            <img className={layoutHomeSwiper.logo} src={logoPic} alt="Bruja Hair Salon" />
            <br />
            <span className={layoutStyles.goldType}>Magic is in the Hair</span>
          </LogoFont>
          <div className={layoutHomeSwiper.textBlock}>
            <p>
              Conjuring the best you in Seattle's Greenwood neighborhood.
              <br />
              We offer Devacurl services and use Kevin Murphy color and product
              to give your hair the best treatment.
            </p>
            <ul className={layoutHomeSwiper.buttonList}>
            <li>
                <a
                  className={layoutHomeSwiper.button}
                  href={data.site.siteMetadata.instagramLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className={layoutHomeSwiper.button}
                  href={data.site.siteMetadata.bookingLink}
                >
                  Book an appointment!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
  />
);
