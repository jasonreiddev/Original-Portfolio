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
import {FaGithub, FaHeart, FaShare, FaCode} from 'react-icons/fa';
import {HiTerminal} from 'react-icons/hi';
import {IoBrowsers} from 'react-icons/io5';

const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SVGStyles = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: unset;
  svg {
    fill: var(--siteOffMain);
    font-size: 25px;
  }
`;

const MainStyles = styled.main`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentStyles = styled.div`
  max-width: 1080px;
  flex-grow: 2;
  width: 100%;
`;

const AsideStyles = styled.aside`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  p {
    text-align: center;
  }
`;

const BodyDivStyles = styled.div`
  width: Calc(100% - 3rem);
  max-width: 1080px;
  margin: auto;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-grow: 1;
`;

const FooterStyles = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  svg {
    fill: var(--sitePrimaryAccent);
  }
  .media-links {
    font-size: 30px;
  }
  p {
    letter-spacing: 0px;
  }
`;

export default function Layout({children, title, subTitle, content}) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                titleTemplate
                url
                twitterUsername
                menuLinks {
                  name
                  nameOverrideNav
                  link
                }
              }
            }
          }
        `}
        render={(data) => {
          const seo = data.site.siteMetadata;

          const shareText =
          `${subTitle ? subTitle :
          title ? title : seo.titleTemplate} - @${seo.twitterUsername}`;

          return (
            <ThemeContext.Consumer>
              {(theme) => (
                <>
                  <SVGStyles>
                    <defs>
                      <pattern id="background-icons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <FaCode x="0" y="0"/>
                        <HiTerminal x="35" y="35"/>
                        <IoBrowsers x="70" y="70"/>
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#background-icons)" />
                  </SVGStyles>
                  <SiteBorderStyles className={'mobile-scroll'}>
                    <Helmet>
                      <body className={'theme-'+theme.theme}/>
                    </Helmet>
                    <SEO title={title} subTitle={subTitle} content={content}/>

                    <div className="load-mask"/>
                    <div className="load-spinner"/>
                    <Header menuLinks={seo.menuLinks} title={title}/>
                    <BodyDivStyles className={'column-small tablet-scroll'}>
                      <ContentStyles className={'desktop-scroll'}>
                        <MainStyles>
                          {children}
                        </MainStyles>
                      </ContentStyles>
                      <AsideStyles className="aside-left">
                        <p>
                          <a title="Like - w.i.p">
                            <FaHeart/>
                          </a>
                          <div>1337</div>
                        </p>
                      </AsideStyles>
                      <AsideStyles className="aside-right">
                        <p>
                          {typeof window !== 'undefined' &&
                        <a title="Share via Twitter" href={`
                          https://twitter.com/intent/tweet?text=${shareText}:&url=${seo.url}${location.pathname}`}>
                          <FaShare/>
                          <div>Share</div>
                        </a>
                          }
                        </p>
                      </AsideStyles>
                      <FooterStyles>
                        <p>
                          <span className="media-links">
                            <a title="LinkedIn" href="https://www.linkedin.com/in/jasonreiddev/"><AiFillLinkedin/></a>
                            <a title="GitHub" href="https://github.com/jasonreiddev"><FaGithub/></a>
                            <a title="Twitter" href="https://twitter.com/jasonreiddev"><AiOutlineTwitter/></a>
                          </span><br/>
                    &copy; {new Date().getFullYear()} Jason Reid
                        </p>
                      </FooterStyles>
                    </BodyDivStyles>
                  </SiteBorderStyles>
                </>)
              }
            </ThemeContext.Consumer>
          );
        }}
      />
    </>
  );
};
