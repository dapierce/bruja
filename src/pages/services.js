import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image1 from "../images/tools.jpg"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="frame_one_column">
      <h1>Services</h1>
    </div>
    <Parallax bgImage={image1} blur={0.5} strength={400}>
      <div
        style={{
          width: `100vw`,
          height: `25vh`,
          minHeight: `100px`,
          maxHeight: `300px`,
        }}
      ></div>
    </Parallax>
    <div className="frame_one_column">
      <table style={{ margin: `2rem auto` }}>
        <tr>
          <td>Haircut</td>
          <td>18 and up</td>
          <td>$55+</td>
        </tr>
        <tr>
          <td>Child Haircut</td>
          <td>12 and under</td>
          <td>$30+</td>
        </tr>
        <tr>
          <td>Student / 51 Discount</td>
          <td>15% off</td>
          <td>$55+</td>
        </tr>
        <tr>
          <td>Deva Cut</td>
          <td>Deva Cut and CURL Transformation</td>
          <td>$95</td>
        </tr>
        <tr>
          <td>Root touch up</td>
          <td>Up to 2 inches of grow out</td>
          <td>$70+</td>
        </tr>
        <tr>
          <td>All over color</td>
          <td>Roots to ends</td>
          <td>$100+</td>
        </tr>
        <tr>
          <td>Partial Highlight</td>
          <td>Highlights / lowlights crown / hairline</td>
          <td>$120+</td>
        </tr>
        <tr>
          <td>Full Highlight</td>
          <td>Full head highlight / lowlight</td>
          <td>$175+</td>
        </tr>
        <tr>
          <td>Partial Balayage</td>
          <td>Natural higlights / crown and hairline</td>
          <td>Consult</td>
        </tr>
        <tr>
          <td>Full Balayage</td>
          <td>Natural higlights full head</td>
          <td>Consult</td>
        </tr>
        <tr>
          <td>Updo</td>
          <td>Special occaison hair</td>
          <td>$70</td>
        </tr>
        <tr>
          <td>Wedding (5 hours)</td>
          <td>
            Hair and makeup for party of 6 or less
            <br />
            additional travel fee $100 within 75 miles
          </td>
          <td>$600+</td>
        </tr>
        <th>Fashion Color</th>
        <th>Bright, neon, custom requires bleaching</th>
        <th />
        <tr>
          <td>Double Process</td>
          <td>One bleach process, one color process</td>
          <td>$175+</td>
        </tr>
        <tr>
          <td>Triple Process</td>
          <td>1-2 bleach processes, partial foil color</td>
          <td>$275+</td>
        </tr>
        <tr>
          <td>Color correction</td>
          <td>Corrective color</td>
          <td>Consult</td>
        </tr>
        <th>Skin</th>
        <th />
        <th />
        <tr>
          <td>Makeup Consult</td>
          <td>Consultation for special occaison and everyday makeup</td>
          <td>Consult</td>
        </tr>
        <tr>
          <td>Brow Tint</td>
          <td>Permanent brow tint</td>
          <td>$15+</td>
        </tr>
        <tr>
          <td>Brow Wax</td>
          <td>Brow shaping and hair removal</td>
          <td>$17+</td>
        </tr>
        <tr>
          <td>Makeup application</td>
          <td>Special occaison full face (excluding lashes)</td>
          <td>$50</td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default Services
