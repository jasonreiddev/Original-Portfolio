import React from 'react';
import {Link} from 'gatsby';
import {HiSun} from '@react-icons/all-files/hi/HiSun';
import {HiMoon} from '@react-icons/all-files/hi/HiMoon';
import {GoPaintcan} from '@react-icons/all-files/go/GoPaintcan';

import ThemeContext from '../../context/ThemeContext';
import {ContainerStyles, HeaderStyles, ThemeIconStyles, TitleLinkStyles, UlStyles} from './Header.styles';

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
