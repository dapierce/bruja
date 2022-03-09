module.exports = {
  siteMetadata: {
    title: `Bruja Hair Salon`,
    description: `Magic is in the hair in Seattle's Phinney Ridge neighborhood. We are curly and kinky hair specialists and we offer cuts to high fashion color using Kevin Murphy and DevaCurl product.`,
    siteUrl: `https://www.brujasalon.com`,
    facebook: `brujahairsalon`,
    instagram: `bruja_hair`,
    siteMap: [
      {
        name: "Home",
        link: "/",
      },
      // {
      //   name: "COVID-19 Info",
      //   link: "/covid19",
      // },
      {
        name: "Stylists",
        link: "/stylists",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Shop",
        link: "https://app.saloninteractive.com/cel/Brujasalon",
      },
      {
        name: "Book Now",
        link: "/book-now",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bruja Hair Salon",
        short_name: "Bruja Salon",
        start_url: "/",
        background_color: "#E3C8EB",
        theme_color: "#FFFFFF",
        display: "standalone",
        icon: "src/images/icon-whitebg.png", // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
}
