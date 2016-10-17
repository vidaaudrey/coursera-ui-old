const React = require('react');
import theme from '../../src/styles/theme';
const _ = require('underscore');
// import * as icons from '.'
import {materialIcons, courseraIcons} from 'src';
import IconList from './IconList';

const styles = {
  colorPickerWrapper: {
  },
  colorPicker: {
    width: '100%',
    minWidth: 120,
    height: 32,
    opacity: 0,
    border: 'none',
    display: 'block',
  },
  input: {
    height: 32,
    border: '2px solid #f1f1f1',
  }
}
class IconLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.getState(nextProps)});
  }

  handleCopied = (copyText) => {
    this.setState({copyText});
    setTimeout(() => this.setState({copyText: null}), 3000);
  }

  handleColorChange = () => {
    const color = this.colorRef.value;
    this.setState({color});
  }

  handleSizeChange = () => {
    const size = parseInt(this.sizeRef.value, 10);
    this.setState({size});
  }

  getState = (props) => {
    return {
      color: props.color || theme.color.primary,
      size: props.size || 64,
      copyText: false,
    }
  }

  render () {
    const {color, size, copyText} = this.state;
    return (
      <div className="container">
        <form onSubmit={(e) => (e.preventDefault())} className="vertical-box border-a m-b-3 p-a-1 bg-gray">
          <div className="p-b-1">
            <h3>Prop Settings</h3>
            <i className="font-sm m-r-1">Click icon to copy</i>
            {copyText &&
              <span className="color-info">Copied to clipboard:
                <code className="d-inline-block p-l-1 color-danger">{copyText}</code>
              </span>
            }
          </div>
          <div className="horizontal-box wrap">
            <div className="vertical-box m-r-1">
              <label htmlFor="color" className="label-text">Color</label>
              <div style={{...styles.colorPickerWrapper, backgroundColor: color}}>
                <input
                  type="color"
                  ref={(r) => (this.colorRef = r)}
                  value={color}
                  onChange={this.handleColorChange}
                  style={styles.colorPicker}
                />
              </div>
            </div>

            <div className="vertical-box m-b-1">
              <label htmlFor="size" className="label-text">Size</label>
              <input
                type="number"
                ref={(r) => (this.sizeRef = r)}
                value={size}
                onChange={this.handleSizeChange}
                style={styles.input}
              />
            </div>
          </div>

        </form>
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
