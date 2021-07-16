<!--
For better readability, use markdown preview.
VS Code:  ctrl-shift-v 
Atom:     ctrl-shift-m
-->

<p align="center">
  <a href="https://jasonreidd.netlify.app">
    <img alt="Netlify Site" src="src/images/icon.png" width="60" />
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

    Create a new file in the root directory called
    '<code>.env.development</code>'
    with the required variables from 
    '<code>.env.example</code>', you can get the values from the [enviroment variables](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d/settings/general#env-vars) on [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d).

    <sup>
    It may also be worthwhile creating an identical file called '<code>.env.production</code>'
     for running 
     '<code>yarn build</code>'
     - which creates a version of your site with production-ready optimizations.
    </sup>

    Install packages with
    '<code>npm i</code>'.
    <hr/>

2.  **Run.**

    Start the project with
    '<code>npm run develop</code>'.
    
    The site will run at http://localhost:8000.

    View the GraphiQL at http://localhost:8000/___graphql .
    <hr/>

3.  **Deploy.**

    Changes to the [Main branch](https://github.com/JasonReidd/Portfolio/tree/main) will automatically be deployed to the following:

    - Preview: [Gatsby Cloud](https://jasonreidd.gtsb.io/) - [deploys](https://www.gatsbyjs.com/dashboard/f823cde4-1e85-4ece-87b4-ad2a6f0a2225/sites/df7b65ef-b4c5-4b57-9bda-58b55c54665d/deploys) published automatically

    - Live: [Netlify](https://jasonreidd.netlify.app/) - [deploys](https://app.netlify.com/sites/jasonreidd/deploys) require manual publishing
    <hr/>

2. **Configure.**

    Add packages with '<code>npm install --save</code>' followed by the package name.

    Add media via [Cloudinary](https://cloudinary.com/)
    
    Add content via [Contentful](https://app.contentful.com/spaces/0dlrb1xtuolg/entries)
<br/>

<div align="center">
  <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FJasonReidd%2FPortfolio">
    <img src="https://img.shields.io/twitter/url?label=Share%20via%20Twitter&logoColor=black&url=https%3A%2F%2Fgithub.com%2FJasonReidd%2FPortfolio" alt="Twitter">
  </a>
</div>