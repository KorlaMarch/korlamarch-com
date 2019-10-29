module.exports = {
  siteMetadata: {
    title: "Khemarat Boonyapaluk",
    author: "Khemarat Boonyapaluk",
    description: "A little personal website of korlamarch"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'korlamarch-com',
        short_name: 'korlamarch',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
