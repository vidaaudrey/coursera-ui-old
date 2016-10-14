import { configure } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import '../src/styles/css/reboot.css';
import '../src/styles/css/bootstrap-grid.css';
import '../src/styles/css/bootstrap-card.css';
import '../src/styles/css/utilities.css';
import '../src/styles/css/box.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
