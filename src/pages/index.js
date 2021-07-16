import React, {useState} from 'react';
import { createGlobalStyle } from "styled-components"

import GatsbyLogo from '../images/svg/logo/Gatsby.svg';
import ReactLogo from '../images/svg/logo/React.svg';
import JQueryLogo from '../images/svg/logo/JQuery.svg';
import NetConstructLogo from '../images/svg/logo/NetConstruct.svg';
import BradfordCouncilLogo from '../images/svg/logo/BradfordCouncil.svg';
import EstioTrainingLogo from '../images/svg/logo/Estio.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global.css';

const GlobalStyle = createGlobalStyle`
:root {
  --siteBlack: #303036;
  --siteWhite: #EEE6F0;
  --siteLightWhite: #FFFFFF;
  --siteLightAccent: #FFD4CA;
  --siteMediumAccent: #A997DF;
  --siteDarkAccent: #AA78A6;
  --sitePositiveAccent: #84A98C;
  --siteNegativeAccent: #B6465F;

  --orgBradfordCouncil: #293d82;
  --orgEstioTraining: #e54700;
  --orgNetConstruct: #3bb599;
}`

const pageStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: "column",
  backgroundColor: 'black',
  color: "var(--siteWhite)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headerStyles = {
  height: '75px'
}

const mainStyles = {
  padding: 32,
  flexGrow: 1
}

const footerStyles = {
  height: '25px'
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "var(--siteMediumAccent)",
}

const breakLineStyles = {
  'borderTop' : '1px solid var(--siteLightAccent)',
  'paddingTop': '21px',
  display : 'inline-block'
}

const logoStyles = {
  padding : '0 10px 0 0',
  transform : 'translateY(6px)',
}

const baseHighlightStyles = {
  'transition' : 'background-position 1s, color 0.5s',
  'backgroundSize': '200% 100%',
  hover: {
    'backgroundPosition': '-100% 0',
  }
}

const defaultHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--siteDarkAccent) 50%)',
}

const bradfordCouncilHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgBradfordCouncil) 50%)',
}

const estioTrainingHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgEstioTraining) 50%)',
}

const netConstructHighlightStyles = {
  'backgroundImage': 'linear-gradient(to right, transparent  50%, var(--orgNetConstruct) 50%)',
}

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle/>
    <Layout>
    <SEO title="Home" />
    <a href="/blog/">Visit the Blog Page</a>
  </Layout>
    <div style={pageStyles}>
      <header style={headerStyles}></header>
      <main style={mainStyles}>
      <h1 style={headingStyles}>
        <span>Jason Reid&apos;s</span>
        <br />
        <span style={headingAccentStyles}>Development Portfolio</span>
      </h1>
      {Organisation(null,"Personal Projects", defaultHighlightStyles, "2018 to "+(new Date().getFullYear()))}
      <span style={breakLineStyles}/>
      {Organisation(NetConstructLogo,"Net Construct", netConstructHighlightStyles, "2021")}
      {Organisation(BradfordCouncilLogo,"Bradford Council", bradfordCouncilHighlightStyles, "2019")}
      {Organisation(EstioTrainingLogo,"Estio Training", estioTrainingHighlightStyles, "2019")}
      <h3>This site was built using:</h3>
      <img title="Gatsby" style={logoStyles} src={GatsbyLogo} alt="Gatsby Logo" width="auto" height="20px"/>
      <img title="React" style={logoStyles} src={ReactLogo} alt="React Logo" width="auto" height="20px"/>
      <img title="JQuery" style={logoStyles} src={JQueryLogo} alt="Jquery Logo" width="auto" height="20px"/> 
      </main>
      <footer section style={footerStyles}></footer>
    </div>
    </React.Fragment>
  )
}

function Organisation(logo, name, styles, date){
  return(
  <h2>
    {logo && <img style={logoStyles} src={logo} alt={name} width="auto" height="30px"/>}
    {Hover(name, styles)}  
    <span style={headingAccentStyles}> - {date}</span> 
  </h2> 
  )
}

function Hover(content, style){

  const [hover, setHover] = useState(false);

  return(
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
      ...(hover ? style.hover : null)
    }}>
      {content}</span>    
  )
}

export default IndexPage