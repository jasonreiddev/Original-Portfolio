import React from 'react';
import {graphql} from 'gatsby';
import useLatestData from '../utils/useLatestData';
import {Link} from 'gatsby';

import {ExternalLink} from '../components/ExternalLink/ExternalLink';
import {Layout} from '../components/Layout/Layout';
import {HoverColor} from '../components/HoverColor/HoverColor';

export default function HomePage({data}) {
  const buildTimeData = data.sanitySiteSettings;
  const latestData = useLatestData();

  return (
    <>
      <Layout title="">
        <HoverColor><h2>
          Welcome to my portfolio!
        </h2></HoverColor>
        <p>
          {!latestData.introText &&
          // Fallback text
           <span>
             {buildTimeData.introText}
           </span>
          }
          {latestData.introText && <span>{latestData.introText}</span>}
        </p>
        <p>The best place to contact me is via <ExternalLink to="https://www.linkedin.com/in/jasonreiddev">LinkedIn</ExternalLink>.</p>

        <HoverColor><h2>
          Featured
        </h2></HoverColor>
        <ul>
          <li><Link to="/projects/flex">Flex - Flexi-Time Management</Link></li>
          <li><Link to="/projects/bcp">BCP - Business Continuity Planning</Link></li>
          <li><Link to="/blog/deployments-covid">Working in Deployments Throughout the Covid-19 Pandemic</Link></li>
        </ul>

        <HoverColor><h2>
          This site was built using:
        </h2></HoverColor>

        <ul>
          <li>Gatsby</li>
          <li>Sanity</li>
          <li>Contentful</li>
          <li>Cloudinary</li>
          <li>Netflify Functions</li>
          <li>NodeJS, GraphQL, Yarn, Babel, ESLint </li>
        </ul>
        <p>For more information, you can view the project&apos;s repository on&nbsp;
          <ExternalLink to="https://github.com/jasonreiddev/portfolio">Github</ExternalLink>.
        </p>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    sanitySiteSettings {
      introText
      featuredProjects {
        projectTitle
      }
    }
  }
`;
