import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({menuLinks, title}) => (
  <header style={{background: 'var(--sitePrimaryAccent)'}}>
    <div
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
            flex: 1,
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
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: ``,
};
export default Header;
