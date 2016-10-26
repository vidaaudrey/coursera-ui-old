import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import { Avatar, Button, FixedContainer } from 'src';
import withApiMockData from 'src/components/hocs/withApiMockData';
import { courseraLogo } from 'src/assets/pngAssets';
import {HEADER_HEIGHT} from 'src/constants/ProgramCreationAppConstants';

const Header = ({
  style,
  isLoggedIn,
  ...props,
}) => {
  return (
    <FixedContainer height={HEADER_HEIGHT} fixedPosition="top" backgroundColor="white">
      <header {...cssWithClass('container-fluid', styles.Header)}>
        <div {...cssWithClass('container horizontal-box align-items-spacebetween wrap', styles.headerInner)}>
          <a href="/"> <img src={courseraLogo} alt="Coursera Logo" alt="Coursera" /></a>
          <div className="horizontal-box align-items-vertical-center">
            {isLoggedIn &&
              <Avatar size={44} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
            }
          </div>
          <div className="horizontal-box align-items-vertical-center">
            <Button type="noStyle" size="sm" label="Log In" style={{marginRight: '1rem'}} />
            <Button type="primary" size="sm" label="Sign Up" />
          </div>
        </div>
      </header>
    </FixedContainer>
  );
};

const CoursewithApiMockData = withApiMockData({dataType: 'COURSE'})(Header);

function getStyles({coursePhotoSize}) {
  return {
    Header: {
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  };
}


module.exports = CoursewithApiMockData;

const styles = StyleSheet.create({
  Header: {
    height: 48,
    minWidth: spacing.minWidth,
    backgroundColor: color.white,
    boxShadow: `0 2px 4px 0 ${color.shadow}`,
  },
  headerInner: {
    padding: '8px 0',
  },
});
