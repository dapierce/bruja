import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram"
import Newsletter from "../components/newsletter"
import Map from "../components/map"

import image1 from "../images/salon-exterior.jpg"

const insideStyles = {
  color: "white",
  paddingTop: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
}

const IndexPage = () => (
  <Layout>
    <SEO />
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `50vh`,
          minHeight: `400px`,
          maxHeight: `500px`,
        }}
      >
        <div style={insideStyles}>
          <Link className="button" to="/book-now">
            Book Now
          </Link>
        </div>
      </div>
    </Parallax>
    <div className="frame_one_column">
      <div className="centered_p">
        <h1 style={{ textAlign: `center` }}>Magic is in the Hair</h1>
        <p>
          Conjuring the best you in Seattle's Greenwood neighborhood. We offer
          the full range of hair services from cuts to high fashion color.
        </p>
        <blockquote className="box_block">
          <p>
            Washington State's continued business closures mean we will remain
            closed for the forseeable future.
          </p>
          <p>
            <span role="img" aria-label="thankful">
              🥰
            </span>{" "}
            We thank you for your continued support. Along with gift
            certificates and prepay for future services we also offer color
            services on hair extensions as well as take-home toner kits, giving
            you a fresh new look without requiring in-person service.
          </p>
          <p>
            Enquire about it at{" "}
            <a
              style={{ textDecoration: `none` }}
              href="mailto:brujahairsalon@gmail.com"
            >
              <span role="img" aria-label="email">
                📧
              </span>
            </a>
            <a href="mailto:brujahairsalon@gmail.com">
              brujahairsalon@gmail.com
            </a>
          </p>
          <p>
            <span role="img" aria-label="shooting star">
              🌠
            </span>{" "}
            We wish everyone continued wellness, love and light during this
            time. Be safe! We appreciate you and will be back in due time.
          </p>
          <p style={{ textAlign: `right` }}>
            <span role="img" aria-label="love">
              ❤️
            </span>
            Bruja Salon
          </p>
        </blockquote>
      </div>
    </div>
    <div className="frame_two_columns">
      <Instagram />
      <Newsletter />
    </div>
    <Map />
  </Layout>
)

export default IndexPage
