import React from "react"

import Profile from "../components/profile"
import Fundraiser from "../components/fundraiser"

import Layout from "../components/layout"
import layoutHomeSwiper from "../components/homeSwiper.module.css"

export default () => (
  <Layout>
    <div id="home">
      <div className={layoutHomeSwiper.slide1}>
        <h1>Welcome to Bruja Salon!</h1>
        <p>Conjuring the best you in Seattle's Greenwood neighborhood.</p>
      </div>
      <Profile/>
      <Fundraiser/>
    </div>
  </Layout>
)