import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import 'normalize.css';
import ThemeContext from '../context/ThemeContext';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SEO from './SEO';
import Header from './Header';

const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100VW;
  max-height: 100vh;
`;

const MainStyles = styled.main`
  padding: 1rem 2rem;
  width: Calc(100% - 3rem);
  max-width: 1000px;
  margin: auto;
`;

const FooterStyles = styled.footer`
  height: 1.5rem;
`;

export default function Layout({children, title, subTitle}) {
  return (
    <>
      <GlobalStyles />
      <Typography />
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
              <SiteBorderStyles className={'mobile-scroll'}>
                <Helmet>
                  <body className={'theme-'+ theme.theme}/>
                </Helmet>
                <SEO title={title} subTitle={subTitle}/>
                <Header menuLinks={data.site.siteMetadata.menuLinks} title={title}/>
                <div className={'scroll'}>
                  <MainStyles>
                    {children}
                  </MainStyles>
                  <FooterStyles/>
                </div>
              </SiteBorderStyles>)
            }
          </ThemeContext.Consumer>)
        }/>
    </>);
};
