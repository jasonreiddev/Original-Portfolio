require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: '',
    firebaseLikeDocId: process.env.FIREBASE_LIKE_DOC_ID,
    titleTemplate: process.env.SITE_TITLE_TEMPLATE,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    image: process.env.SITE_IMAGE,
    twitterUsername: process.env.SITE_TWITTER_USERNAME,
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
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCMisUz5HVjU3IpufE5xFntovsR-1CKDl0',
          authDomain: 'jasonreid-dev.firebaseapp.com',
          databaseURL: 'https://jasonreid-dev-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'jasonreid-dev',
          storageBucket: 'jasonreid-dev.appspot.com',
          messagingSenderId: '399791915013',
          appId: '1:399791915013:web:1a14fc0ddb7675833c1c6c',
        },
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      },
    },
  ],
};

