require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Home',
    titleTemplate: 'JR Portfolio',
    description:
      'Jason Reid\'s Development Portfolio',
    url: 'https://jasonreid.dev',
    image: '/images/icon.png',
    twitterUsername: '@JasonReidDev',
    menuLinks: [
      {
        name: '',
        nameOverrideNav: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects/1',
      },
      {
        name: 'Employment',
        link: '/employment/1',
      },
      {
        name: 'Blog',
        link: '/blog/1',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'a3mxaqcs',
        dataset: process.env.SANITY_PRODUCTION,
        watchMode: process.env.SANITY_WATCHMODE,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `portfolio/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Reid's Development Portfolio`,
        short_name: `JR Portfolio`,
        start_url: `/`,
        background_color: `#1B1B1D`,
        theme_color: `#1B1B1D`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/src/images/maskable_icon.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/src/images/favicons/android-chrome-192x192.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/src/images/favicons/android-chrome-512x512.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      },
    },
  ],
};

