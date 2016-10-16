const React = require('react');
import theme from '../../src/styles/theme';
const _ = require('underscore');
// import * as icons from '.'
import {materialIcons, courseraIcons} from 'src';
import IconList from './IconList';


class IconLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.getState(nextProps)});
  }

  handleCopied = (text) => {
    alert(`Copied: ${text}`);
  }

  getState = (props) => {
    return {
      color: props.color || theme.color.primary,
      size: props.size || 64,
    }
  }

  render () {
    const {color, size} = this.state;
    return (
      <div className="container">
        <IconList
          iconList={courseraIcons}
          title={'Coursera Icons'}
          handleCopied={this.handleCopied}
          color={color}
          size={size}
        />
        <IconList
          iconList={materialIcons}
          title={'Material Icons'}
          handleCopied={this.handleCopied}
          color={color}
          size={size}
        />
      </div>
    );
  }
}

export default IconLibrary;
