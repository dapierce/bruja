import React from "react"

import { Helmet } from "react-helmet";

import Home from "../components/home"
import Profile from "../components/profile"
import Fundraiser from "../components/fundraiser"

import Layout from "../components/layout"
import KevinMurphy from "../components/kevinMurphy";
// import HomeSwiper from "../components/homeSwiper";

export default () => (
  <Layout>
    <Helmet>
      <title>Bruja Hair Salon</title>
    </Helmet>
    <Home/>
    <Profile/>
    <KevinMurphy/>
    <Fundraiser/>
  </Layout>
)