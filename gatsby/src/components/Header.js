import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';
import Sun from '../images/svg/icon/Sun.svg';
import Moon from '../images/svg/icon/Moon.svg';
import Pallet from '../images/svg/icon/Pallet.svg';

const IconStyles = styled.img`
  transform: translateY(-0.3rem);
`;

const ContainerStyles = styled.div`
  padding: 1rem 2rem;
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
          padding: '1rem 2rem',
          alignItems: 'center',
        }}
      >
        <h1 style={{margin: 0, flex: 1, fontSize: '1.5em'}}>
          <Link
            to="/"
            style={{
              color: 'var(--siteSecondary)',
              textDecoration: 'none',
            }}
          >
            <h1 style={{color: 'var(--siteSecondary)', margin: '0'}}>
              <span>Jason Reid&apos;s</span>
              <br />
              <span style={{color: 'var(--siteMain)'}}>Development Portfolio</span>
            </h1>
          </Link>
        </h1>
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
                    <a style={{color: 'var(--siteMain)', cursor: 'pointer'}}
                      onClick={theme.theme == 'custom' ? theme.goToThemePage : theme.toggleTheme}>
                      {
                      theme.theme == 'dark' ?
                      <IconStyles src={Moon} alt={'Moon'} width="auto" height="auto"/> :
                      theme.theme == 'light' ?
                      <IconStyles src={Sun} style={{filter: 'invert(1)'}}
                        alt={'Sun'} width="auto" height="auto"/> :
                      <IconStyles src={Pallet} alt={'Paint Pallet'} width="auto" height="auto"/>
                      }
                    </a>
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
