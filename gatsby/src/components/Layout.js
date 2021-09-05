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
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';

const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  max-width: 100VW;
  height: 100vh;
`;

const ContentStyles = styled.div`
   display: flex;
  flex-direction: column;
`;

const MainStyles = styled.main`
  width: Calc(100% - 3rem);
  max-width: 1000px;
  margin: auto;
  flex-grow: 1;
`;

const FooterStyles = styled.footer`
  text-align: center;
  svg {
    fill: var(--sitePrimaryAccent);
  }
  .media-links {
    font-size: 30px;
  }
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
                  <body className={'theme-'+theme.theme}/>
                </Helmet>
                <SEO title={title} subTitle={subTitle}/>
                <Header menuLinks={data.site.siteMetadata.menuLinks} title={title} style={{flexGrow: 0}}/>
                <div className="load-animation"/>
                <ContentStyles className={'scroll'}>
                  <MainStyles>
                    {children}
                  </MainStyles>
                  <FooterStyles>
                    <p>
                      <span className="media-links">
                        <a title="LinkedIn" href="https://www.linkedin.com/in/JasonReidDev/"><AiFillLinkedin/></a>
                        <a title="GitHub" href="https://github.com/JasonReidD"><FaGithub/></a>
                        <a title="Twitter" href="https://twitter.com/JasonReidD"><AiOutlineTwitter/></a>
                      </span><br/>
                    &copy; {new Date().getFullYear()} Jason Reid
                    </p>
                  </FooterStyles>
                </ContentStyles>
              </SiteBorderStyles>)
            }
          </ThemeContext.Consumer>)
        }/>
    </>);
};
