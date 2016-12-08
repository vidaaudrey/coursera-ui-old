// Allow us to import individual component, identically to the root index.js
// No need to edit it now
// Only use when we have components open sourced
import App from './containers/App';
import Button from './components/basic/Button';
import Select from './components/basic/Select';
import Toggle from './components/basic/Toggle';
import Card from './components/basic/Card';
import Paper from './components/basic/Paper';
import SearchInput from './components/basic/SearchInput';
import TextField from './components/basic/TextField';
import TextFit from './components/basic/TextFit';
import CourseCard from './components/rich/CourseCard';
import StaticLinearProgress from './components/basic/StaticLinearProgress';
import StepProgress from './components/basic/StepProgress';
import Avatar from './components/basic/Avatar';
import FixedContainer from './components/extended/FixedContainer';
import SmartScrollWrapper from './components/extended/SmartScrollWrapper';
import SmartScrollWrapperResponsive from './components/extended/SmartScrollWrapperResponsive';
import S12nCardWithLayer from './components/rich/S12nCardWithLayer';
import S12nCard from './components/rich/S12nCard';
import SvgIcon from './components/svg/SvgIcon';
import Chip from './components/extended/chipList/Chip';
import ChipList from './components/extended/chipList/ChipList';
import * as materialIcons from './components/svg/material';
import * as courseraIcons from './components/svg/coursera';
// Hoc
import copyToClipboard from './components/hocs/copyToClipboard';
import withScrollInfo from './components/hocs/withScrollInfo';

// Styles
import colors from './styles/colors';
import gradients from './styles/gradients';
import theme from './styles/theme';

// Prototypes
import LeaderboardApp from './prototypes/LeaderboardApp';
import ProgramCreationApp from './prototypes/ProgramCreationApp';

export {css} from './styles/withStyles';
export {withStyles} from './styles/withStyles';
export {ThemeProvider} from './styles/withStyles';
export {ThemedStyleSheet} from './styles/withStyles';
export {cssWithClass} from './styles/withStyles';


export {
  colors,
  gradients,
  theme,

  copyToClipboard,
  withScrollInfo,

  App,
  Button,
  Select,
  Toggle,
  Card,
  Paper,
  TextField,
  SearchInput,
  TextFit,
  CourseCard,
  FixedContainer,
  SmartScrollWrapper,
  SmartScrollWrapperResponsive,
  S12nCardWithLayer,
  S12nCard,
  SvgIcon,
  Chip,
  ChipList,
  Avatar,
  StaticLinearProgress,
  StepProgress,
  materialIcons,
  courseraIcons,

  LeaderboardApp,
  ProgramCreationApp,
};
