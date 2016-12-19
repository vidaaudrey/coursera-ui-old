// Based on https://github.com/voronianski/react-star-rating-component
/* eslint-disable react/forbid-prop-types, no-plusplus, jsx-a11y/no-static-element-interactions, react/no-unused-prop-types, no-param-reassign */
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { css, StyleSheet, color } from 'src/styles/theme';
import { pure } from 'recompose';
import _ from 'underscore';

const Star = (props) => {
  const nameMap = {
    isDisabled: 'is-disabled',
    isActive: 'is-active',
    isActiveHalf: 'is-active-half',
    willBeActive: 'will-be-active',
  };

  const className = Object.keys(nameMap)
    .filter(prop => props[prop])
    .map(prop => nameMap[prop])
    .join(' ');

  return (
    <a className={className}>★</a>
  );
};

Star.propTypes = {
  isActive: PropTypes.bool,
  isActiveHalf: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};


class StarRating extends Component {
  static propTypes = {
    // Override the inline-styles of the root element
    style: PropTypes.object,
    // Attributes overwrite.
    htmlAttributes: PropTypes.object,
    // Name for form element
    name: PropTypes.string.isRequired,
    //
    rating: PropTypes.number,
    // If false, the rating will be read only.
    interactive: PropTypes.bool,
    limit: PropTypes.number,
    starColor: PropTypes.string,
    onRate: PropTypes.func,
    renderStarIcon: PropTypes.func,
    renderStarIconHalf: PropTypes.func,
    emptyStarColor: PropTypes.string,
  };

  static defaultProps = {
    name: 'rating',
    limit: 5,
    rating: 0,
    interactive: true,
    starColor: color.warning,
    emptyStarColor: color.divider,
  };

  constructor(props) {
    super();
    this.state = {
      rating: props.rating,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('rating' in nextProps && nextProps.rating !== this.state.rating) {
      this.setState({ rating: nextProps.rating });
    }
  }

  onChange(rating) {
    if (this.props.interactive) {
      this.setState({ rating });
    }
  }

  onRate(index) {
    const { onRate, interactive, name } = this.props;
    const rating = index + 1;
    if (interactive) {
      this.setState({ rating});
    }
    if (interactive && onRate) {
      onRate(index, this.props.rating, name);
    }
  }

  renderStars() {
    const { name, limit, starColor, emptyStarColor, interactive } = this.props;
    const { rating } = this.state;
    return _(_.range(limit).reverse())
      .reduce((total, indexAlt) => {
        const index = indexAlt + 1;
        const id = `${name}_${index}`;
        const starNodeInput = (
          <input
            key={`input_${id}`}
            {...css(styles.radioStyles)}
            type="radio"
            name={name}
            id={id}
            value={index}
            checked={rating === index}
            onChange={() => this.onChange(index)}
          />
        );
        const starNodeLabel = (
          <label
            key={`label_${id}`}
            {...css(styles.star, interactive && styles.starInteractive)}
            style={{color: rating >= index ? starColor : emptyStarColor}}
            htmlFor={id}
            onClick={() => this.onRate(index)}
          >
            {this.renderIcon(index)}
          </label>
        );
        total.push(starNodeInput);
        total.push(starNodeLabel);
        return total;
      }, []);
  }

  renderIcon(index) {
    const { renderStarIcon, renderStarIconHalf, name } = this.props;
    const { rating } = this.state;
    if (
      typeof renderStarIconHalf === 'function' &&
      Math.ceil(rating) === index &&
      rating % 1 !== 0
    ) {
      return renderStarIconHalf(index, rating, name);
    }
    if (typeof renderStarIcon === 'function') {
      return renderStarIcon(index, rating, name);
    }

    return <i style={{fontStyle: 'normal'}}>&#9733;</i>;
  }

  render() {
    const { interactive, htmlAttributes, style } = this.props;
    return (
      <div
        {...htmlAttributes}
        {...css(styles.StarRating, !interactive && styles.nonEditable)}
        style={style}
      >
        {this.renderStars()}
      </div>
    );
  }
}


const styles = StyleSheet.create({
  StarRating: {
    display: 'inline-block',
    position: 'relative',
  },
  nonEditable: {
    cursor: 'not-allowed',
  },
  star: {
    float: 'right',
    cursor: 'default',
  },
  starInteractive: {
    cursor: 'pointer',
  },
  radioStyles: {
    display: 'none',
    position: 'absolute',
    marginLeft: -9999,
  },
});

module.exports = StarRating;
