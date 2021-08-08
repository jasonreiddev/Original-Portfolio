import React, {useState} from 'react';

import Layout from '../components/layout';

const breakLineStyles = {
  'borderTop': '1px solid var(--siteTertiaryAccent)',
  'paddingTop': '1.3rem',
  'display': 'inline-block',
};

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
  return (
    <>
      <Layout title="">
        <h1>{organisation(null, 'Welcome to my portfolio!', defaultHighlightStyles, null)}</h1>
        <p>
        My name is Jason Reid and I am a software developer from Yorkshire.<br/>
        I started my software development career in January of 2019 as an apprentice at Bradford council.<br/>
        Mobile: 07468 12799 | Email: Jasonreidd@gmail.com
        </p>
        <p>You can also contact me via <a href="https://www.linkedin.com/in/jasonreiddev/">LinkedIn</a>.</p>
        <h3>This site was built using:</h3>
        <ul>
          <li>Gatsby</li>
          <li>Contentful - Blog.</li>
          <li>Cloudinary - Logo.</li>
          <li>Sanity - Employment history.</li>
        </ul>
        <p>For more information you can view the projects repository on <a href="https://github.com/JasonReidd/Portfolio">Github</a>.</p>
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
