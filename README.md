<!--
For better readability, use markdown preview.
VS Code:  ctrl-shift-v
Atom:     ctrl-shift-m
-->

<p align="center">
  <a href="https://jasonreidd.netlify.app">
    <img alt="Netlify Site" src="gatsby/src/images/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Portfolio
</h1>
<div align="center">
  <a href="https://github.com/JasonReidd/Portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/JasonReidd/Portfolio" alt="Stars">
  </a>
  <a href="https://github.com/JasonReidd/Portfolio/issues">
    <img src="https://img.shields.io/github/issues/JasonReidd/Portfolio" alt="Issues">
  </a>
  <a href="https://github.com/JasonReidd/Portfolio/network/members">
    <img src="https://img.shields.io/github/forks/JasonReidd/Portfolio" alt="Forks">
  </a>
  </div>
<br>

1. **Setup.**

   Create environment files in the /gatsby directory called
   '<code>.env.production</code>' and '<code>.env.development</code>'
   with the required variables from
   '<code>.env.example</code>' and the [environment variables](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d/settings/general#env-vars) values from [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d).
   For the development environment SANITY_WATCHMODE can be set to true and other variables can be changed to use test environment. https://ethereal.email/messages can be used to create a temporary SMTP service with the credentialed passed via the MAIL variables.

   Install packages with
   '<code>yarn</code>'
   <hr/>

2. **Run.**

   In the Sanity folder run the back-end with:

   '<code>yarn sanity start</code>'

   '<code>yarn sanity graphql deploy production</code>'

   Content Studio can be found at http://localhost:3333

   In the Gatsby folder run the front-end with:
   '<code>yarn run develop</code>'

   The site will run at http://localhost:8888/ (with netlify-cli)

   View the GraphiQL at http://localhost:8000/__graphql
   <hr/>

3. **Deploy.**

   Before deploying please ensure node version 16.0.0^ is being used

   In /Gatsby and /Sanity run '<code>yarn eslint</code>'

   In /Gatsby run '<code>yarn run build</code>'

   In /Sanity run '<code>yarn sanity deploy production</code>'

   Changes to the [Main branch](https://github.com/JasonReidd/Portfolio/tree/main) will automatically be deployed to the following:

   - Preview: [Gatsby Cloud](https://jasonreidd.gtsb.io/) - [deploys](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d/deploys) published automatically

   - Live: [Netlify](https://jasonreidd.netlify.app/) - [deploys](https://app.netlify.com/sites/jasonreidd/deploys) require manual publishing
   <hr/>

4. **Configure.**

   Add packages with '<code>yarn add [package name] --save</code>'

   Add media via [Cloudinary](https://cloudinary.com/console/c-5efd2802d1af5a180a41cae9a4a86a/media_library/folders/391c080a206c2cca6c6dd6aaea482748)

   Add content via [Contentful](https://app.contentful.com/spaces/0dlrb1xtuolg/entries)

   Headless CMS via [Sanity](https://www.sanity.io/manage/personal/project/a3mxaqcs)

<br/>

<div align="center">
  <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FJasonReidd%2FPortfolio">
    <img src="https://img.shields.io/twitter/url?label=Share%20via%20Twitter&logoColor=black&url=https%3A%2F%2Fgithub.com%2FJasonReidd%2FPortfolio" alt="Twitter">
  </a>
</div>
