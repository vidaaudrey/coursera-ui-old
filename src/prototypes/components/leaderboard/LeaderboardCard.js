import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet, theme} from 'src';
import CourseMiniCard from './CourseMiniCard';
import {Avatar} from 'src';
import SvgCrown from 'src/components/svg/icons/SvgCrown';
import {getInitialsFromFullName} from 'src/utils/common';

const AVATAR_SIZE = 100;
const LeaderboardCard = ({
  styles,
  leaderboard: {userName, numCoursesCompleted, rank, score, currentCourse, courseId, profilePhoto},
  isNumberOne,
  ...props
}) => {

  return (
    <div {...cssWithClass('LeaderboardCard card p-a-1', styles.LeaderboardCard)}>
      <div className="row">
        <div {...cssWithClass('col-xs-12 col-lg-3 vertical-box align-items-absolute-center p-a-1', styles.transition)}>
          <div className="text-xs-center pos-relative p-a-1">
            {profilePhoto &&
              <Avatar imgSrc={profilePhoto} size={AVATAR_SIZE} />
            }
            {!profilePhoto &&
              <Avatar
                backgroundColor={isNumberOne ? theme.color.accent : theme.color.darkPrimary}
                color={theme.color.textIcon}
                size={AVATAR_SIZE}
              >
                <h4 className="m-a-0 font-weight-normal">{getInitialsFromFullName(userName)}</h4>
              </Avatar>
            }
            <div {...css(styles.rank)}>
              <Avatar
                backgroundColor={isNumberOne ? theme.color.accent : theme.color.lightPrimary}
                color={theme.color.textIcon}
                size={36}
                >
                <h4 className="m-a-0">{rank}</h4>
              </Avatar>
            </div>
            {isNumberOne &&
              <div {...css(styles.crown)}>
                <SvgCrown fill={theme.color.accent}/>
              </div>
            }
          </div>
        </div>

        <div {...cssWithClass('col-xs-12 col-lg-7', styles.transition)}>
          <h3 className="m-b-0">{userName}</h3>
          <span className="d-block text-uppercase font-sm text-muted m-b-1">
            {numCoursesCompleted || 0}
            {numCoursesCompleted > 1 ? ' Courses' : ' Course'} Completed
          </span>
          <label className="text-uppercase font-sm font-weight-bold">Current Courses</label>
          <CourseMiniCard id={courseId}/>
        </div>

        <div {...cssWithClass('col-xs-12 col-lg-2 vertical-box align-items-absolute-center p-a-1', styles.transition)}>
          <span {...css(styles.stats, isNumberOne ? styles.colorAccent : styles.colorPrimary)}>
            {score}
          </span>
          <small className="text-uppercase font-xs text-muted">Points</small>
        </div>
      </div>
    </div>
  );
};

export default withStyles(({color, spacing, transition}) => ({
  LeaderboardCard: {
    minWidth: 320,
    marginBottom: spacing.sm,
  },
  rank: {
    position: 'absolute',
    top: '1em',
    left: 0,
  },
  crown: {
    position: 'absolute',
    top: '-1.5em',
    left: AVATAR_SIZE / 2 - 4,
  },
  stats: {
    fontSize: 48,
    fontWeight: 'normal',
  },
  colorPrimary: {
    color: color.primary,
  },
  colorAccent: {
    color: color.accent,
  },
  transition: {
    transition: transition.easeOut(),
  },
}))(LeaderboardCard);
