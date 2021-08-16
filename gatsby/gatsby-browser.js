import React from 'react';
import {TempoStringsProvider} from './src/context/TempoStringsContext';
import {ThemeProvider} from './src/context/ThemeContext';

export const wrapRootElement = ({element}) => (
  <TempoStringsProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </TempoStringsProvider>
);
