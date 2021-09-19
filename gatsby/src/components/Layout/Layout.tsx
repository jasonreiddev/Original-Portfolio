import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import 'normalize.css';
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';
import {FaGithub, /* FaHeart,*/ FaShare, FaCode} from 'react-icons/fa';
import {HiTerminal} from 'react-icons/hi';
import {IoBrowsers} from 'react-icons/io5';

import ThemeContext from '../../context/ThemeContext';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import {SEO} from './../SEO/SEO';
import {Header} from './../Header/Header';
import {
  AsideStyles, BodyDivStyles, ContentStyles, FooterStyles, MainStyles, SVGStyles, SiteBorderStyles,
} from './Layout.styles';
import {SmallText} from '../SmallText/SmallText';

interface LayoutProps {
  children?: any,
  title?: string,
}

export const Layout = ({children, title}:LayoutProps) => {
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
          `${ title ? title : seo.titleTemplate} - @${seo.twitterUsername}`;

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
                    <SEO title={title}/>
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
                        {/* <p>
                          <a title="Like - w.i.p">
                            <FaHeart/>
                          </a>
                          <span>1337</span>
                        </p>*/}
                      </AsideStyles>
                      <AsideStyles className="aside-right">
                        <p>
                          {typeof window !== 'undefined' &&
                        <a title="Share via Twitter" href={`
                          https://twitter.com/intent/tweet?text=${shareText}:&url=${seo.url}${location.pathname}`}>
                          <FaShare/><br/>
                          <span>Share</span>
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
                          </span>
                          <br/>
                          <SmallText text={`© ${new Date().getFullYear()} Jason Reid`}/>
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
