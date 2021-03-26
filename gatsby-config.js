module.exports = {
  siteMetadata: {
    title: `Bruja Hair Salon`,
    description: `Magic is in the hair! Conjuring the best you in Seattle's Phinney Ridge neighborhood. We offer the full range of hair services from cuts to high fashion color.`,
    facebook: `brujahairsalon`,
    instagram: `@bruja_hair`,
    siteMap: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "COVID-19 Info",
        link: "/covid19",
      },
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
      // {
      //   name: "Blog",
      //   link: "/blog",
      // },
      {
        name: "Book Now",
        link: "https://www.vagaro.com/brujahairsalon/book-now",
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
