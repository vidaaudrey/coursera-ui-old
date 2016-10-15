import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet, theme} from 'src';
import CourseMiniCard from './CourseMiniCard';
import {Avatar} from 'src';
import SvgCrown from '../../components/svg/SvgCrown';

const AVATAR_SIZE = 100;
const LeaderboardCard = ({
  styles,
  leaderboard: {userName, numCoursesCompleted, rank, score, currentCourse, courseId},
  isNumberOne,
  ...props
}) => {
  return (
    <div {...cssWithClass('LeaderboardCard card p-a-1', styles.LeaderboardCard)}>
      <div className="row">
        <div className="col-xs-12 col-lg-3 vertical-box align-items-absolute-center p-a-1">
          <div className="text-xs-center pos-relative p-a-1">
            <Avatar imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" size={AVATAR_SIZE} />
            {isNumberOne &&
              <div {...css(styles.rank)}>
                <Avatar
                  backgroundColor={theme.color.accent}
                  color={theme.color.textIcon}
                  size={36}
                  >
                  <h4 className="m-a-0">1</h4>
                </Avatar>
              </div>
            }
            {isNumberOne &&
              <div {...css(styles.crown)}>
                <SvgCrown fill={theme.color.accent}/>
              </div>
            }
          </div>
        </div>

        <div className="col-xs-12 col-lg-7">
          <h3 className="m-b-0">{userName}</h3>
          <span className="d-block text-uppercase font-sm text-muted m-b-1">{numCoursesCompleted} Courses Completed</span>
          <label className="text-uppercase font-sm font-weight-bold">Current Courses</label>
          <CourseMiniCard id={courseId}/>
        </div>

        <div className="col-xs-12 col-lg-2 vertical-box align-items-absolute-center p-a-1">
          <span {...css(styles.stats, isNumberOne ? styles.colorAccent : styles.colorPrimary)}>
            {score}
          </span>
          <small className="text-uppercase font-xs text-muted">Points</small>
        </div>
      </div>
    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  LeaderboardCard: {
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
}))(LeaderboardCard);
