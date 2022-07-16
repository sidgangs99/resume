module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://sidgangs99.github.io`,
  },
  pathPrefix: "/resume",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio - sidgangs99`,
        short_name: `Portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/me/siddharth.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
