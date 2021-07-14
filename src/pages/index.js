//https://coolors.co/a997df-303036-84a98c-ffd4ca-aa78a6

import React, {useState} from 'react';
import { createGlobalStyle } from "styled-components"
import '../styles/global.css';
import GatsbyLogo from '../images/svg/logo/Gatsby.svg';
import ReactLogo from '../images/svg/logo/React.svg';
import JQueryLogo from '../images/svg/logo/JQuery.svg';
import NetConstructLogo from '../images/svg/logo/NetConstruct.svg';
import BradfordCouncilLogo from '../images/svg/logo/BradfordCouncil.svg';
import EstioLogo from '../images/svg/logo/Estio.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"

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
}
`
const pageStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: "column",
  backgroundColor: 'black',
  color: "var(--siteWhite)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const header = {
  height: '75px'
}
const main = {
  padding: 32,
  flexGrow: 1
}
const footer = {
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

const breakLine = {
  'border-top' : '1px solid var(--siteLightAccent)',
  'padding-top': '21px',
  display : 'inline-block'
}

const Highlight = {
  'background-size': '200% 100%',
  'background-image': 'linear-gradient(to right, transparent  50%, #663399 50%)',
  'transition' : 'background-position 1s, color 0.5s',
  hover: {
    'background-position': '-100% 0',
  }
}

const logo = {
  padding : '0 10px 0 0',
  transform : 'translateY(6px)',
}

//BradfordCouncil
const bradfordCouncilHighlight = {
  'background-size': '200% 100%',
  'background-image': 'linear-gradient(to right, transparent  50%, #293d82 50%)',
  'transition' : 'background-position 1s, color 0.5s',
  hover: {
    'background-position': '-100% 0',
  }
}

//Estio Training
const estioTrainingHighlight = {
  'background-size': '200% 100%',
  'background-image': 'linear-gradient(to right, transparent  50%, #e54700 50%)',
  'transition' : 'background-position 0.5s, color 0.25s',
  hover: {
    'background-position': '-100% 0',
  }
}

// Net Construct
const netConstructHighlight = {
  'background-size': '200% 100%',
  'background-image': 'linear-gradient(to right, transparent  50%, #3bb599 50%)',
  'transition' : 'background-position 1s, color 0.5s',
  hover: {
    'background-position': '-100% 0',
    'color':'#ffffff'
  }
}

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
    <Layout>
    <SEO title="Home" />
    ...
    <a href="/blog/">Visit the Blog Page</a>
  </Layout>
    <div style={pageStyles}>
      <header style={header}></header>
      <main style={main}>
      <h1 style={headingStyles}>
        Jason Reid
        <br />
        <span style={headingAccentStyles}>— Development Portfolio</span>
      </h1>
      <h2>
        <img style={logo} src={NetConstructLogo} alt="NetConstruct Logo" width="auto" height="30px"/>
        {Hover("Net Construct", netConstructHighlight)}          
        <span style={headingAccentStyles}> - 2021</span> 
      </h2>    
      <h2>
        <img style={logo} src={BradfordCouncilLogo} alt="React Logo" width="auto" height="30px"/>
        {Hover("Bradford Council", bradfordCouncilHighlight)}  
        <span style={headingAccentStyles}> - 2019</span> 
      </h2> 
      <h2> 
        <img style={logo} src={EstioLogo} alt="Estio Logo" width="auto" height="30px"/>
        {Hover("Estio Training", estioTrainingHighlight)}  
        <span style={headingAccentStyles}> - 2019</span> 
      </h2>
      <h2>
        <span style={breakLine}>
          {Hover("Personal Projects", Highlight)}  
          <span style={headingAccentStyles}> - 2018 to {(new Date().getFullYear())}</span> 
        </span>
      </h2>
      
      <h3>This site was built using:</h3>
      <img title="Gatsby" style={logo} src={GatsbyLogo} alt="Gatsby Logo" width="auto" height="20px"/>
      <img title="React" style={logo} src={ReactLogo} alt="React Logo" width="auto" height="20px"/>
      <img title="JQuery" style={logo} src={JQueryLogo} alt="Jquery Logo" width="auto" height="20px"/>
      
      </main>
      <footer section style={footer}></footer>
    </div>
    </React.Fragment>
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
      ...style,
      ...(hover ? style.hover : null)
    }}>
      {content}</span>    
  )
}


export default IndexPage
