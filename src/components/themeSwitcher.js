import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function ThemeSwitcher() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setTheme(theme == 'theme-dark' ? 'theme-light' : 'theme-dark');
      }}
      style={{'text-align': 'center'}}
    >
      {theme == 'theme-dark' ? 'Turn on the lights' : 'Turn out the lights'}
    </div>
  );
}

export default ThemeSwitcher;
