module.exports = {
  siteMetadata: {
    title: 'Bruja Hair Salon',
    instagramLink: 'https://www.instagram.com/bruja_hair/',
    googleMapsLink: 'https://www.google.com/maps/place/Bruja+Hair+Salon/@47.6903981,-122.3542453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xde7c422f4b3c7cfc!8m2!3d47.6903981!4d-122.3520566',
    bookingLink: 'https://www.vagaro.com/brujahairsalon/book-now',
    hilaryBookingLink: 'https://www.vagaro.com/hilaryshairchair/book-now',
    servicesLink: 'https://www.vagaro.com/brujahairsalon/services',
    productKevinMurphyLink: 'https://app.saloninteractive.com/cel/Brujasalon',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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