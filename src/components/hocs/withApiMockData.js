import React from 'react';
const _ = require('underscore');
import leaderboards from 'src/data/leaderboards.json';
import courses from 'src/data/courses.json';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {
  domainNaptime, coursesNaptime, s12nsNaptime, partnersNaptime, instructorsNaptime
} from 'src/prototypes/data/apiData';
const dataTypes = {
  LEADER_COURSE: 'LEADER_COURSE',
  LEADERBOARD: 'LEADERBOARD',
  DOMAINS: 'DOMAINS',
  COURSES: 'COURSES',
  S12NS: 'S12NS',
  S12N: 'S12N',
  MINI_SDP: 'MINI_SDP',
  MINI_SDP: 'MINI_SDP',
  MINI_CDP: 'MINI_CDP',
  COURSE: 'COURSE',
};
const withApiMockData = ({dataType = dataTypes.LEADERBOARD}) => {
  return (Component) => {
    const componentName = Component.displayName || Component.name || 'Component';
    return class HOC extends React.Component {
      displayName = `withApiMockData(${componentName})`;

      state = {}

      render() {
        const {id} = this.props;
        let apiData;
        switch (dataType) {
          case dataTypes.LEADER_COURSE:
            apiData = {course: courses[id]};
            break;
          case dataTypes.LEADERBOARD:
            apiData = {leaderboards };
            break;
          case dataTypes.DOMAINS:
            apiData = {domains: domainNaptime };
            break;
          case dataTypes.COURSES:
            apiData = {courses: coursesNaptime };
            break;
          case dataTypes.S12NS:
            apiData = {s12ns: s12nsNaptime };
            break;

          case dataTypes.S12N:
            apiData = {s12n: _(s12nsNaptime).findWhere({id}) };
            break;

          case dataTypes.MINI_SDP:
            apiData = {
              s12n: _(s12nsNaptime).findWhere({id}),
              instructors: instructorsNaptime,
              partner: partnersNaptime[0],
              courses: coursesNaptime,
            };
            break;
          case dataTypes.MINI_CDP:
            apiData = {
              course: _(coursesNaptime).findWhere({id}),
              instructors: instructorsNaptime,
              partner: partnersNaptime[0],
            };
            break;

          case dataTypes.COURSE:
            apiData = {course: _(coursesNaptime).findWhere({id}) };
            break;

          default:
            break;
        }
        return (
          <Component
            {...apiData}
            {...this.props}
          />
        );
      }
    };

    hoistNonReactStatic(Component, HOC);
  };
};

export default withApiMockData;
