/* import React, {useState, useEffect} from 'react';

const Context = React.createContext('Default');

function ContextProvider({children}) {
  const [theme, updateTheme] = useState([]);

  // Local Storage: setting & getting data
  useEffect(() => {
    const themeData = JSON.parse(localStorage.getItem('theme'));

    if (themeData) {
      updateTheme(themeData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function getTheme() {
    return 'TEST TEST TEST';
    return theme;
  }

  function setTheme(newItem) {
    updateTheme(newItem);
  }

  function toggleTheme() {
    updateTheme(theme == 'theme-dark' ? 'theme-light' : 'theme-dark');
  }

  return (
    <Context.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};*/
