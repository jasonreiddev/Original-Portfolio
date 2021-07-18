import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from '../components/header';
import {StaticQuery, graphql} from 'gatsby';
import SEO from '../components/seo';
import {Helmet} from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import '../styles/global.css';

const GlobalStyle = createGlobalStyle`
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
.theme-dark,
.theme-light
 {
  --sitePositiveAccent: #84A98C;
  --siteNegativeAccent: #B6465F;

  --orgBradfordCouncil: #293d82;
  --orgEstioTraining: #e54700;
  --orgNetConstruct: #3bb599;
}`;

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
  height: '25px',
};

const Layout = ({children, title, subTitle}) => {
  const [theme, setTheme] = useState('theme-dark');
  const value = {theme, setTheme};
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
        <React.Fragment>
          <ThemeContext.Provider value={value}>
            <Helmet>
              <body className={theme} />
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
          </ThemeContext.Provider>
        </React.Fragment>
      )}
    />
  );
};

export default Layout;
