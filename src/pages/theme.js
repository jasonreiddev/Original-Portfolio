import React from 'react';
import Layout from '../components/layout';
import ThemeContext from '../context/ThemeContext';

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
  height: '50px',
  width: 'calc(2em + 300px)',
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
            <button style={ThemeSwitchButtonStyles} onClick={theme.toggleDark}>
              {theme.dark ? <span>Turn on the lights </span> : <span>Turn out the lights </span>}
              <span style={{color: 'var(--siteMain)'}}>
                {theme.dark ? <span>☾</span> : <span>☀</span>}
              </span>
            </button>
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
        'backgroundColor': 'var(--siteSecondary)',
        'height': '150px',
        'width': '150px',
        'border': '1px solid ',
        'margin': '0.5em',
      }}>
        <div style={ColorBoxTextContainerStyles} align="center">
          <span style={{'color': 'var(--siteSecondary'}}>{color}</span>
        </div>
        <div style={{
          'backgroundColor': 'var(--site'+color.replace(/\s/g, '')+')',
          'height': 'calc(100% - 18px)'}}>
        </div>
      </div>
    </>
  );
}

export default Images;
