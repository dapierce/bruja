import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <div className="frame_one_column">
      <h1>Services</h1>
    </div>
    <StaticImage
      src="../images/tools.jpg"
      alt="Salon tools"
      layout="fullWidth"
      placeholder="none"
      backgroundColor="rgb(248, 222, 255)"
      style={{
        height: `25vh`,
        minHeight: `100px`,
        maxHeight: `300px`,
      }}
    />
    <div className="frame_one_column">
      <table style={{ margin: `2rem auto` }}>
        <tbody>
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
            <td>$125</td>
          </tr>
          <tr>
            <td>Child Deva Cut</td>
            <td>14 year olds and under CURL Transformation</td>
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
          <th>Wedding</th>
          <th> </th>
          <th> </th>
          <tr>
            <td>Bridal Hair</td>
            <td>
              Hair for party of 6 or less
              <br />
              additional travel fee $100 within 75 miles
            </td>
            <td>$600+</td>
          </tr>
          <tr>
            <td>Bridal Makeup</td>
            <td>
              Makeup for party of 6 or less
              <br />
              additional travel fee $100 within 75 miles
            </td>
            <td>$600+</td>
          </tr>
          <th>Fashion Color</th>
          <th>Bright, neon, custom requires bleaching</th>
          <th> </th>
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
          <th> </th>
          <th> </th>
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
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Services
