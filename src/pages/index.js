import React, {useState} from 'react';

import GatsbyLogo from '../images/svg/logo/Gatsby.svg';
import ReactLogo from '../images/svg/logo/React.svg';
import JQueryLogo from '../images/svg/logo/JQuery.svg';
import NetConstructLogo from '../images/svg/logo/NetConstruct.svg';
import BradfordCouncilLogo from '../images/svg/logo/BradfordCouncil.svg';
import EstioTrainingLogo from '../images/svg/logo/Estio.svg';

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

const bradfordCouncilHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgBradfordCouncil) 50%)',
};

const estioTrainingHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgEstioTraining) 50%)',
};

const netConstructHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgNetConstruct) 50%)',
};

const IndexPage = () => {
  return (
    <>
      <Layout title="">
        {organisation(null, 'Personal Projects', defaultHighlightStyles, '2018 to '+(new Date().getFullYear()))}
        <span style={breakLineStyles}/>
        {organisation(NetConstructLogo, 'Net Construct', netConstructHighlightStyles, '2021')}
        {organisation(BradfordCouncilLogo, 'Bradford Council', bradfordCouncilHighlightStyles, '2019')}
        {organisation(EstioTrainingLogo, 'Estio Training', estioTrainingHighlightStyles, '2019')}
        <h3>This site was built using:</h3>
        <img title="Gatsby" style={logoStyles} src={GatsbyLogo} alt="Gatsby Logo" width="auto" height="1.25rem"/>
        <img title="React" style={logoStyles} src={ReactLogo} alt="React Logo" width="auto" height="1.25rem"/>
        <img title="JQuery" style={logoStyles} src={JQueryLogo} alt="Jquery Logo" width="auto" height="1.25rem"/>
      </Layout>
    </>
  );
};

function organisation(logo, name, styles, date) {
  return (
    <h2>
      {logo && <img style={logoStyles} src={logo} alt={name} width="auto" height="auto"/>}
      {hover(name, styles)}
      <span> - {date}</span>
    </h2>
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
