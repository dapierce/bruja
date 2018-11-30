module.exports = {
  siteMetadata: {
      title: 'Bruja Hair Salon',
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
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