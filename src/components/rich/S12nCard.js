import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import { SvgCheckOutline } from '../svg/coursera'

const S12nCard = ({
  styles,
  title = 'S12nCard',
  subtitle = 'University name',
  courseCount = 5,
  capstoneCount = 1,
  weekCount = 26,
  weeklyHourCount = '6-8',
  nextSessionDate = 'October 3rd',
  certificateCount = 1,
  isSelected,
  onToggleS12nSelect,
}) => {
  return (
    <div {...cssWithClass('vertical-box', styles.S12nCard)}>
      <div {...cssWithClass('card vertical-box', styles.wrapper)}>
        <div>
          <img src="//placehold.it/200x100/A66506/FFFFFF"
               alt="CourseraAlt"
               {...css(styles.image)}
          />
        </div>
        <div {...cssWithClass('flex-1 vertical-box', styles.cardContent)}>
          <div className="flex-1">
            <h3 {...css(styles.title)}>{title}</h3>
            <span {...css(styles.subtitle)}>{subtitle}</span>
          </div>
          <div {...css(styles.details)}>
            {courseCount} courses + {capstoneCount} capstone projects <br/>
            {weekCount} weeks ({weeklyHourCount} hours / week) <br/>
            Next Session: {nextSessionDate} <br />
            {certificateCount} certificate
          </div>
          <div className="horizontal-box">
            <div {...cssWithClass('col-xs-7 horizontal-box align-items-vertical-center', styles.cardRibbon)}>
              <span {...css(styles.courseCount)}>
                {courseCount}{'-courses'}
              </span>
            </div>
            <div {...cssWithClass('col-xs-5 horizontal-box align-items-vertical-center', styles.cardSelect)}>
              <span {...css(styles.selectText)}> Not Selected </span>
              <button onClick={() => (onToggleS12nSelect(id, !isSelected, courseIds))}>
                <SvgCheckOutline size={20} color="darkGray"/>
                {isSelected ? 'Deselect' : 'Select'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div {...css(styles.firstLayer)}/>
        <div {...css(styles.secondLayer)}/>
      </div>
    </div>
  );
};


export default withStyles(({color, font, spacing}) => ({
  S12nCard: {
    marginBottom: 10,
    maxWidth: 480,
  },
  cardContent: {
    alignContent: 'flex-end',
    padding: spacing.md,
  },
  cardRibbon: {
    color: color.secondaryText,
    fontSize: font.sm,
    backgroundImage: `linear-gradient(-250deg, ${color.gray} 90%, ${color.white} 90%)`,
    marginLeft: `-${spacing.md}`,
    marginBottom: `-${spacing.sm}`,
    padding: '5px 0px',
  },
  cardSelect: {
    color: color.secondaryText,
    fontSize: font.xs,
    marginBottom: `-${spacing.md}`,
    marginRight: `-${spacing.sm}`,
  },
  courseCount: {
    paddingLeft: spacing.md,
  },
  details: {
    color: color.secondaryText,
    fontSize: font.xs,
    paddingBottom: spacing.md,
  },
  firstLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 8,
    margin: '0px 10px',
  },
  image: {
    height: 120,
    width: '100%',
  },
  secondLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 6,
    margin: '0px 20px',
  },
  selectText: {
    color: color.darkGray,
    paddingRight: spacing.sm,
  },
  subtitle: {
    color: color.secondaryText,
    fontSize: font.sm,
  },
  title: {
    marginBottom: 0,
  },
  wrapper: {
    minHeight: 360,
  },
}))(S12nCard);
