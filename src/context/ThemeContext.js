/* eslint no-invalid-this: "off" */

import React from 'react';
const defaultState = {
  dark: false,
  toggleDark: () => {},
};
const ThemeContext = React.createContext(defaultState);
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;
class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }
  toggleDark = () => {
    const dark = !this.state.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    this.setState({dark});
  }
  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem('dark'));
    console.log(lsDark);
    if (lsDark) {
      this.setState({dark: lsDark});
    } else if (supportsDarkMode() && lsDark == undefined) {
      this.setState({dark: true});
    }
  }
  render() {
    const {children} = this.props;
    const {dark} = this.state;
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;

export {ThemeProvider};
