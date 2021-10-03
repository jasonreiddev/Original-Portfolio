import React from 'react';
import {HiSun} from '@react-icons/all-files/hi/HiSun';
import {HiMoon} from '@react-icons/all-files/hi/HiMoon';
import {GoPaintcan} from '@react-icons/all-files/go/GoPaintcan';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import {Button} from '../components/Button/Button';

import {Layout} from '../components/Layout/Layout';

const StyledColorBox = styled.div`
  font-size: '15px';
  height: 9rem;
  width: 9rem;
  border: 1px solid;
  margin: 0.5em;
`;

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
              <Button style={ThemeSwitchButtonStyles}
                onClick={theme.theme == 'custom' ? theme.resetTheme : theme.toggleTheme}>
                {theme.theme == 'dark' ?
                <><span>Turn on the lights </span>
                  <HiMoon/></> :
                theme.theme == 'light' ?
                <><span>Turn off the lights </span>
                  <HiSun/></>:
                <><span>Turn off high contrast mode </span>
                  <GoPaintcan/></>
                }
              </Button>
              <Button style={ThemeSwitchButtonStyles}
                onClick={theme.useCustom}>
                {theme.theme == 'custom' ?
                <span className="active">Using high contrast mode
                  <GoPaintcan/></span>:
                <span>Use high contrast mode
                  <GoPaintcan/></span>
                }
              </Button>
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
      <StyledColorBox style={{
        'backgroundColor': 'var(--site'+color.replace(/\s/g, '')+')',
      }}>
        <div style={ColorBoxTextContainerStyles} align="center">
          {color}
        </div>
      </StyledColorBox>
    </>
  );
}

export default Images;
