import React from 'react';
import withApiData from '../components/hocs/withApiData';
import { css, cssWithClass, withStyles, ThemedStyleSheet} from 'src';
import {Avatar} from 'src';
import LeaderboardCard from './components/leaderboard/LeaderboardCard';
import LeaderProfileCard from './components/leaderboard/LeaderProfileCard';
import TopCoursesCard from './components/leaderboard/TopCoursesCard';
const _ = require('underscore');
import {courseraLogo} from '../assets/pngAssets';

// TODO[Audrey]:
class LeaderboardApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._menuItems = ['Overall Progress', 'This Month'];
    // Get top courses, format: [{count: 20, id: 'xyz'}, {count: 10, id: 'abc'}]
    this._topCourses = _.chain(props.leaderboards)
      .pluck('courseId')
      .reduce((total, item) => {
        total[item] = total[item] || 0;
        total[item] = total[item] + 1;
        return total;
      }, {})
      .map((item, key) => ({id: key, count: item}))
      .sortBy('count')
      .reverse()
      .value()
      .slice(0, 3);

    this.state = {
      leaderboardData: props.leaderboards,
      activeMenuIndex: 0,
    };
  }

  handleMenuClick = (menuIndex) => {
    let leaderboardData;
    const {leaderboards} = this.props;
    if (menuIndex === 0) {
      leaderboardData = leaderboards.slice(0, 10);
    } else {
      leaderboardData = leaderboards.slice(4, 15);
    }
    this.setState({leaderboardData, activeMenuIndex: menuIndex});
  }

  render() {
    const {styles, leaderboards} = this.props;
    const {leaderboardData, activeMenuIndex} = this.state;

    return (
      <div {...cssWithClass('LeaderboardApp bg-gray w-100', styles.LeaderboardApp)}>
        <header {...cssWithClass('container-fluid', styles.header)}>
          <div className="container">
            <nav {...cssWithClass('horizontal-box align-items-spacebetween wrap', styles.NavBar)}>
              <a href="/"> <img src={courseraLogo} alt="Coursera Logo" alt="Coursera" /></a>
              <div className="horizontal-box align-items-vertical-center">
                <span className="m-r-2">Institutions</span>
                <Avatar size={44} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
              </div>
            </nav>
          </div>
          <div className="row">
            <div {...cssWithClass('Jumbotron col-xs-12 vertical-box align-items-absolute-center text-xs-center p-b-2', styles.Jumbotron)}>
              <h1 {...css(styles.pageTitle)}>Coursera Leaderboard</h1>
              <h4 className="text-uppercase m-b-3">21 Days Left</h4>
            </div>
          </div>
        </header>
        <div {...cssWithClass('container', styles.main)}>
          <div className="row">
            <main className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
              <ul {...cssWithClass('TabMenu m-b-2 invisible', styles.TabMenu)}>
                {this._menuItems.map((item, index) =>
                  <li {...css(styles.tabMenuLi)} key={`tab-menu~${index}`}>
                    <a
                      {...css(styles.tabMenuA, styles.tabMenuAHover, index === activeMenuIndex && styles.tabMenuAActive)}
                      href="#"
                      onClick={() => (this.handleMenuClick(index))}
                    >
                      {item}
                    </a>
                  </li>
                )}
              </ul>
              <section className="cards">
                {_(leaderboardData).map((item, index) => (
                  <LeaderboardCard
                    key={`LeaderboardCard~${index}`}
                    leaderboard={item}
                    isNumberOne={index === 0}
                  />
                ))}
              </section>
            </main>
            <aside {...cssWithClass('col-xs-12 col-sm-12 col-md-6 col-lg-4 p-t-3', styles.aside)}>
              <LeaderProfileCard leaderboard={leaderboardData[0]} />
              <TopCoursesCard topCourses={this._topCourses} />
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

const AppWithApiData = withApiData({dataType: 'LEADERBOARD'})(LeaderboardApp);


export default withStyles(({color, gradient, transition}) => ({
  LeaderboardApp: {
    background: color.bgGray,
    minHeight: 800,
  },
  header: {
  },
  NavBar: {
    minHeight: 56,

  },
  Jumbotron: {
    minHeight: 360,
    background: `linear-gradient(90deg, ${gradient.primary.start}, ${gradient.primary.end})`,
    color: color.textIcon,
  },
  TabMenu: {
    padding: 0,
    textAlign: 'left',
  },
  tabMenuLi: {
    display: 'inline-block',
  },
  tabMenuA: {
    diplay: 'inline-block',
    padding: '8px 0',
    margin: '0 32px 0 0',
    fontWeight: 'normal',
    color: color.textIcon,
    textDecoration: 'none',
  },
  tabMenuAActive: {
    fontWeight: 'bold',
    borderBottom: `2px solid ${color.textIcon}`,
  },
  tabMenuAHover: {
    ':hover': {
      textDecoration: 'none',
    },
  },
  sideBar: {
    transition: transition.easeOut(),
  },

  pageTitle: {
    fontSize: 64,
    fontWeight: 'normal',
  },
  main: {
    minHeight: 500,
    marginTop: -96,
    transition: transition.easeOut(),
  },

  hover: {
    ':hover': {
      backgroundColor: 'red',
    },
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },
  },
}))(AppWithApiData);
