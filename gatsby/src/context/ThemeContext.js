/* eslint no-invalid-this: "off" */
import {navigate} from 'gatsby';
import React from 'react';

// updated from prefrence on mount
let defaultOrPreferedTheme = 'dark';

const defaultState = {
  setThemeAndCookie: () => {},
  toggleTheme: () => {},
  useCustom: () => {},
  resetTheme: () => {},
  goToThemePage: () => {},
};

const ThemeContext = React.createContext(defaultState);
class ThemeProvider extends React.Component {
  state = {
    theme: defaultOrPreferedTheme,
  }
  setThemeAndCookie = (theme) => {
    localStorage.setItem('theme', theme);
    this.setState({theme: theme});
  }

  toggleTheme = () => {
    const theme = (this.state.theme == 'light' ? 'dark' : 'light');
    this.setThemeAndCookie(theme);
  }
  useCustom = () => {
    this.setThemeAndCookie('custom');
  }
  resetTheme = () => {
    this.setThemeAndCookie(defaultOrPreferedTheme);
  }
  goToThemePage = () => {
    navigate('/theme');
  }

  componentDidMount() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      defaultOrPreferedTheme = 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      defaultOrPreferedTheme= 'light';
    }
    const theme = localStorage.getItem('theme');
    if (theme == undefined) {
      this.setThemeAndCookie(defaultOrPreferedTheme);
    } else {
      this.setState({theme: theme});
    }
  }

  render() {
    const {children} = this.props;
    const {theme} = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
          useCustom: this.useCustom,
          resetTheme: this.resetTheme,
          goToThemePage: this.goToThemePage,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;

export {ThemeProvider};
