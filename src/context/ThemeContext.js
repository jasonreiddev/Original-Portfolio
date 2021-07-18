import React from 'react';

const ThemeContext = React.createContext({
  theme: 'theme-dark',
  setTheme: () => {},
});

export default ThemeContext;
