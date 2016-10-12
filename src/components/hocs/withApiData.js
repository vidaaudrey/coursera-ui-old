import React from 'react';
import leaderboards from '../../data/leaderboard.json';

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
            apiData = {courses: {}}
            break;
          case dataTypes.LEADERBOARD:
            apiData = {leaderboards}
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
