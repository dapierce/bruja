import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

const Hero = ({ containerStyle, children }) => (
  <ParallaxProvider>
    <ParallaxBanner
      layers={[
        {
          children: children,
          amount: 0.5,
        },
      ]}
      style={containerStyle}
    />
  </ParallaxProvider>
)

export default Hero
