import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

// Theme
:root
 {
  // default dark mode
  --siteMain: #1B1B1D;
  --siteSecondary: #EEE6F0;
  --siteBoldSecondary: #FFFFFF;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #A997DF;
  --siteTertiaryAccent: #FFD4CA;
}

.theme-light {
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

// Loading
.load-animation{
    min-height: 0;
    transition: min-height 0.5s ease-out;
    background-color: var(--sitePrimaryAccent);
    position: absolute;
    width: 100vw;
    z-index: 1;
}

@keyframes delay-scroll {
    from { overflow-Y: hidden; }
    to   { overflow-Y: scroll; }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

body:not([class^="theme"]){
  // prevent flash if cache cleared and user prefers light mode
  // preload is removed once themes are loaded
  .load-animation{
    min-height: 100vh;
  }

  .loader {
    border: 9px solid #f3f3f3;
    border-top: 9px solid var(--siteSecondary);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: spin 2s linear infinite;
    position: absolute;
    z-index: 1;
    right: 30px;
    bottom: 30px;
  }
}

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

p {
  white-space: pre-line;
}

html *{
    max-width: 100%;
}

/*H0n3y P0t*/
#buzzyFuzzyFriend {
  display: none;
}

.scroll {
  flex-grow: 1;
}

/*Scrollbar*/
@media only screen and (max-width: 640px) {
  .mobile-scroll{
    overflow-Y: scroll;
    min-height: 100vh;
  }
}

@media only screen and (min-width: 639px) {
  .scroll{
    overflow-Y: scroll;
    overflow-x: hidden;
    }
  }

.mobile-scroll::-webkit-scrollbar,
.scroll::-webkit-scrollbar {
    width: 0.75rem;
  }
   
  .scroll::-webkit-scrollbar-track,
  .mobile-scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.35rem rgba(0, 0, 0, 0.3);
  }
   
  .mobile-scroll::-webkit-scrollbar-thumb,
  .scroll::-webkit-scrollbar-thumb {
    border: 0.1rem solid var(--siteSecondary);
    background-color: var(--siteMain);
    border-radius: 0.75rem;
  }

@media only screen and (min-width: 480px) {
  .show-small-mobile{ 
    display: none;
  }
}

@media only screen and (max-width: 479px) {
  .hide-small-mobile{ 
    display: none;
  }
}
`;

export default GlobalStyles;
