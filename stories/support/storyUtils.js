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

function generatePalatte({colors, primaryColorName, accentColorName}) {
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

export {
  isDarkColor,
  isPaletteColorDark,
  generatePalatte
}
