import React from "react"

import { Helmet } from "react-helmet";

// import HomeSwiper from "../components/homeSwiper";
import Home from "../components/home"
import Profile from "../components/profile"
import Fundraiser from "../components/fundraiser"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>Bruja Hair Salon</title>
    </Helmet>
    <Home/>
    <Profile/>
    <Fundraiser/>
  </Layout>
)