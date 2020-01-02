import React from "react"
import ImgMap from "./img-map"

const cardStyle = {
  minHeight: 300,
  maxHeight: 600,
  textAlign: "center",
  padding: "0 0.5rem",
}
const cardText = {
  padding: "8% 1rem 0",
}

const mapStyle = {
  maxHeight: 600,
  maxWidth: 600,
}

const Map = ({ children }) => (
  <div className="frame_two_columns_one_two">
    <div style={cardStyle}>
      <div style={cardText}>
        <h2 style={{ fontSize: "2.2rem" }}>Where We Are</h2>
        <p>
          Bruja Salon is on North 85th Street inbetween Evanston Ave and Dayton Ave. Free parking is located on the east side of Bruja Salon, next to the
          Pullington Apartments.
        </p>
      </div>
    </div>
    <div style={cardStyle}>
      <a href="https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6903981,-122.3542453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xde7c422f4b3c7cfc!8m2!3d47.6903981!4d-122.3520566">
        <ImgMap style={mapStyle} />
      </a>
    </div>
  </div>
)

export default Map
