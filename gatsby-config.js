module.exports = {
  siteMetadata: {
      title: 'Bruja Hair Salon',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ]
}