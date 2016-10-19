// Allow us to import individual component, identically to the root index.js
// No need to edit it now
// Only use when we have components open sourced
import App from './containers/App';
import Button from './components/basic/Button';
import StaticLinearProgress from './components/basic/StaticLinearProgress';
import Avatar from './components/basic/Avatar';
import FixedContainer from './components/extended/FixedContainer';
import S12nCard from './components/rich/S12nCard';
import SvgIcon from './components/svg/SvgIcon';
import SelectListItem from './components/extended/selectList/SelectListItem';
import SelectList from './components/extended/selectList/SelectList';
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


// Prototypes
import LeaderboardApp from './prototypes/LeaderboardApp';
import ProgramCreationApp from './prototypes/ProgramCreationApp';

export {
  colors,
  gradients,
  theme,

  copyToClipboard,

  App,
  Button,
  FixedContainer,
  S12nCard,
  SvgIcon,
  SelectListItem,
  SelectList,
  Avatar,
  StaticLinearProgress,

  materialIcons,
  courseraIcons,

  LeaderboardApp,
  ProgramCreationApp,
};
