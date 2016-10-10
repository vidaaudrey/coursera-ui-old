// Allow us to import individual component, identically to the root index.js
// No need to edit it now
// Only use when we have components open sourced
export {default as App} from './containers/App';
export {default as Button} from './components/basic/Button';

// Hoc
export {default as copyToClipboard} from './components/hocs/copyToClipboard';

export {default as colors} from './styles/colors';
export {default as theme} from './styles/theme';
