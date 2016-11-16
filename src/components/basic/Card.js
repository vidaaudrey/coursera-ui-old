/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes } from 'react';
import {
  css, StyleSheet, font, color, spacing, transition
} from 'src/styles/theme';
import Paper from 'src/components/basic/Paper';
const CONFIG = {
  cardPadding: spacing.md,
  subtitleColor: color.secondaryText,
  subtitleVerticalPadding: '0',
  headerVerticalPadding: spacing.sm,
  footerVerticalPadding: spacing.sm,
  darkThemeBackground: color.black,
};

/**
 * A generic Card that accepts children, imgSrc and icon.
 * Sample Usage:
 * <Card type="primary" size="sm" label={'sm'}/>
 */
export const Card = ({
  children,
  htmlAttributes = {},
  tagAttrributes = {},
  isThemeDark,
  style,
  tag: Tag,
  isCardBlock,
}) => {
  return (
    <Tag
      {...htmlAttributes}
      {...tagAttrributes}
      {...css(
        styles.Card,
        Tag !== Paper && styles.cardBorder,
        isCardBlock && styles.CardBlock,
        isCardBlock && styles.clearFix,
        isThemeDark && styles.cardDarkTheme,
      )}
      {...style}
      isThemeDark={isThemeDark}
    >
      {children}
    </Tag>
  );
};

// Explicity declare the default props for documentation purpose,
Card.defaultProps = {
  htmlAttributes: {},
  style: {},
  tag: Paper,
};

Card.propTypes = {
  // Can use to letters inside the avatar.
  children: PropTypes.node,

  htmlAttributes: PropTypes.object,
  // The attributes we want to spread for the specific tag
  tagAttrributes: PropTypes.object,
  // Whether button has dark bg parent element.
  isThemeDark: PropTypes.bool,
  // Override the inline-styles of the root element.
  style: PropTypes.object,

  // The root element to render, default to Paper, but also can user other elements.
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Apply the card padding if the root element is block.
  isCardBlock: PropTypes.bool,
};

// Dynamic styles
function getStyles({size}) {
  return {
    Card: {
    },
  };
}

export const CardBlock = ({ isThemeDark, children }) => {
  return (
    <div
      {...css(styles.CardBlock, isThemeDark && styles.darkThemePrimaryText)}
    >
      {children}
    </div>
  );
};

CardBlock.propTypes = {
  children: PropTypes.node,
  isThemeDark: PropTypes.bool,
};

export const CardTitle = ({ isThemeDark, title, htmlAttributes = {}, children }) => {
  if (title) {
    return (
      <h3
        {...htmlAttributes}
        {...css(styles.CardTitle, styles.cardTitleHeading, isThemeDark && styles.darkThemePrimaryText)}
      >
        {title}
      </h3>
    );
  }
  return (
    <div
      {...htmlAttributes}
      {...css(styles.CardTitle, styles.clearFix, isThemeDark && styles.darkThemePrimaryText)}
    >
      {children}
    </div>
  );
};

CardTitle.propTypes = {
  htmlAttributes: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string,
  isThemeDark: PropTypes.bool,
};

CardTitle.defaultProps = {
  htmlAttributes: {},
};

export const CardSubtitle = ({ isThemeDark, subtitle, htmlAttributes, children }) => {
  if (subtitle) {
    return (
      <h5
        {...htmlAttributes}
        {...css(styles.CardSubtitle, styles.cardSubtitleHeading, isThemeDark && styles.darkThemePrimaryText)}
      >
        {subtitle}
      </h5>
    );
  }
  return (
    <div
      {...css(styles.CardSubtitle, styles.clearfix, isThemeDark && styles.darkThemePrimaryText)}
    >
      {children}
    </div>
  );
};

CardSubtitle.propTypes = {
  htmlAttributes: PropTypes.object,
  children: PropTypes.node,
  subtitle: PropTypes.string,
  isThemeDark: PropTypes.bool,
};

CardSubtitle.defaultProps = {
  htmlAttributes: {},
};

export const CardHeader = ({ isThemeDark, text, htmlAttributes, children }) => {
  if (text) {
    return (
      <h4
        {...htmlAttributes}
        {...css(styles.CardHeader, styles.cardHeaderText, isThemeDark && styles.darkThemePrimaryText)}
      >
        {text}
      </h4>
    );
  }
  return (
    <div
      {...css(styles.CardHeader, styles.clearFix, isThemeDark && styles.darkThemePrimaryText)}
    >
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  htmlAttributes: PropTypes.object,
  children: PropTypes.node,
  text: PropTypes.string,
  isThemeDark: PropTypes.bool,
};

CardHeader.defaultProps = {
  htmlAttributes: {},
};

export const CardFooter = ({ isThemeDark, text, htmlAttributes, children }) => {
  if (text) {
    return (
      <span
        {...htmlAttributes}
        {...css(styles.CardFooter, styles.cardFooterText, isThemeDark && styles.darkThemePrimaryText)}
      >
        {text}
      </span>
    );
  }
  return (
    <div
      {...css(styles.CardFooter, styles.clearFix)}
    >
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  htmlAttributes: PropTypes.object,
  children: PropTypes.node,
  text: PropTypes.string,
  isThemeDark: PropTypes.bool,
};

CardFooter.defaultProps = {
  htmlAttributes: {},
};

export const CardImage = ({ imgSrc, htmlAttributes, children, maxImgHeight}) => {
  if (imgSrc && !maxImgHeight) {
    return (
      <img
        src={imgSrc}
        role="presentation"
        {...htmlAttributes}
        {...css(styles.CardImage, styles.cardImg)}
      />
    );
  }
  if (imgSrc && maxImgHeight) {
    return (
      <div
        className="CardImage horizontal-box align-items-absolute-center"
        style={{maxHeight: maxImgHeight, overflow: 'hidden'}}
      >
        <img
          src={imgSrc}
          role="presentation"
          {...htmlAttributes}
          {...css(styles.CardImage, styles.cardImg)}
        />
      </div>
    );
  }

  return (
    <div
      {...css(styles.CardImage)}
    >
      {children}
    </div>
  );
};

CardImage.propTypes = {
  htmlAttributes: PropTypes.object,
  children: PropTypes.node,
  imgSrc: PropTypes.string,
  maxImgHeight: PropTypes.number,
};

CardImage.defaultProps = {
  htmlAttributes: {},
};

const styles = StyleSheet.create({
  Card: {
    width: '100%',
    transition: transition.easeOut(),
  },
  cardDarkTheme: {
    color: color.white,
    backgroundColor: CONFIG.darkThemeBackground,
  },
  darkThemePrimaryText: {
    color: color.white,
  },
  darkThemeSecondaryText: {
    color: color.white50,
  },
  cardBorder: {
    border: `1px solid ${color.divider}`,
  },
  cardPadding: {
    padding: CONFIG.cardPadding,
  },
  CardBlock: {
    padding: CONFIG.cardPadding,
  },
  clearFix: {
    ':after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
  },
  CardTitle: {
    marginTop: CONFIG.titleMarginTop,
  },
  cardTitleHeading: {
    paddingTop: CONFIG.cardPadding,
    paddingLeft: CONFIG.cardPadding,
    paddingRight: CONFIG.cardPadding,
  },
  CardSubtitle: {
    color: CONFIG.subtitleColor,
  },
  cardSubtitleHeading: {
    padding: `${CONFIG.subtitleVerticalPadding} ${CONFIG.cardPadding}`,
    marginBottom: 0,
  },
  CardHeader: {
    backgroundColor: '#f5f5f5',
    borderBottom: `1px solid ${color.divider}`,
  },
  cardHeaderText: {
    padding: `${CONFIG.headerVerticalPadding} ${CONFIG.cardPadding}`,
    marginBottom: 0,
  },
  CardFooter: {
    backgroundColor: '#f5f5f5',
    borderTop: `1px solid ${color.divider}`,
  },
  cardFooterText: {
    display: 'block',
    color: color.secondaryText,
    fontSize: font.sm,
    padding: `${CONFIG.footerVerticalPadding} ${CONFIG.cardPadding}`,
    marginBottom: 0,
  },
  CardImage: {
  },
  cardImg: {
    width: '100%',
    height: 'auto',
  },
  cardImageOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '1.25rem',
  },
});
