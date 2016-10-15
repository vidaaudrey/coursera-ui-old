// Allow us to import individual component, identically to the root index.js
// No need to edit it now
// Only use when we have components open sourced
import App from './containers/App';
import Button from './components/basic/Button';
import StaticLinearProgress from './components/basic/StaticLinearProgress';
import Avatar from './components/basic/Avatar';

// Hoc
export {default as copyToClipboard} from './components/hocs/copyToClipboard';

export {default as colors} from './styles/colors';
export {default as gradients} from './styles/gradients';
export {default as theme} from './styles/theme';

export {css as css} from './styles/withStyles';
export {withStyles as withStyles} from './styles/withStyles';
export {ThemeProvider as ThemeProvider} from './styles/withStyles';
export {ThemedStyleSheet as ThemedStyleSheet} from './styles/withStyles';
export {cssWithClass as cssWithClass} from './styles/withStyles';


// Prototype
export {default as LeaderboardApp} from './prototypes/LeaderboardApp';


export {
  App,
  Button,
  Avatar,
  StaticLinearProgress,
};
