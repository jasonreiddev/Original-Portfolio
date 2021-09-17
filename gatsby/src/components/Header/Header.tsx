import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {HiSun, HiMoon} from 'react-icons/hi';
import {GoPaintcan} from 'react-icons/go';

import ThemeContext from '../../context/ThemeContext';

const HeaderStyles = styled.header`
  background: var(--sitePrimaryAccent);
  flex-Grow: 0;
  
  & .active{
    color: var(--siteMain);
  }
`;

const ContainerStyles = styled.div`
  width: Calc(100% - 3rem);
  max-width: 1080px;
  margin: auto;
  font-size: 14pt;
  flex: 1;
  font-size: 1.2em;
`;

const TitleLinkStyles = styled.div`
  text-decoration: none;
`;

const UlStyles = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin-left: -1rem;

  li {
    padding: 1rem;
    list-style-type: none;
  }
`;

const ThemeIconStyles = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

interface HeaderProps {
  menuLinks?: any,
  title?: string,
}

export const Header = ({menuLinks, title}: HeaderProps) => {
  return (
    <HeaderStyles>
      <ContainerStyles>
        <TitleLinkStyles>
          <Link to="/">
            <h1>
              <span>Jason Reid&apos;s</span>
              <br />
              <span className="active">
                Dev<span className="hide-small-mobile">elopment</span> Portfolio</span>
            </h1>
          </Link>
        </TitleLinkStyles>
        <div>
          <nav>
            <UlStyles>
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                >
                  <Link
                    className={link.name == title ?'active' : ''}
                    to={link.link}>
                    {
                      (link.nameOverrideNav ? link.nameOverrideNav: link.name)
                    }
                  </Link>
                </li>
              ))}
              <li>
                <ThemeContext.Consumer>
                  {(theme) => (
                    <ThemeIconStyles type="button" className="active"
                      onClick={theme.theme == 'custom' ? theme.goToThemePage : theme.toggleTheme}>
                      {
                      theme.theme == 'dark' ?
                      <HiMoon/> :
                      theme.theme == 'light' ?
                      <HiSun/> :
                      <GoPaintcan/>
                      }
                    </ThemeIconStyles>
                  )}
                </ThemeContext.Consumer>
              </li>
            </UlStyles>
          </nav>
        </div>
      </ContainerStyles>
    </HeaderStyles>
  );
};