import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from '../components/header';
import {StaticQuery, graphql} from 'gatsby';
import SEO from '../components/seo';
import '../styles/global.css';

const GlobalStyle = createGlobalStyle`
:root {
  --siteBlack: #1B1B1D;
  --siteWhite: #EEE6F0;
  --siteLightWhite: #FFFFFF;
  --siteLightAccent: #FFD4CA;
  --siteMediumAccent: #A997DF;
  --siteDarkAccent: #8B548C;
  --sitePositiveAccent: #84A98C;
  --siteNegativeAccent: #B6465F;

  --orgBradfordCouncil: #293d82;
  --orgEstioTraining: #e54700;
  --orgNetConstruct: #3bb599;
}`;

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  color: 'var(--siteWhite)',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  overflow: 'hidden',
  maxWidth: '100VW',
};

const mainStyles = {
  padding: 32,
  flexGrow: 1,
};

const footerStyles = {
  height: '25px',
};

const Layout = ({children, title, subTitle}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              nameOverrideNav
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <GlobalStyle/>
        <SEO title={title} subTitle={subTitle}/>
        <div style={pageStyles}>
          <Header menuLinks={data.site.siteMetadata.menuLinks} title={title}/>
          <main style={mainStyles}>
            {children}
          </main>
          <footer section style={footerStyles}></footer>
        </div>
      </React.Fragment>
    )}
  />
);

export default Layout;
