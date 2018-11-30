import React from "react"

// import HomeSwiper from "../components/homeSwiper";
import Profile from "../components/profile"
import Fundraiser from "../components/fundraiser"

import Layout from "../components/layout"
import layoutHomeSwiper from "../components/homeSwiper.module.css"
import layoutStyles from "../components/layout.module.css"

export default () => (
  <Layout>
    <div id="home">
      {/* <HomeSwiper/> */}
      <div className={layoutHomeSwiper.slide1}>
        <h1>
          Welcome to <span className={layoutStyles.unbreakable}>Bruja Hair Salon!</span><br/>
          ♦&#xFE0E;♦&#xFE0E;♦&#xFE0E; ♦&#xFE0E;♦&#xFE0E;♦&#xFE0E;<br/>
          Magic is in the Hair
        </h1>
        <p>Conjuring the best you in Seattle's Greenwood neighborhood.</p>
      </div>
      <Profile/>
      <Fundraiser/>
    </div>
  </Layout>
)