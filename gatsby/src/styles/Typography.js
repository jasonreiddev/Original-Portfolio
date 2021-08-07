import {createGlobalStyle} from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';

const Typography = createGlobalStyle`
body{
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }

    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--siteSecondary);

  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--sitePrimaryAccent);
    text-decoration-color: var(--sitePrimaryAccent);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--sitePrimaryAccent);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .Checklist li:not(.selected) {
    color: var(--siteNegativeAccent);
  }

  .tilt {
    transform: rotate(-2deg);
  }
}
`;

export default Typography;
