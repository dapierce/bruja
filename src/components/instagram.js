// Instagram.js
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const Instagram = () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 9, sort: { order: DESC, fields: timestamp }) {
          edges {
            node {
              id
              caption
              localFile {
                childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 400, quality: 50) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="gallery">
        {data.allInstaNode.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i}>
              <a
                href={"https://www.instagram.com/p/" + item.node.id}
                alt={item.node.caption}
              >
                <Image
                  className="gallery__image"
                  fluid={item.node.localFile.childImageSharp.fluid}
                />
              </a>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    )}
  />
)

export default Instagram
