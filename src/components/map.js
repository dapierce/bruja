import React from "react"
import ImgMap from "./img-map"

const cardStyle = {
  maxHeight: 600,
  textAlign: "center",
  padding: "0 0.5rem",
}
const cardText = {
  padding: "2rem 1rem",
}

const Map = ({ children }) => (
  <div className="frame_two_columns_one_two">
    <div style={cardStyle}>
      <div style={cardText}>
        <h2 style={{ fontSize: "2.2rem" }}>Where We Are</h2>
        <p>
          Bruja Salon has moved to Phinney Ave just past N 65th St. Free parking
          is located in the alley behind the building, covered with a sign.
        </p>
      </div>
    </div>
    <div style={cardStyle}>
      <a href="https://www.google.com/maps/place/6512+Phinney+Ave+N,+Seattle,+WA+98103/@47.6764556,-122.3562745,17z/data=!3m1!4b1!4m5!3m4!1s0x5490143762663817:0x27711fe9418f3b3c!8m2!3d47.6764556!4d-122.3540858">
        <ImgMap />
      </a>
    </div>
  </div>
)

export default Map
