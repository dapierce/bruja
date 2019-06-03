import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Home from "../components/home"
import Profile from "../components/profile"
import Product from "../components/product"
// import HomeSwiper from "../components/homeSwiper";

export default () => (
  <Layout>
    <Helmet>
      <title>Bruja Hair Salon</title>
    </Helmet>
    <Home/>
    <Profile/>
    <Product/>
  </Layout>
)