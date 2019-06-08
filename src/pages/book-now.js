import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import BookList from "../components/book-list"

export default () => (
  <Layout>
    <Helmet>
      <title>Bruja Hair Salon - Book an Appointment</title>
    </Helmet>
    <BookList />
  </Layout>
)