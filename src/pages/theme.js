import React, {useContext} from 'react';
import Layout from '../components/layout';
import ThemeContext from '../context/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';

const ColorBoxContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
};
const ColorBoxTextContainerStyles = {
  background: 'var(--siteBoldSecondary)',
};

const Images = () => {
  const {theme} = useContext(ThemeContext);
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
      <ThemeSwitcher theme={theme}/>
    </Layout>
  );
};

function colorBox(color) {
  return (
    <>
      <div style={{
        'backgroundColor': 'var(--site'+color.replace(/\s/g, '')+')',
        'height': '150px',
        'width': '150px',
        'border': '1px solid ',
        'color': color,
        'margin': '0.5em',
      }}>
        <div style={ColorBoxTextContainerStyles}>
          <span style={{'color': 'var(--siteMain'}}>{color}</span>
        </div>
      </div>
    </>
  );
}

export default Images;
