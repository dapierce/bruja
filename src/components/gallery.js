import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Gallery = () => (
  <a href="https://www.instagram.com/indiepetal/">
    <StaticImage style={{
          marginBottom: "2rem",
        }}
        src="../images/insta-single.png"
        alt="Gallery of Bruja Hair Salon designs" />
  </a>
)

export default Gallery
