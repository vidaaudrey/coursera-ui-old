import React from 'react';
import withApiData from '../components/hocs/withApiData';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import LeaderboardCard from './components/LeaderboardCard';
import LeaderProfileCard from './components/LeaderProfileCard';
import TopCoursesCard from './components/TopCoursesCard';
// import
// var faker = require('faker');
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

class LeaderboardApp extends React.Component {
  render() {
    const {styles, leaderboards} = this.props;

    return (
      <div {...cssWithClass('LeaderboardApp', styles.LeaderboardApp)}>

        <div {...cssWithClass('Nav vertical-box align-items-absolute-center text-xs-center h-100', styles.Nav)}>
          <h1>Coursera</h1>
        </div>

        <div {...cssWithClass('vertical-box align-items-absolute-center text-xs-center h-100', styles.Jumbotron)}>
          <h1 {...css(styles.pageTitle)}>Coursera Leaderboard</h1>
          <h4 className="text-uppercase">21 Days Left</h4>
        </div>

        <div {...css(styles.main)}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                <LeaderboardCard leaderboard={leaderboards[0]} />
                <LeaderboardCard leaderboard={leaderboards[1]} />
                <LeaderboardCard leaderboard={leaderboards[1]} />
                <LeaderboardCard leaderboard={leaderboards[1]} />

                {leaderboards.map((item, index) => (
                  <LeaderboardCard key={`${LeaderboardCard}~index`} leaderboard={item} />
                ))}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <LeaderProfileCard leaderboard={leaderboards[0]} />
                  <TopCoursesCard leaderboard={leaderboards[0]} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const AppWithApiData = withApiData({dataType: 'LEADERBOARD'})(LeaderboardApp);



export default withStyles(({color, gradient}) => ({
  LeaderboardApp: {
    background: color.lightGray,
    minHeight: 800,
  },
  Nav: {
    width: '100%',
    minHeight: 80,
  },
  Jumbotron: {
    minHeight: 300,
    background: `linear-gradient(90deg, ${gradient.primary.start}, ${gradient.primary.end})`,
    color: color.textIcon,
  },
  pageTitle: {
    fontSize: 64,
    fontWeight: 'normal',
  },
  main: {
    width: '100%',
    minHeight: 500,
  },
  red: {
      backgroundColor: 'red'
  },

  font: {
    fontSize: 60,
  },

  blue: {
      backgroundColor: color.lightPrimary
  },

  hover: {
      ':hover': {
          backgroundColor: 'red'
      }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
}))(AppWithApiData);
