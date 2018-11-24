import React from "react"

import HomeSwiper from "../components/homeSwiper"
import Profile from "../components/profile"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <div id="home">
      <HomeSwiper></HomeSwiper>
      <Profile/>
      <div>
        <h2>Introducing Pay It Forward</h2>
        <p>Help your local community by donating haircuts!</p>
        <img alt="Step 1" />
      </div>
    </div>
  </Layout>
)