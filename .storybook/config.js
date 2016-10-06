import { configure } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
// import '../src/vendor/reboot.css';

import '../coursera/css/coursera.css';
import '../coursera/css/kss.css';
import '../coursera/css/style.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
