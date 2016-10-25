/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes} from 'react';
const {
  StyleSheet, css, zIndex, transition,
} = require('src/styles/theme');
const Waypoint = require('react-waypoint');
const _ = require('underscore');
const { getAbsoluteBoundingRect } = require('src/utils/common');

let currentIndex = 0;
const totalItemCount = 40;

const generateItem = () => {
  const chooseCat = Math.floor(Math.random() * 2);
  const ind = (currentIndex % 10) + 1;
  const newImage = (chooseCat) ?
  'http://lorempixel.com/output/cats-q-c-640-480-' + ind + '.jpg':
  'http://lorempixel.com/output/technics-q-c-640-480-' + ind + '.jpg';
  currentIndex++;
  return newImage;
}

const initialItems = [
  'http://lorempixel.com/output/cats-q-c-640-480-9.jpg',
  'http://lorempixel.com/output/cats-q-c-640-480-10.jpg',
  'http://lorempixel.com/output/technics-q-c-640-480-10.jpg',
  'http://lorempixel.com/output/cats-q-c-640-480-8.jpg',
];

class InfiniteScrollDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {limit} = props;
    this.state = {
      items: initialItems,
      isLoading: false,
      isContentOnWindowTop: true,
      reachedLimit: _(initialItems).size >= limit,
    };
  }

  _loadMoreItems = () => {
    const itemsToAdd = 5;
    const secondsToWait = 1;
    this.setState({ isLoading: true });
    // fake an async. ajax call with setTimeout
    window.setTimeout(() => {
      // add data
      const currentItems = this.state.items;
      for (let i = 0; i < itemsToAdd; i++) {
        currentItems.push(generateItem());
      }
      this.setState({
        items: currentItems,
        isLoading: false,
      });
    }, secondsToWait * 1000);
  }

  _handleLeave = (data) => {
    console.warn('-handleLeave--', data);
  }

  _handlePositionChange = (data) => {
    console.warn('-handlePositionChange--', data);
    if (this.state.isContentOnWindowTop) {
      this.setState({isContentOnWindowTop: false});
    }
  }

  handleScrollToTop = () => {
    window.scrollTo(0, 0);
    this.setState({isContentOnWindowTop: true});
  }

  handleExpand = () => {
    console.warn('-handleExpand--');
    this.setState({
      isInfiniteMode: true,
    })
  }

  handleCollapse = () => {
    console.warn('-handleCollapse--');
    this.setState({
      isInfiniteMode: false,
      items: this.state.items.slice(0, 16),
    });
    const rect = this.domainListRef.getBoundingClientRect();
    const absoluteRect = getAbsoluteBoundingRect(this.domainListRef);
    const pos = this.domainListRef.scrollHeight;
    const newPos = absoluteRect.top + (absoluteRect.height / 2);
    // console.warn('-pos--', newPos, pos, rect, absoluteRect);
    window.scrollTo(0, 200);
  }

  render() {
    const {limit} = this.props;
    const {items, isContentOnWindowTop, isInfiniteMode, isLoading} = this.state;
    const reachedLimit = _(items).size() >= limit;
    const renderWayPoint = isInfiniteMode && !reachedLimit && !isLoading;

    return (
      <div>
        <h1>Header Coursera Logo</h1>
        <div className="p-a-3 m-a-3 border-a" ref={(r) => (this.domainListRef = r)}>
          <h3>hello world</h3>
          <h3>Domain List</h3>
        </div>
        {isInfiniteMode  &&
          <button onClick={this.handleCollapse} {...css(styles.collapseButton)}> Collapse </button>
        }
        {!isInfiniteMode &&
          <button onClick={this.handleExpand} {...css(styles.expandButton)}> Expand </button>
        }
        {
          isInfiniteMode &&
          <button onClick={this.handleScrollToTop} {...css(styles.fabButton)}> To Top </button>
        }
        <p className="infinite-scroll-example__count">
          Items Loaded: {this.state.items.length}
        </p>
        {isLoading &&
          <p {...css(styles.loadingMessage)}>
            Loading...
          </p>
        }
        <div className="infinite-scroll-example__scrollable-parent">
          {this.state.items.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt="CATS AND ROBOTS... "
              key={index}
              {...css(styles.listItem)}
            />
          ))}
          {renderWayPoint &&
            <Waypoint
              onEnter={this._loadMoreItems}
              onPositionChange={this._handlePositionChange}
              onLeave={this._handleLeave}
            />
          }
        </div>
        <p className="infinite-scroll-example__arrow" />
      </div>
    );
  }
}


module.exports = InfiniteScrollDemo;

const styles = StyleSheet.create({
  InfiniteScrollDemo: {

  },
  fabButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  expandButton: {
    position: 'fixed',
    bottom: 0,
    right: 160,
  },
  collapseButton: {
    position: 'fixed',
    bottom: 0,
    right: 80,
  },
  listItem: {
    width: 150,
    height: 150,
    float: 'left',
  },
});
