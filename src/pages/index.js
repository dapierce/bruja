import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram-single"
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
          <h4>COVID-19 Update</h4>
          <p>
            We will be opening in the next couple of weeks.
            We understand that you are all eager to be rescheduled. We will
            personally call each guest whose appointment was cancelled that can
            be accommodated under the new guidelines. To be fair to all, calls
            will be in order of original appointments. Again, we appreciate your
            patience as we navigate through this new challenge.
          </p>
          <p>
            <span role="img" aria-label="thankful">
              🥰
            </span>{" "}
            We thank you for your continued support. Along with gift
            certificates you can also purchase Kevin Murphy hair products. We
            offer curbside pickup for any in-stock products we have.
          </p>
          <p>
            Please email to arrange pickup of Kevin Murphy products at{" "}
            <span style={{ whiteSpace: `nowrap` }}>
              <a
                style={{ textDecoration: `none` }}
                href="mailto:brujahairsalon@gmail.com"
              >
                <span role="img" aria-label="email">
                  ✉️
                </span>
              </a>
              <a href="mailto:brujahairsalon@gmail.com">
                brujahairsalon@gmail.com
              </a>
            </span>
          </p>
          <p>
            For Living Proof hair products, please contact Hilary at{" "}
            <span style={{ whiteSpace: `nowrap` }}>
              <a
                style={{ textDecoration: `none` }}
                href="mailto:hilarys.hair.chair@gmail.com"
              >
                <span role="img" aria-label="email">
                  ✉️
                </span>
              </a>
              <a href="mailto:hilarys.hair.chair@gmail.com">
                hilarys.hair.chair@gmail.com
              </a>
            </span>
          </p>
          <p>
            Alternatively, you can order from our{" "}
            <a href="https://app.saloninteractive.com/cel/Brujasalon">
              online store
            </a>
            , however we do not get as much sales commission from the online
            purchase.
          </p>
          <p>
            <span role="img" aria-label="star">
              🌟
            </span>{" "}
            We wish everyone continued wellness, love and light during this
            time. Be safe! We appreciate you and will be back in a couple weeks.
          </p>
          <p style={{ textAlign: `right` }}>
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
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
