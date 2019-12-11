require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteName: "My Shop"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: "e020e389c476dd22d8dca8320797c6" }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1",
        autopop: true
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://apt-team-1.herokuapp.com/merchants/"]
      }
    }
  ]
};
