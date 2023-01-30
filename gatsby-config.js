/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `factly-website`,
    description: `Factly organisation`,
    author: `@chakradhar32`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Factly website`,
        short_name: `Factly`,
        start_url: `/`,
        background_color: `#CE212B`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#CE212B;`,
        display: `minimal-ui`,
        icon: `./static/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@factly/gatsby-source-dega`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        uri: process.env.API_ENDPOINT,
      },
    }
  ],
}
