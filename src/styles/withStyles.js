import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, ThemeProvider } from 'react-with-styles';

import theme from './theme';

ThemedStyleSheet.registerDefaultTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

// Order matters, cssObject can overwrite generic css class
function cssWithClass(className, cssObject) {
  const result = css(cssObject);
  result.className = `${className} ${result.className}`;
  return result;
}

export { css, withStyles, ThemeProvider, ThemedStyleSheet, cssWithClass };
