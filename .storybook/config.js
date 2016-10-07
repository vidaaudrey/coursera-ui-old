import { configure } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import '../src/vendor/reboot.css';


function loadStories() {
  require('../stories');
}

configure(loadStories, module);
