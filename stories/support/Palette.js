import React from 'react';
import {colors, copyToClipboard} from 'src';
const _ = require('underscore');
import PaletteCell from './PaletteCell';
import ColorCell from './ColorCell';
import {generatePalatte} from './storyUtils';
const PaletteCellWithCopy = copyToClipboard(PaletteCell);

const {
  red500, corral500, purple500, pink500, blue500, teal500, turquoise500, green500, yellow500,
  midnight500, dusk500, dawn500
} = colors;

const colorList = {red500, corral500, purple500, pink500, blue500, teal500, turquoise500, green500, yellow500,
  midnight500, dusk500, dawn500};
const colorNames = ['red', 'corral', 'purple', 'pink', 'blue', 'teal', 'turquoise', 'green', 'yellow', 'midnight', 'dusk', 'dawn'];


export default class Palette extends React.Component {

  state = {
    primaryColorName: 'blue' ,
    accentColorName: 'teal',
    selectionIndex: 0, // o: primaryColorName, 1: accentColorName
  }

  handleClick = (colorName) => {
    const {selectionIndex} = this.state;
    if (selectionIndex % 2 === 0) {
      this.setState({primaryColorName: colorName, selectionIndex: selectionIndex + 1});
    } else {
      this.setState({accentColorName: colorName, selectionIndex: selectionIndex + 1});
    }
  }

  handleCopied = (text) => {
    alert(`Copied: ${text}`);
  }

  render() {
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
    } = generatePalatte({colors, primaryColorName, accentColorName});

    const paletteData = [{
      name: 'Dark Primary',
      color: darkPrimaryColor,
    }, {
      name: 'Primary',
      color: primaryColor,
    }, {
      name: 'Light Primary',
      color: lightPrimaryColor,
    }, {
      name: 'Text/Icon',
      color: textIconColor,
    }, {
      name: 'Accent',
      color: accentColor,
    }, {
      name: 'Primary Text',
      color: primaryTextColor,
    }, {
      name: 'Secondary Text',
      color: secondaryTextColor,
    }, {
      name: 'Divider',
      color: dividerColor,
    }];

    return (
      <div className="Palette w-100">
        <div className="color-list-container container-fluid">
          <div className="row m-b-3">
            {_(colorNames).map((name, index) =>
              <ColorCell name={name} key={`ColorCell~${index}`} onClick={this.handleClick} colors={colors}/>
            )}
          </div>
          <div className="row p-t-3">
            {_(paletteData).map((item, index) =>
              <PaletteCellWithCopy
                key={`PaletteCellWithCopy~${index}`}
                color={item.color}
                name={item.name}
                text={item.color}
                onCopy={this.handleCopied}
              />
            )}
          </div>
        </div>

      </div>
    );
  }
}
