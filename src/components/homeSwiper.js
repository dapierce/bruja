import React from 'react';
import Swiper from 'react-id-swiper';

import layoutStyles from "../components/layout.module.css"
import layoutHomeSwiper from "./homeSwiper.module.css";

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

class HomeSwiper extends React.Component {
  render() {
    const params = {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };

    return (
      <Swiper {...params} className={layoutHomeSwiper.swiper}>
        <div className={layoutHomeSwiper.slide1}>
          <LogoFont>
            Welcome to <span className={layoutStyles.unbreakable}>Br<MoreSpacing>u</MoreSpacing>ja Hair Salon</span><br/>
            <span className={layoutStyles.swirlDecor}>~</span><br/>
            <span className={layoutStyles.goldType}>Magic is in the Hair</span>
          </LogoFont>
          <p>Conjuring the best you in Seattle's Greenwood neighborhood.</p>
        </div>
        <div className={layoutHomeSwiper.slide2}>
          <h1>Donate new looks and new confidence to your community</h1>
          <p>Pay It Forward is our way of giving back; fresh haircuts for those in need.</p>
        </div>
        <div className={layoutHomeSwiper.slide3}>
          <h1>Gallery</h1>
          <p>Browse our hair transformations!</p>
        </div>
      </Swiper>
    )
  }
}

export default HomeSwiper;