import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { color } from 'src/styles/theme';

import { StarRating } from 'src';
import ToggleStar from 'src/components/svg/material/toggle/star';
import ToggleStarHalf from 'src/components/svg/material/toggle/star-half';
import ToggleStarBorder from 'src/components/svg/material/toggle/star-border';

class StarRatingDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      prevValue: 1,
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
    };
  }

  onRate = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue, prevValue });
  }

  onRateCustomIcon = (nextValue, prevValue, name) => {
    this.setState({ rating_custom_icon: nextValue, prevValue });
  }

  onRateHalfStar = (nextValue, prevValue, name) => {
    this.setState({ rating_half_star: nextValue, prevValue });
  }

  render() {
    const { isThemeDark } = this.props;
    const containerStyle = isThemeDark ? {color: 'white', backgroundColor: '#363b42'} : {};
    const { prevValue, rating, rating_custom_icon, rating_half_star } = this.state;
    return (
      <div className="m-b-2">
        <h2>{isThemeDark ? 'Dark Theme' : 'Light Theme'}</h2>
        <div className="horizontal-box border-a p-a-1">
          <span className="d-inline-block m-r-2">Previous Rating:  {prevValue}</span>
          Current Rating: {rating}
        </div>
        <div className="p-a-1" style={containerStyle}>
          <h3>default:</h3>
          <StarRating />

          <h3>non-interactive</h3>
          <StarRating interactive={false} rating={4.5} />

          <h3>onRate callback</h3>
          <StarRating
            rating={this.state.rating}
            onRate={this.onRate}
          />

          <h3>different limit and value</h3>
          <StarRating
            limit={20}
            value={14}
            rating={this.state.rating}
            onRate={this.onRate}
          />

          <h3>custome Icon with unicode</h3>
          <StarRating
            limit={10}
            rating={this.state.rating_custom_icon}
            onRate={this.onRateCustomIcon}
            starColor={color.danger}
            renderStarIcon={() => <span></span>}
          />

          <h3>custome svg icon with halfStars</h3>
          <StarRating
            rating={this.state.rating_half_star}
            onRate={this.onRateHalfStar}
            renderStarIcon={(index, value) => (
              index <= value ? <ToggleStar color={color.primary}/> : <ToggleStarBorder color={color.primary} />
            )}
            renderStarIconHalf={() =>(<ToggleStarHalf color={color.primary} />)}
          />
        </div>
      </div>
    );
  }
}

storiesOf('extended.StarRating', module)
  .addWithInfo(
    'StarRating',
    `
      Usage

      ~~~js
      import { StarRating } from 'coursera-ui';

      <StarRating />

      <StarRating interactive={false} rating={4.5} />

      <StarRating
        rating={this.state.rating}
        onRate={this.onRate}
      />

      <StarRating
        limit={20}
        value={14}
        rating={this.state.rating}
        onRate={this.onRate}
      />

      <StarRating
        rating={this.state.rating_custom_icon}
        onRate={this.onRate}
        starColor={color.danger}
        renderStarIcon={() => <span></span>}
      />

      <StarRating name="app5"
        rating={this.state.rating_half_star}
        onRate={this.onRateHalfStar}
        renderStarIcon={(index, value) => (
          index <= value ? <ToggleStar color={color.primary}/> : <ToggleStarBorder color={color.primary} />
        )}
        renderStarIconHalf={() =>(<ToggleStarHalf color={color.primary} />)}
      />
      ~~~
    `,
    () => (
      <div className="container-fluid p-t-1">
        <StarRatingDemo />
        <StarRatingDemo isThemeDark />
      </div>
    ),
    { inline: false, source: true, propTables: [StarRating]},
  );
