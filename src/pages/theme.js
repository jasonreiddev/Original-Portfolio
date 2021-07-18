import React from 'react';
import Layout from '../components/layout';

const ColorBoxContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
};
const ColorBoxTextContainerStyles = {
  background: 'white',
};
const Images = () => {
  return (
    <Layout title="Theme">
      <div style={ColorBoxContainerStyles}>
        {colorBox('Black')}
        {colorBox('White')}
        {colorBox('Light White')}
        {colorBox('Light Accent')}
        {colorBox('Medium Accent')}
        {colorBox('Dark Accent')}
        {colorBox('Positive Accent')}
        {colorBox('Negative Accent')}
      </div>
    </Layout>
  );
};

function colorBox(color) {
  return (
    <>
      <div style={{
        'background-color': 'var(--site'+color.replace(/\s/g, '')+')',
        'height': '120px',
        'width': '120px',
        'border': '1px solid white',
        'color': color,
        'margin': '0.5em',
      }}>
        <div style={ColorBoxTextContainerStyles}>
          <span style={{'color': 'var(--siteBlack'}}>{color}</span>
        </div>
      </div>
    </>
  );
}

export default Images;
