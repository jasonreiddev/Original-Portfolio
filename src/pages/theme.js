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
                {theme.theme == 'dark' ? <span>Turn on the lights </span> :
                theme.theme == 'light' ? <span>Turn out the lights </span> :
                <span style={{color: 'var(--siteSecondary)'}}>Turn off custom theme </span>
                }
                <span style={{color: 'var(--siteMain)'}}>
                  {theme.theme == 'dark' ? <span>☾</span> :
                  theme.theme == 'light' ? <span>☀</span> :
                  <span>✧</span>}
                </span>
              </button>
              <button style={ThemeSwitchButtonStyles} onClick={theme.useCustom}>
                <span style={{color: theme.theme == 'custom' ? 'var(--siteMain)' : 'var(--siteSecondary)'}}>
                  <span>Use custom theme ✧</span>
                  {theme.theme == 'custom' ? theme.resetTheme : theme.toggleTheme}
                </span>
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
        'backgroundColor': 'var(--siteSecondary)',
        'height': '9rem',
        'width': '9rem',
        'border': '1px solid ',
        'margin': '0.5em',
      }}>
        <div style={ColorBoxTextContainerStyles} align="center">
          <span style={{'color': 'var(--siteSecondary'}}>{color}</span>
        </div>
        <div style={{
          'backgroundColor': 'var(--site'+color.replace(/\s/g, '')+')',
          'height': 'calc(100% - 1.2rem)'}}>
        </div>
      </div>
    </>
  );
}

export default Images;
