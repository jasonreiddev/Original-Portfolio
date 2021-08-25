import React, {useState} from 'react';
import useLatestData from '../utils/useLatestData';
import {Link} from 'gatsby';
import ExternalLink from '../components/ExternalLink';

import Layout from '../components/Layout';

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

const IndexPage = () => {
  const latestData = useLatestData();
  return (
    <>
      <Layout title="">
        <h2>{organisation(null, 'Welcome to my portfolio!', defaultHighlightStyles, null)}</h2>
        <p>
          {!latestData.introText &&
          // Fallback text
           <span>My name is Jason Reid and I am a software developer from Yorkshire.<br/>
           I started my software development career in January of 2019 as an apprentice at Bradford Council.<br/>
             <br/>
           Mobile: 07464 812 799<br/>
             <br/>
           Email: Jasonreidd@gmail.com</span>
          }
          {latestData.introText && latestData.introText.length && <span>{latestData.introText}</span>}
        </p>
        <p>The best place to contact me is via <ExternalLink to="https://www.linkedin.com/in/jasonreiddev/">LinkedIn</ExternalLink>.</p>
        <h2>Featured</h2>
        <ul>
          <li><Link to="/projects/flex/">Flex - Flexi-Time Management</Link></li>
          <li><Link to="/projects/bcp/">BCP - Business Continuity Planning</Link></li>
          <li><Link to="/blog/deployments-covid/">Working in Deployments Throughout the Covid-19 Pandemic</Link></li>
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
        <p>For more information, you can view the projects repository on&nbsp;
          <ExternalLink to="https://github.com/JasonReidd/Portfolio">Github</ExternalLink>.
        </p>
      </Layout>
    </>
  );
};

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

export default IndexPage;
