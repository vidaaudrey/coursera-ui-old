// Allow us to import individual component, identically to the root index.js
// No need to edit it now
// Only use when we have components open sourced
import App from './containers/App';
import Button from './components/basic/Button';
import StaticLinearProgress from './components/basic/StaticLinearProgress';
import Avatar from './components/basic/Avatar';
import SvgIcon from './components/svg/SvgIcon';
import * as materialIcons from './components/svg/material';
import * as courseraIcons from './components/svg/coursera';
// Hoc
import copyToClipboard from './components/hocs/copyToClipboard';

// Styles
import colors from './styles/colors';
import gradients from './styles/gradients';
import theme from './styles/theme';
import transition from './styles/transition';

export {css as css} from './styles/withStyles';
export {withStyles as withStyles} from './styles/withStyles';
export {ThemeProvider as ThemeProvider} from './styles/withStyles';
export {ThemedStyleSheet as ThemedStyleSheet} from './styles/withStyles';
export {cssWithClass as cssWithClass} from './styles/withStyles';


// Prototype
import LeaderboardApp from './prototypes/LeaderboardApp';

export {
  colors,
  gradients,
  theme,
  // transition,

  copyToClipboard,

  App,
  Button,
  SvgIcon,
  Avatar,
  StaticLinearProgress,

  materialIcons,
  courseraIcons,

  LeaderboardApp,
};
