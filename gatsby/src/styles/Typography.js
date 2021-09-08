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
    p {
      margin: 0;
    }
  }

  .post p {
    margin-top: 0.5rem;
  }
  
  a {
    font-weight: bold;
    text-decoration-skip-ink: none;
    text-decoration: underline;
    text-decoration-color: var(--sitePrimaryAccent);
    color: var(--siteBoldSecondary);
    text-decoration-thickness: 0.2em;
  }

  a:disabled
  {
    color: var(--sitePrimaryAccent);
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    a {
      color: var(--sitePrimaryAccent);
      text-decoration: none;
    }
  }

  svg{
    transform: translateY(15%);
  }

  .center {
    text-align: center;
  }

  .Checklist li:not(.selected) {
    color: var(--siteNegativeAccent);
  }
}
`;

export default Typography;
