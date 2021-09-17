import React, {useState} from 'react';
import {graphql} from 'gatsby';
import useLatestData from '../utils/useLatestData';
import {Link} from 'gatsby';

import {ExternalLink} from '../components/ExternalLink/ExternalLink';
import {Layout} from '../components/Layout/Layout';

const logoStyles = {
  padding: '0 0.5rem 0 0',
  transform: 'translateY(0.3rem)',
  height: '1.8rem',
};

const baseHighlightStyles = {
  'transition': 'background-position 1s, color 0.5s',
  'backgroundSize': '200% 100%',
  'hover': {
    'backgroundPosition': '-100% 0',
  },
};

const defaultHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--sitePrimaryAccent) 50%)',
};

export default function HomePage({data}) {
  const buildTimeData = data.sanitySiteSettings;
  const latestData = useLatestData();

  return (
    <>
      <Layout title="">
        <h2>{organisation(null, 'Welcome to my portfolio!', defaultHighlightStyles, null)}</h2>
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
        <h2>Featured</h2>
        <ul>
          <li><Link to="/projects/flex">Flex - Flexi-Time Management</Link></li>
          <li><Link to="/projects/bcp">BCP - Business Continuity Planning</Link></li>
          <li><Link to="/blog/deployments-covid">Working in Deployments Throughout the Covid-19 Pandemic</Link></li>
        </ul>

        <h2>This site was built using:</h2>
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

function organisation(logo, name, styles, date) {
  return (
    <>
      {logo && <img style={logoStyles} src={logo} alt={name} width="auto" height="auto"/>}
      {hover(name, styles)}
      {date && <span> - {date}</span>}
    </>
  );
}

function hover(content, style) {
  const [hover, setHover] = useState(false);

  return (
    <span onMouseEnter={()=>{
      setHover(true);
    }}
    onMouseLeave={()=>{
      setHover(false);
    }}
    style={{
      ...baseHighlightStyles,
      ...style,
      ...(hover ? baseHighlightStyles.hover : null),
      ...(hover ? style.hover : null),
    }}>
      {content}</span>
  );
}
