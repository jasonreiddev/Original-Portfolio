import React, {useState, useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Helmet} from 'react-helmet';
import 'normalize.css';
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin';
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter';
import {FaGithub} from '@react-icons/all-files/fa/FaGithub';
import {FaCode} from '@react-icons/all-files/fa/FaCode';
import {HiTerminal} from '@react-icons/all-files/hi/HiTerminal';
import {IoBrowsers} from '@react-icons/all-files/io5/IoBrowsers';
import firebase from '../../utils/useFirebase';
import {doc, getDoc} from 'firebase/firestore';

import ThemeContext from '../../context/ThemeContext';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import {SEO} from './../SEO/SEO';
import {Header} from './../Header/Header';
import {Share} from '../Share/Share';
import {Like} from '../Like/Like';

import {
  AsideStyles, BodyDivStyles, ContentStyles, FooterStyles, MainStyles, SVGStyles, SiteBorderStyles,
} from './Layout.styles';
import {SmallText} from '../SmallText/SmallText';

interface LayoutProps {
  children?: any,
  title?: string,
}

export const Layout = ({children, title}:LayoutProps) => {
  const data = useStaticQuery(graphql`
query SiteDataQuery {
  site {
    siteMetadata {
      firebaseLikeDocId
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
}`);
  const site = data.site.siteMetadata;
  const [totalLikes, setLikes] = useState(0);
  const [loadedLikes, setloadedLikes] = useState(false);
  const db = firebase.firestore();

  useEffect(() => {
    if (db && site.firebaseLikeDocId) {
      getLikes();
    } else {
      site.firebaseLikeDocId ? console.log('No DB found') : console.log('No doc ID');
    };
  });

  // Only used after succesfully getting DB & doc
  async function getLikes() {
    const docRef = doc(db, 'likes', site.firebaseLikeDocId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLikes(docSnap.data().value);
      setloadedLikes(true);
    } else {
      console.log(`Document ${site.firebaseLikeDocId} not found in DB`);
      console.log(db);
    }
  }

  // Only used after sucessfully loadedLikes
  function updateLikes(value) {
    getLikes();
    const update = totalLikes + value;
    db.collection('likes').doc(site.firebaseLikeDocId).update({value: update});
  };

  return (
    <>
      <GlobalStyles />
      <Typography />
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
              <Header menuLinks={site.menuLinks} title={title}/>
              <BodyDivStyles className={'column-small tablet-scroll'}>
                <ContentStyles className={'desktop-scroll'}>
                  <MainStyles>
                    {children}
                  </MainStyles>
                </ContentStyles>
                <AsideStyles className="aside-left">
                  {!loadedLikes && <Like/>}
                  {loadedLikes &&
                        <Like likes={totalLikes} liked={false} updateData={updateLikes} />}
                </AsideStyles>
                <AsideStyles className="aside-right">
                  <Share text="Share"
                    shareText={`${ title ? title : site.titleTemplate} - @${site.twitterUsername}`}
                    shareUrl= {`${site.url}${typeof window !== 'undefined' ? location.pathname : ''}`}/>
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
    </>
  );
};
