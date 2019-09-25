module.exports = {
  siteMetadata: {
    title: `Bruja Hair Salon`,
    description: `Magic is in the hair! Conjuring the best you in Seattle's Greenwood neighborhood. We offer the full range of hair services from cuts to high fashion color.`,
    author: `@dapierce`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bruja Hair Salon",
        short_name: "Bruja Salon",
        start_url: "/",
        background_color: "#E3C8EB",
        theme_color: "#000000",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `bruja_hair`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
