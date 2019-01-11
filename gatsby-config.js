module.exports = {
  siteMetadata: {
    title: 'Bruja Hair Salon',
    googleMapsLink: 'https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6903981,-122.3542453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xde7c422f4b3c7cfc!8m2!3d47.6903981!4d-122.3520566',
    bookingLink: 'https://www.vagaro.com/brujahairsalon/book-now',
    productKevinMurphyLink: 'https://app.saloninteractive.com/cel/Brujasalon',
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bruja Hair Salon",
        short_name: "Bruja Salon",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#ffee8e",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
  ]
}