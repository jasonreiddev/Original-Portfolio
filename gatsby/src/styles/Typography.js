import {createGlobalStyle} from 'styled-components';

const Typography = createGlobalStyle`
body{
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    color: var(--siteSecondary);

  p, li {
    letter-spacing: 0.5px; 
  }
  li {
    padding-bottom: 1em;
  }
  
  a {
    text-decoration: underline;
    text-decoration-color: var(--sitePrimaryAccent);
    color: var(--siteBoldSecondary);
    text-decoration-thickness: 0.2em;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    a {
      color: var(--sitePrimaryAccent);
      text-decoration: none;
    }
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
