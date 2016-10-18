const React = require('react');
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {SvgCheckOutline} from '../../svg/coursera';

const DEFAULT_HEIGHT = 36;
const HEIGHT_TO_ICON_RATIO = 0.6
const SelectListItem = ({
  style, styles, htmlAttributes,
  label,  theme, isDarkTheme, isSelected, onClick, fontSize = 'sm',
  height = DEFAULT_HEIGHT,
}) => {
  const dynamicStyles = getStyles({isDarkTheme, theme, isSelected, height, fontSize});
  const mergedStyles = {...dynamicStyles.SelectListItem, ...style};
  console.warn('--theme-', theme);
  return (
    <button
      {...css(
        styles.SelectListItem,
        styles.activeButtonStyle,
        styles.hoverButtonStyle,
        isDarkTheme ? styles.darkThemeButton : styles.lightThemeButton,
        isSelected ? styles.darkThemeButtonSelected : styles.lightThemeButtonSelected,
      )}
      style={mergedStyles}
      onClick={onClick}
      {...htmlAttributes}
    >
      <span className="horizontal-box align-items-vertical-center">
        <span {...css(styles.text)}>{label}</span>
        <span
          {...cssWithClass(
            'horizontal-box align-items-absolute-center',
            styles.icon,
            isDarkTheme ? styles.darkThemeIcon : styles.lightThemeIcon,
            isSelected ? styles.darkThemeIconSelected : styles.lightThemeIconSelected,
          )}
        >
          <SvgCheckOutline size={height * HEIGHT_TO_ICON_RATIO} color={"#37bc9b"} />
        </span>
      </span>
    </button>
  );
}


SelectListItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool,
  isDarkTheme: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
};


function getStyles({isDarkTheme, isSelected, height, theme, fontSize}) {
  return {
    SelectListItem: {
      height,
      borderRadius: height / 2,
      fontSize: theme.font[fontSize],
    }
  };
};

export default withStyles(({color, transition, spacing}) => ({
  SelectListItem: {
    transition: transition.easeOut(),
    boxShadow: `1px 1px 1px ${color.shadow}`,
    border: 'none',
    overflow: 'hidden',
    padding: '0 1rem',
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
  activeButtonStyle: {
    ':active' : {
      outline: 'none',
    },
    ':focus' : {
      outline: 'none',
    }
  },
  hoverButtonStyle: {
    ':hover': {
      color: color.primary,
    }
  },
  text: {
    paddingRight: spacing.xs,
  },
  icon: {
  },
  lightThemeButton: {
    backgroundColor: color.white,
    color: color.secondaryText,
  },
  darkThemeButton: {
    background: 'transparent',
    // border: '1px solid ${color.lightGray}',
  },
  lightThemeIcon: {
    // border: '1px solid ${color.divider}',
    backgroundColor: color.white,
  },
  darkThemeIcon: {

  },
  lightThemeButtonSelected: {
    // border: '1px solid ${color.divider}',
    color: color.white,
    backgroundColor: color.darkPrimary,
  },
  darkThemeButtonSelected: {
    backgroundColor: `rgba(255,255,255,0.25)`,
  },
  lightThemeIconSelected: {
    border: '1px solid ${color.divider}',
    backgroundColor: color.darkPrimary,
  },
  darkThemeIconSelected: {
    backgroundColor: `rgba(255,255,255,0.25)`,
  },
  hover: {
      ':hover': {
          backgroundColor: 'red'
      }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
}))(SelectListItem);
