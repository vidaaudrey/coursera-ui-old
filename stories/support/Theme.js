/* eslint-disable no-use-before-define, max-len */
import React, {PropTypes} from 'react';
import {css, StyleSheet, cssWithClass, font, color, spacing, transition, containerMaxWidth} from 'src/styles/theme';
import _ from 'underscore';
import {linkTo } from '@kadira/storybook';
import {Button} from 'src';
import ColorRow from './ColorRow';
import ThemeCard from './ThemeCard';

const exisitingUIStories = ['Grid', 'Color', 'Palette', 'Typography', 'BoxLayout'];
const basicSpacing = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem'
};
const colors = {
  primary: {textColor: color.primaryText, name: 'primary', colorName: 'blue500', colorCode: color.primary},
  darkPrimary: {textColor: color.primaryText, name: 'darkPrimary', colorName: 'blue700', colorCode: color.darkPrimary},
  lightPrimary: {textColor: color.primaryText, name: 'lightPrimary', colorName: 'blue100', colorCode: color.lightPrimary},
  accent: {textColor: color.primaryText, name: 'accent', colorName: 'teal500', colorCode: color.accent},
  primaryText: {textColor: color.primaryText, name: 'primaryText', colorName: 'midnight600', colorCode: color.primaryText},
  secondaryText: {textColor: color.primaryText, name: 'secondaryText', colorName: 'midnight200', colorCode: color.secondaryText},

  divider: {textColor: color.primaryText, name: 'divider', colorName: 'dusk200', colorCode: color.divider},
  icon: {textColor: color.primaryText, name: 'icon', colorName: 'midnight600', colorCode: color.icon},
  shadow: {textColor: color.primaryText, name: 'shadow', colorName: 'dawn500', colorCode: color.shadow},
  textIcon: {textColor: color.primaryText, name: 'textIcon', colorName: 'dawn200', colorCode: color.textIcon},
  disabled: {textColor: color.primaryText, name: 'disabled', colorName: 'dawn400', colorCode: color.disabled},
  disabledText: {textColor: color.primaryText, name: 'disabledText', colorName: 'dusk200', colorCode: color.disabledText},

  warning: {textColor: color.primaryText, name: 'warning', colorName: 'yellow500', colorCode: color.warning},
  danger: {textColor: color.primaryText, name: 'danger', colorName: 'red300', colorCode: color.danger},
  success: {textColor: color.primaryText, name: 'success', colorName: 'turquoise500', colorCode: color.success},
  info: {textColor: color.primaryText, name: 'info', colorName: 'blue500', colorCode: color.info},

  bgGray: {textColor: color.primaryText, name: 'bgGray', colorName: 'dusk50', colorCode: color.bgGray},
  lightGray: {textColor: color.primaryText, name: 'lightGray', colorName: 'dawn300', colorCode: color.lightGray},
  gray: {textColor: color.primaryText, name: 'gray', colorName: 'dusk100', colorCode: color.gray},
  darkGray: {textColor: color.primaryText, name: 'darkGray', colorName: 'dusk400', colorCode: color.darkGray},

  white: {textColor: color.primaryText, name: 'dawn200', colorName: 'dawn200', colorCode: color.white},
  white50: {textColor: color.primaryText, name: 'white50', colorName: '', colorCode: color.white50},
  black: {textColor: color.primaryText, name: 'black', colorName: 'midnight900', colorCode: color.black},

  primaryTextThemeDark: {textColor: color.primaryText, name: 'primaryTextThemeDark', colorName: 'dawn200', colorCode: color.primaryTextThemeDark},
  secondaryTextThemeDark: {textColor: color.primaryText, name: 'secondaryTextThemeDark', colorName: 'dawn400', colorCode: color.secondaryTextThemeDark},
  disabledThemeDark: {textColor: color.primaryText, name: 'disabledThemeDark', colorName: 'dawn400', colorCode: color.disabledThemeDark},
  disabledTextThemeDark: {textColor: color.primaryText, name: 'disabledTextThemeDark', colorName: 'dusk200', colorCode: color.disabledTextThemeDark},
  iconThemeDark: {textColor: color.primaryText, name: 'iconThemeDark', colorName: 'dusk100', colorCode: color.iconThemeDark},
  bgGrayThemeDark: {textColor: color.primaryText, name: 'bgGrayThemeDark', colorName: 'midnight600', colorCode: color.bgGrayThemeDark},
  dividerThemeDark: {textColor: color.primaryText, name: 'dividerThemeDark', colorName: 'midnight500', colorCode: color.dividerThemeDark},
};
const Theme = ({isThemeDark }) => {
  return (
    <div {...cssWithClass('container', styles.Theme)}>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h1>Theme</h1>
          <p className="text-muted font-italic">
            Visual presentation of our theme settings.
            <span>name</span>
          </p>
          <div {...css(styles.linkContainer)}>
            {_(exisitingUIStories).map(item =>
              <a href="#" key={`exisitingUIStories~${item}`} className="d-inline-block p-r-1 font-italic" onClick={linkTo('UI.all', item)}>{item}</a>
            )}
          </div>
        </div>
      </div>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Color</h3>
          <p className="text-muted font-italic">
            <ul>
              <li>basic colors (primary, accent, text, icon, divider,shadow)</li>
              <li>auxiliary colors (disabled, warning, danger, success, info, black, white, gray...)</li>
              <li>darkTheme color variations (primaryTextThemeDark, disabledThemeDark...)</li>
            </ul>
          </p>
        </div>
        <div {...cssWithClass('col-xs-12 col-md-6 m-b-2', styles.colorContainer)}>
          {_(colors).map(({colorName, textColor, name, colorCode}, key) =>
            <div key={`spacing~${key}`}{...css(styles.colorRowContainer)}>
              <ColorRow colorName={colorName} name={name} textColor={textColor} colorCode={colorCode} isThemeFile />
            </div>
          )}
        </div>
        <div {...cssWithClass('col-xs-12 col-md-6 m-b-2', styles.themeCardContainer)}>
          <div className="m-b-2">
            <ThemeCard />
          </div>
          <ThemeCard isThemeDark />
        </div>
      </div>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Font Size</h3>
          <p className="text-muted font-italic"> All font size is based on rem. 1rem equals 16px. <br />
            xs (0.8rem, ~12px), sm (0.9rem, ~14px), md(1rem, 16px), lg(1.5rem, 24px), xlg(2.5rem, 40px)</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2', styles.blockContainer)}>
          {_(font).map((value, key) =>
            <span key={`font~${key}`} {...cssWithClass('p-a-0 m-a-1 p-a-1 d-inline-block', styles[`${key}Font`], styles.fontP)}>
              font {key}: <span className="display">{value}</span>
            </span>
          )}
        </div>
      </div>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Spacing</h3>
          <p className="text-muted font-italic"> sm: 0.5rem md: 1rem, lg: 1.5rem </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 vertical-box align-items-absolute-center', styles.blockContainer)}>
          {_(basicSpacing).map((value, key) =>
            <div key={`spacing~${key}`}{...css(styles.block, styles.bgLightPrimary)}>
              <span {...cssWithClass('d-inline-block', styles.span, styles[`${key}Spacing`])}>
                margin & padding {key}: {value}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

module.exports = Theme;


const styles = StyleSheet.create({
  Theme: {
    minHeight: 300,
    height: '100vh',
  },
  colorRowContainer: {
    minWidth: 352,
  },
  smSpacing: {
    margin: spacing.sm,
    padding: spacing.sm,
  },
  mdSpacing: {
    margin: spacing.md,
    padding: spacing.md,
  },
  lgSpacing: {
    margin: spacing.lg,
    padding: spacing.lg,
  },
  xsFont: {
    fontSize: font.xs,
  },
  smFont: {
    fontSize: font.sm,
  },
  mdFont: {
    fontSize: font.md,
  },
  lgFont: {
    fontSize: font.lg,
  },
  xlgFont: {
    fontSize: font.xlg,
  },

  fontP: {

  },
  blockContainer: {
    background: color.bgGray,
    borderRadius: 2,
    minHeight: 48,
    color: color.secondaryText,
    border: `1px solid ${color.divider}`,
  },
  block: {
    minHeight: 32,
    margin: 8,
    padding: '4px 8px',
    lineHeight: '32px',
  },
  bgLightPrimary: {
    background: color.lightPrimary,
  },
  span: {
    background: color.white,
  },
});
