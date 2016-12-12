/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, { PropTypes } from 'react';
import {
  css, cssWithClass, StyleSheet, color, spacing, transition, font
} from 'src/styles/theme';

import Avatar from 'src/components/basic/Avatar';

const CONFIG = {
  imageParms: {
    fit: 'crop',
    mask: 'ellipse',
  },
  imageSize: 80,
};

const styles = StyleSheet.create({
  InstructorInfo: {
    transition: transition.easeOut(),
  },
  avatarContainer: {
    padding: spacing.md,
  },
  department: {
    fontSize: font.sm,
    color: color.secondaryText,
  },
});

const InstructorInfo = ({ instructor }) => {
  if (!instructor || !instructor.fullName) {
    return null;
  }
  const { fullName, title, department, photo } = instructor;

  return (
    <div {...cssWithClass('row', styles.InstructorInfo)}>
      {photo &&
        <div
          {...cssWithClass(
            'col-xs-12 col-sm-3 col-md-2 horizontal-box align-items-absolute-center',
            styles.avatarContainer
          )}
        >
          <Avatar
            size={CONFIG.imageSize}
            style={{backgroundColor: color.white}}
            imgSrc={photo}
          />
        </div>
      }
      <div className="col-xs-12 col-sm-9 col-md-10 horizontal-box align-items-vertical-center">
        <div className="vertical-box">
          <p>
            <span>{fullName}</span>
            {title && <span>, {title}</span>}
          </p>
          {department &&
            <p {...css(styles.department)}>{department}</p>
          }
        </div>
      </div>
    </div>
  );
};

InstructorInfo.propTypes = {
  instructor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string,
    title: PropTypes.string,
    department: PropTypes.string,
    photo: PropTypes.string,
  }),
};

module.exports = InstructorInfo;
