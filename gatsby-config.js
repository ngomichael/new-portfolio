module.exports = {
  siteMetadata: {
    title: 'Michael Ngo',
    description: 'Full-Stack Developer, Student & NBA Fan',
    author: '@michaelngo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Ngo's Portfolio`,
        short_name: 'Portfolio',
        start_url: '/',
        background_color: 'rgb(49, 126, 227)',
        theme_color: 'rgb(49, 126, 227)',
        display: 'minimal-ui',
        icon: 'src/images/website-slash-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`],
            family: `Oswald`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
