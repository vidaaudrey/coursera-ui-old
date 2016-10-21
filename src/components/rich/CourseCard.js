import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import { SvgCheckOutline } from 'src/components/svg/coursera';
import withApiData from 'src/components/hocs/withApiData';

const CourseCard = ({
  styles, theme,
  course, isSelected, id, onToggleCourseSelect,
}) => {
  const {name, photoUrl, partnerIds, partnerName = 'John Hopken '} = course;
  const iconColor = isSelected ? theme.color.primary : theme.color.icon;

  return (

    <div {...cssWithClass('vertical-box card m-b-1', styles.CourseCard)}>
      <img
        src={photoUrl}
        alt="CourseraAlt"
        {...css(styles.courseImage)}
      />
      <div className="flex-1 vertical-box p-a-1 p-b-0">
        <div className="content flex-1">
          <h3 {...css(styles.title)}>{name}</h3>
          <span {...css(styles.subtitle)}>{partnerName}</span>
        </div>
        <div
          {...cssWithClass('horizontal-box align-items-vertical-center align-items-right', styles.cardSelect)}
        >
          {!isSelected &&
            <span {...css(styles.selectText)}> Not Selected </span>
          }
          <button
            {...css(styles.iconButton, styles.iconButtonFocus)}
            onClick={() => (onToggleCourseSelect(id, !isSelected))}
          >
            <SvgCheckOutline
              size={24}
              color={iconColor}
              hoverColor={iconColor}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  id: React.PropTypes.string.isRequired,
  onToggleCourseSelect: React.PropTypes.func.isRequired,
};

CourseCard.defaultProps = {
  id: 'c1', // Remove later
};

const CourseCardWithApiData = withApiData({
  dataType: 'COURSE',
})(CourseCard);


export default withStyles(({color, font, spacing}) => ({
  CourseCard: {
    minHeight: 368,
    maxWidth: 480,
  },
  cardSelect: {
    color: color.secondaryText,
    fontSize: font.xs,
  },
  courseImage: {
    height: 120,
    width: '100%',
  },
  iconButton: {
    padding: 0,
    height: 24,
    backgroundColor: 'transparent',
    border: 'none',
  },
  iconButtonFocus: {
    ':focus': {
      outline: 'none',
    },
  },
  selectText: {
    color: color.darkGray,
    paddingRight: spacing.sm,
    marginLeft: `-${spacing.sm}`,
  },
  subtitle: {
    color: color.secondaryText,
    fontSize: font.sm,
  },
  title: {
    marginBottom: 0,
  },
}))(CourseCardWithApiData);
