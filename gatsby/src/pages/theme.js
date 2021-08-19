import React from 'react';
import Layout from '../components/Layout';
import ThemeContext from '../context/ThemeContext';
import Sun from '../images/svg/icon/Sun.svg';
import Moon from '../images/svg/icon/Moon.svg';
import Pallet from '../images/svg/icon/Pallet.svg';

const iconStyles = {
  padding: '0 0.5rem 0 0',
  transform: 'translateY(0.5rem)',
  height: '1.8rem',
  color: 'var(--siteMain)',
};

const ColorBoxContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
};
const ColorBoxTextContainerStyles = {
  'background': 'var(--siteMain)',
};
const ThemeSwitchContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
};
const ThemeSwitchButtonStyles = {
  cursor: 'pointer',
  background: 'var(--sitePrimaryAccent)',
  height: '3rem',
  width: 'calc(2em + 18.75rem)',
  border: '1px solid var(--siteBoldSecondary)',
  color: '1px solid var(--siteSecondary)',
  margin: '0.5em',
  fontSize: '14pt',
  fontWeight: 'bold',
};

const Images = () => {
  return (
    <Layout title="Theme">
      <div style={ColorBoxContainerStyles}>
        {colorBox('Main')}
        {colorBox('Secondary')}
        {colorBox('Bold Secondary')}
        {colorBox('Primary Accent')}
        {colorBox('Secondary Accent')}
        {colorBox('Tertiary Accent')}
        {colorBox('Positive Accent')}
        {colorBox('Negative Accent')}
      </div>
      <div style={ThemeSwitchContainerStyles}>
        <ThemeContext.Consumer>
          {(theme) => (
            <>
              <button style={ThemeSwitchButtonStyles}
                onClick={theme.theme == 'custom' ? theme.resetTheme : theme.toggleTheme}>
                {theme.theme == 'dark' ?
                <><span>Turn on the lights </span>
                  <img src={Moon} style={iconStyles} alt={'Moon'} width="auto" height="auto"/></> :
                theme.theme == 'light' ?
                <><span>Turn off the lights </span>
                  <img src={Sun} style={iconStyles} alt={'Sun'} width="auto" height="auto"/></>:
                <><span>Turn off high contrast mode </span>
                  <img src={Pallet} style={iconStyles} alt={'Paint Pallet'} width="auto" height="auto"/></>
                }
              </button>
              <button style={ThemeSwitchButtonStyles}
                onClick={theme.useCustom}>
                {theme.theme == 'custom' ?
                <span style={{color: 'var(--siteMain)'}}>Using high contrast mode
                  <img src={Pallet} style={iconStyles} alt={'Paint Pallet'} width="auto" height="auto"/> </span>:
                <span>Use high contrast mode
                  <img src={Pallet} style={iconStyles} alt={'Paint Pallet'} width="auto" height="auto"/></span>
                }
              </button>
            </>
          )}
        </ThemeContext.Consumer>
      </div>
    </Layout>
  );
};

function colorBox(color) {
  return (
    <>
      <div style={{
        'font-size': '15px',
        'height': '9rem',
        'width': '9rem',
        'border': '1px solid ',
        'margin': '0.5em',
        'backgroundColor': 'var(--site'+color.replace(/\s/g, '')+')',
      }}>
        <div style={ColorBoxTextContainerStyles} align="center">
          <span style={{'color': 'var(--siteSecondary'}}>{color}</span>
        </div>
      </div>
    </>
  );
}

export default Images;
