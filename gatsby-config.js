require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
module.exports = {
  siteMetadata: {
    title: "Portfolio",
    titleTemplate: " - Jason Reid",
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `JasonReid Portfolio`,
              short_name: `Jason Reid`,
              start_url: `/`,
              background_color: `#FFF`,
              theme_color: `#FAE042`,
              display: `standalone`,
              icon: `src/images/icon.png`,
              icons: [
                {
                  src: `/favicons/android-chrome-192x192.png`,
                  sizes: `192x192`,
                  type: `image/png`,
                },
                {
                  src: `/favicons/android-chrome-512x512.png`,
                  sizes: `512x512`,
                  type: `image/png`,
                },
              ],
            }
          },   
          `gatsby-plugin-offline`,          
      ]
}

