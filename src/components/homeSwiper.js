import React from 'react';
import Swiper from 'react-id-swiper';

import layoutHomeSwiper from "./homeSwiper.module.css";

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
          <h1>
            Welcome to Bruja Salon!<br/>
            ~<br/>
            Magic is in the Hair
          </h1>
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