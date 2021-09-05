import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';
import {HiSun, HiMoon} from 'react-icons/hi';
import {GoPaintcan} from 'react-icons/go';

const ContainerStyles = styled.div`
  width: Calc(100% - 3rem);
  max-width: 1000px;
  margin: auto;
  font-size: 14pt;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: ``,
};

export default function Header({menuLinks, title}) {
  return (
    <header style={{background: 'var(--sitePrimaryAccent)', flexGrow: 0}}>
      <ContainerStyles
        style={{
          alignItems: 'center',
        }}
      >
        <div style={{margin: 0, flex: 1, fontSize: '1.5em'}}>
          <Link
            to="/"
            style={{
              color: 'var(--siteSecondary)',
              textDecoration: 'none',
            }}
          >
            <h1 style={{color: 'var(--siteSecondary)'}}>
              <span>Jason Reid&apos;s</span>
              <br />
              <span style={{color: 'var(--siteMain)'}}>
                <span className="hide-small-mobile">Development Portfolio</span>
                <span className="show-small-mobile">Dev Portfolio</span>
              </span>
            </h1>
          </Link>
        </div>
        <div>
          <nav>
            <ul style={{
              display: 'flex',
              flexFlow: 'row wrap',
              padding: 0,
              marginLeft: '-1rem',
            }}>
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link
                    style={{color: link.name == title ? `var(--siteMain)` : `var(--siteSecondary)`}}
                    to={link.link}>
                    {
                      (link.nameOverrideNav ? link.nameOverrideNav: link.name)
                    }
                  </Link>
                </li>
              ))}
              <li style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}>
                <ThemeContext.Consumer>
                  {(theme) => (
                    <span type="button" style={{color: 'var(--siteMain)', cursor: 'pointer'}}
                      onClick={theme.theme == 'custom' ? theme.goToThemePage : theme.toggleTheme}>
                      {
                      theme.theme == 'dark' ?
                      <HiMoon/> :
                      theme.theme == 'light' ?
                      <HiSun/> :
                      <GoPaintcan/>
                      }
                    </span>
                  )}
                </ThemeContext.Consumer>
              </li>
            </ul>
          </nav>
        </div>
      </ContainerStyles>
    </header>
  );
}
