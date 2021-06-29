require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
module.exports = {
  siteMetadata: {
    title: "Portfolio",
    titleTemplate: "-Jason Reid",
    description:
      "Jason Reids Portfolio Site.",
    url: "https://jasonreidd.gatsbyjs.io", // No trailing slash allowed!
    image: "/images/BradfordCouncilLogo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@JasonReidd",
  },
    plugins: [
      `gatsby-transformer-remark`,
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          },
        },
    ]
}

