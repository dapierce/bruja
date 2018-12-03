import React from 'react';

import layoutStyles from "../components/layout.module.css"
import layoutHomeSwiper from "../components/homeSwiper.module.css";

import ReynoldsCaps from "../fonts/ReynoldsCaps.ttf";

import styled from 'styled-components'

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
`

const MoreSpacing = styled.span`
  letter-spacing: 4px;
`

export default ({ children }) => (
  <div id="home">
    {/* <HomeSwiper/> */}
    <div className={layoutHomeSwiper.slide1}>
      <LogoFont>
        Welcome to <span className={layoutStyles.unbreakable}>Br<MoreSpacing>u</MoreSpacing>ja Hair Salon</span><br/>
        <span className={layoutStyles.swirlDecor}>~</span><br/>
        Magic is in the Hair
      </LogoFont>
      <p>Conjuring the best you in Seattle's Greenwood neighborhood.</p>
    </div>
  </div>
)
