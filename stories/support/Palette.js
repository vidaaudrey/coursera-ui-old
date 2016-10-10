import React from 'react';
import {colors} from 'src';
const _ = require('underscore');

const {
  red500, corral500, purple500, pink500, blue500, teal500, turquoise500, green500, yellow500,
  midnight500, dusk500, dawn500
} = colors;

const colorList = {red500, corral500, purple500, pink500, blue500, teal500, turquoise500, green500, yellow500,
  midnight500, dusk500, dawn500};
const colorNames = ['red', 'corral', 'purple', 'pink', 'blue', 'teal', 'turquoise', 'green', 'yellow', 'midnight', 'dusk', 'dawn'];

const styles = {
  main: {
    width: '100%',
  },
  ColorCell: {
    width: 160,
    height: 160,
    borderRadius: '50%',
  },
  PaletteCell: {
    width: 500,
    height: 200,
  },
  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

function _isHexaColor(str) {
  return /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(str);
}

function isDarkColor(color) {
  if (!color || !_isHexaColor(color)) {
    return false; // If giving color is not valid, default to light theme
  }
  const c = color.substring(1); // strip #
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma < 160;
}

// accept supported color names or hex code
function isPaletteColorDark(colorName) {
  switch(colorName) {
    case 'red':
    case 'corral':
    case 'purple':
    case 'pink':
    case 'blue':
    case 'teal':
    case 'midnight':
    case 'dusk':
      return true;
      break;

    case 'turquoise':
    case 'green':
    case 'yellow':
    case 'dawn':
      return false;
      break;

    default:
      return isDarkColor(colorName);
  }
}

function generatePalatte({primaryColorName, accentColorName}) {
  const isDark = isPaletteColorDark(primaryColorName);
  return {
    primaryColor: colors[`${primaryColorName}500`] ,
    darkPrimaryColor: colors[`${primaryColorName}700`] ,
    lightPrimaryColor: colors[`${primaryColorName}100`] ,
    accentColor: colors[`${accentColorName}400`] ,
    textIconColor: isDark ? colors.dawn200 : colors.midnight900,
    primaryTextColor: isDark ? colors.midnight900 : colors.dawn300,
    secondaryTextColor: isDark ? colors.midnight600 : colors.dawn400,
    dividerColor: colors.dusk200,
  }
}

function ColorCell({name, onClick}) {
  const colorName = `${name}500`;
  const color = colors[colorName];
  return (
    <div className="ColorCell col-xs col-lg-2">
      <div
        className="vertical-box align-items-absolute-center h-100 m-a-1"
      >
        <div
          className="vertical-box align-items-absolute-center"
          onClick={() => (onClick(name))}
          style={{...styles.ColorCell, backgroundColor: color}}
        >
          <span className="text-uppercase color-white">{color} </span>
          <span className="color-white">{name}</span>
        </div>
      </div>
    </div>
  );
}


function PaletteCell({color, name, onClick}) {
  const isColorDark = isPaletteColorDark(color);
  const textColorClass = isColorDark ? 'color-white' : 'color-black';

  return (
    <div className="PaletteCell col-xs-6 col-sm-3 col-xl" style={{...styles.PaletteCell, backgroundColor: color}}>
      <div className="vertical-box h-100 p-a-1" onClick={() => (onClick(name))}>
        <span className={`flex-1 ${textColorClass} text-uppercase`}>{color}</span>
        <span className={`${textColorClass} text-uppercase`}>{name}</span>
      </div>
    </div>
  );
}

export default class Palette extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  state = {
    primaryColorName: 'blue' ,
    accentColorName: 'teal',
    selectionIndex: 0, // o: primaryColorName, 1: accentColorName
  }

  handleClick = (colorName) => {
    const {selectionIndex} = this.state;
    console.warn('---', colorName);
    if (selectionIndex % 2 === 0) {
      this.setState({primaryColorName: colorName, selectionIndex: selectionIndex + 1});
    } else {
      this.setState({accentColorName: colorName, selectionIndex: selectionIndex + 1});
    }
  }

  render() {
    console.warn('---', this.state);
    const {primaryColorName, accentColorName} = this.state;
    const {
      primaryColor,
      darkPrimaryColor,
      lightPrimaryColor,
      accentColor,
      textIconColor,
      primaryTextColor,
      secondaryTextColor,
      dividerColor,
    } = generatePalatte({primaryColorName, accentColorName});
    return (
      <div className="Palette" style={styles.main}>
        <div className="color-list-container container-fluid">
          <div className="row m-b-3">
            {_(colorNames).map((name, key) =>
              <ColorCell name={name} key={key} onClick={this.handleClick} />
            )}
          </div>
          <div className="row">
            <PaletteCell color={darkPrimaryColor} name={'Dark Primary'} onClick={this.handleClick} />
            <PaletteCell color={primaryColor} name={'Primary'} onClick={this.handleClick} />
            <PaletteCell color={lightPrimaryColor} name={'Light Primary'} onClick={this.handleClick} />
            <PaletteCell color={textIconColor} name={'Text/Icon'} onClick={this.handleClick} />
            <PaletteCell color={accentColor} name={'Accent'} onClick={this.handleClick} />
            <PaletteCell color={primaryTextColor} name={'Primary Text'} onClick={this.handleClick} />
            <PaletteCell color={secondaryTextColor} name={'Secondary Text'} onClick={this.handleClick} />
            <PaletteCell color={dividerColor} name={'Divider'} onClick={this.handleClick} />
          </div>
        </div>

      </div>
    );
  }
}
