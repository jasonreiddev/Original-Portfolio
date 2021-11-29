import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

// Theme
:root
 {
  --spaceBlack: #1B1B1D;
  
  // default dark mode
  --siteMain: var(--spaceBlack);
  --siteOffMain: #121212;
  --siteSecondary: #EEE6F0;
  --siteBoldSecondary: #FFFFFF;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #A997DF;
  --siteTertiaryAccent: #FFD4CA;
}

.theme-light {
  --siteMain: #EEE6F0;
  --siteOffMain: #f7f7f7;
  --siteSecondary: #1B1B1D;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #5749a5;
  --siteTertiaryAccent: #A997DF;
}

.theme-custom{
  --siteMain: #FFFFFF;
  --siteOffMain: #f7f7f7;
  --siteSecondary: #000000;
  --siteBoldSecondary: #000000;
  --sitePrimaryAccent: #8B548C;
  --siteSecondaryAccent: #0000ff;
  --siteTertiaryAccent: #A997DF;
  --sitePositiveAccent: #00ff00;
  --siteNegativeAccent: #ff0000;
};


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.load-mask{
  height: 100vh;
  width: 100vw;
  background: var(--sitePrimaryAccent);
}

.load-spinner {
  border: 9px solid var(--siteBoldSecondary);
  border-top: 9px solid var(--siteSecondary);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
  right: 30px;
  bottom: 30px;
}

.load-mask,
.load-spinner{
  position: absolute;
  transition: all 0.5s ease-in;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}
body:not([class^="theme"]){
  // prevent flash if cache cleared and user prefers light mode
  // preload is removed once themes are loaded
  .load-mask,
  .load-spinner {
    opacity: 1;
    pointer-events: all;
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

.desktop-scroll {
  flex-grow: 1;
}

.space {
  background: var(--spaceBlack);
  height: 720px;
}

/*Mobile*/
.mobile-scroll{
  overflow-Y: scroll;
}


/*Tablet*/
/*@media only screen and (min-width: 480px) {
  .mobile-scroll{
    overflow-Y: scroll;
    min-height: 100vh;
  }
}*/

/*Desktop*/
@media only screen and (min-width: 1080px)  {
}

/*Large Desktop*/
@media only screen and (min-width: 1440px) {
  .column-small{
    flex-direction: row !important;
    margin: 0;
    padding-left: 0;
  }
  .tablet-scroll{
    overflow-y: hidden;
    max-width: unset !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
  }
  .mobile-scroll{
    overflow-Y: hidden;
    min-height: initial;
  }
  .aside-left{
    order: 1;
    width: unset !important;
  }
  .desktop-scroll{
    overflow-x: hidden;
    overflow-Y: scroll;
    order: 2;
    width: 1080px;
    height: 100%;
    padding-left: 1em;
    box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.3);
  }
  .aside-right{
    order: 3;
    width: unset !important;
  }
  footer{
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    width: unset !important;
    p {
      margin: 0;
    }
  }
}

.mobile-scroll::-webkit-scrollbar,
.desktop-scroll::-webkit-scrollbar,
.tablet-scroll::-webkit-scrollbar {
    width: 0.75rem;
  }
   
  .desktop-scroll::-webkit-scrollbar-track,
  .tablet-scroll::-webkit-scrollbar-track,
  .mobile-scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.35rem rgba(0, 0, 0, 0.3);
  }
   
  .mobile-scroll::-webkit-scrollbar-thumb,
  .tablet-scroll::-webkit-scrollbar-thumb,
  .desktop-scroll::-webkit-scrollbar-thumb {
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
