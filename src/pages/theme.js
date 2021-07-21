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
                {theme.theme == 'dark' ?
                <><span>Turn on the lights </span><span style={{color: 'var(--siteMain)'}}>☾</span></> :
                theme.theme == 'light' ?
                <><span>Turn off the lights </span><span style={{color: 'var(--siteMain)'}}>☀</span></>:
                <><span>Turn off custom theme </span>✧</>
                }
              </button>
              <button style={ThemeSwitchButtonStyles}
                onClick={theme.useCustom}>
                {theme.theme == 'custom' ?
                <span style={{color: 'var(--siteMain)'}}>Using custom theme ✧ </span>:
                <span>Use custom theme ✧</span>
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
