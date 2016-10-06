const React = require('react');
const _ = require('underscore');
const cardStyles = {
  card: {
    paddingTop: 16,
    minWidth: 600,
    marginBottom: 32,
  },
  mainCardContentBox: {
    marginRight: 32,
  },
  numberBox: {
    minWidth: 80,
  },
  avatar: {
    borderRadius: '50%',
    width: 48,
    height: 48,
    marginRight: 16,
  },
  pointsBox: {
    minWidth: 80,
  },
};

const Card = ({rank = 1, name = 'Card'}) => {
  return (
      <div className="rc-Card horizontal-box" style={cardStyles.card}>
        <div className="number-box horizontal-box align-items-absolute-center" style={cardStyles.numberBox}>
          <h2 className="headline-text-2">{rank}</h2>
        </div>
        <div className="main-card-content-box horizontal-box flex-1" style={cardStyles.mainCardContentBox}>
          <div className="avatar-container">
            <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" style={cardStyles.avatar} />
          </div>
          <div className="text-content-container">
            <h2 className="headline-text-3">Lorem ipsum dolor sit.</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam error ratione et dolor laborum reprehenderit at odio explicabo optio architecto.
          </div>
          <div className="points-box vertical-box align-items-absolute-center" style={cardStyles.pointsBox}>
            <h2 className="headline-text-1 color-primary">{343}</h2>
            <p className="label-text">Points</p>
          </div>
        </div>
      </div>
    );
};

const appStyles = {
  main: {
  },
  headerContainer: {
    minHeight: 200,
  },
  leftCardContainer: {
    marginRight: 32,
  },
  profileContainer: {
    width: 300,
  },
  textSpacing: {
    padding: 16,
  }
};

class LeaderBoardApp extends React.Component {
  render() {
    const arr = _.range(10);

    return (
      <div className="rc-LeaderBoardApp">
        <div className="header-container horizontal-box align-items-absolute-center" style={appStyles.headerContainer}>
          <h1 className="display-text-1">LeaderBoard</h1>
        </div>
        <div className="main horizontal-box" style={appStyles.main}>
          <div className="left-card-container card-no-action flex-1" style={appStyles.leftCardContainer}>
            {arr.map((item, index) =>
              <Card key={index} rank={item} />
            )}
          </div>
          <div className="right-card-container">
            <div className="card-no-action vertical-box" style={appStyles.profileContainer}>
              <img src="//placehold.it/300x200/A66506/FFFFFF" alt="CourseraAlt" />
              <div style={appStyles.textSpacing}>
                <h2 className="headline-text-3">Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur aequuntur natus earum eos maiores sit temporerit!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardApp;
