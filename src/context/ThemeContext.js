/* eslint no-invalid-this: "off" */
import {navigate} from 'gatsby';
import React from 'react';
const defaultTheme = 'light';
const defaultState = {
  toggleTheme: () => {},
  useCustom: () => {},
  resetTheme: () => {},
  goToThemePage: () => {},
};
const ThemeContext = React.createContext(defaultState);
// Getting dark mode information from OS
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;
class ThemeProvider extends React.Component {
  state = {
    theme: defaultTheme,
  }
  toggleTheme = () => {
    const theme = (this.state.theme == 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
    this.setState({theme: theme});
  }
  useCustom = () => {
    localStorage.setItem('theme', 'custom');
    this.setState({theme: 'custom'});
  }
  resetTheme = () => {
    if (supportsDarkMode()) {
      this.setState({theme: 'dark'});
    } else {
      this.setState({theme: 'light'});
    }
  }
  goToThemePage = () => {
    navigate('/theme');
  }

  componentDidMount() {
    // On mount check darkmode or apply local
    const theme = JSON.parse(localStorage.getItem('dark'));
    if (supportsDarkMode() && theme == undefined) {
      this.setState({theme: 'dark'});
    } else {
      this.setState({theme: defaultTheme});
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
