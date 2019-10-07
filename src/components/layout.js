/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteMap {
              link
              name
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.siteMap}
        />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600,600i&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div
          style={{
            margin: `0 auto`,
            padding: `0px`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer menuLinks={data.site.siteMetadata.siteMap} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
