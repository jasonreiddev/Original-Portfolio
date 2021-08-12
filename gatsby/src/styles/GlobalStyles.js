import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root
 {
  --sitePositiveAccent: #84A98C;
  --siteNegativeAccent: #B6465F;

  --orgBradfordCouncil: #293d82;
  --orgEstioTraining: #e54700;
  --orgNetConstruct: #3bb599;
}
.theme-dark {
  --siteMain: #1B1B1D;
  --siteSecondary: #EEE6F0;
  --siteBoldSecondary: #FFFFFF;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #A997DF;
  --siteTertiaryAccent: #FFD4CA;
}
.theme-light{
  --siteMain: #EEE6F0;
  --siteSecondary: #1B1B1D;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #5749a5;
  --siteTertiaryAccent: #A997DF;
}
.theme-custom{
  --siteMain: #FFFFFF;
  --siteSecondary: #000000;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #0000ff;
  --siteTertiaryAccent: #A997DF;
  --sitePositiveAccent: #00ff00;
  --siteNegativeAccent: #ff0000;
};

html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
}

fieldset {
  color: var(--siteSecondary);
}

body {
    margin: 0;
    background: var(--siteMain);
}

div[role="group"][tabindex] {
    height: 100%;
}

a {
    text-decoration: none;
    font-weight: bold;
}

html *{
    max-width: 100%;
}

/*Scrollbar*/
body::-webkit-scrollbar {
    width: 1em;
  }
   
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.35rem rgba(0, 0, 0, 0.3);
  }
   
  body::-webkit-scrollbar-thumb {
    background-color: var(--siteSecondary);
    outline: 1px solid var(--siteBoldSecondary);
  }`;

export default GlobalStyles;
