import React from "react"

// import HomeSwiper from "../components/homeSwiper";
import Home from "../components/home"
import Profile from "../components/profile"
import Fundraiser from "../components/fundraiser"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Home/>
    <Profile/>
    <Fundraiser/>
  </Layout>
)