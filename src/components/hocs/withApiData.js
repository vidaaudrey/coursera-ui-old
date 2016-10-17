import React from 'react';
import leaderboards from '../../data/leaderboards.json';
import courses from '../../data/courses.json';

const dataTypes = {
  COURSE: 'COURSE',
  LEADERBOARD: 'LEADERBOARD',
}
const withApiData = ({dataType = dataTypes.LEADERBOARD}) => {
  return (Component) => {
    const componentName = Component.displayName || Component.name || 'Component';
    return class HOC extends React.Component {
      displayName = `withApiData(${componentName})`;

      state = {}

      render() {
        let apiData;
        switch (dataType) {
          case dataTypes.COURSE:
            const id = this.props.id;
            apiData = {course: courses[id]};
            break;
          case dataTypes.LEADERBOARD:
            apiData = {leaderboards }
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
  };
}

export default withApiData;
