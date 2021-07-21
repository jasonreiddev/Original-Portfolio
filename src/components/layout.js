import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from '../components/header';
import {StaticQuery, graphql} from 'gatsby';
import SEO from '../components/seo';
import {Helmet} from 'react-helmet';
import '../styles/global.css';
import ThemeContext from '../context/ThemeContext';

const GlobalStyle = createGlobalStyle`
:root
 {
  --sitePositiveAccent: #84A98C;
  --siteNegativeAccent: #B6465F;

  --orgBradfordCouncil: #293d82;
  --orgEstioTraining: #e54700;
  --orgNetConstruct: #3bb599;
}
.theme-dark {
  --siteMain: #1B1B1D;
  --siteSecondary: #EEE6F0;
  --siteBoldSecondary: #FFFFFF;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #A997DF;
  --siteTertiaryAccent: #FFD4CA;
}
.theme-light{
  --siteMain: #EEE6F0;
  --siteSecondary: #1B1B1D;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #5749a5;
  --siteTertiaryAccent: #A997DF;
}
.theme-custom{
  --siteMain: #FFFFFF;
  --siteSecondary: #000000;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #0000ff;
  --siteTertiaryAccent: #A997DF;
  --sitePositiveAccent: #00ff00;
  --siteNegativeAccent: #ff0000;
};`;

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  color: 'var(--siteSecondary)',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  overflow: 'hidden',
  maxWidth: '100VW',
};

const mainStyles = {
  padding: 32,
  flexGrow: 1,
};

const footerStyles = {
  height: '1.5rem',
};

const Layout = ({children, title, subTitle}) => {
  return (
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
        <ThemeContext.Consumer>
          {(theme) => (
            <React.Fragment>
              <Helmet>
                <body className={'theme-'+ theme.theme}/>*
              </Helmet>
              <GlobalStyle/>
              <SEO title={title} subTitle={subTitle}/>
              <div style={pageStyles} >
                <Header menuLinks={data.site.siteMetadata.menuLinks} title={title}/>
                <main style={mainStyles}>
                  {children}
                </main>
                <footer section style={footerStyles}></footer>
              </div>
            </React.Fragment>)}
        </ThemeContext.Consumer>)}>

    </StaticQuery>);
};


export default Layout;
