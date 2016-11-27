import React, { Component } from 'react';
import Board from './Board';
import { observe } from './Game';

export default class ChessboardTutorialApp extends Component {
  constructor(props) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }


  componentWillUnmount() {
    this.unobserve();
  }

  handleChange(knightPosition) {
    const nextState = { knightPosition };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  render() {
    const { knightPosition } = this.state;
    return (
      <div>
        <p>
          <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/00%20Chessboard/Tutorial%20App'>Browse the Source</a></b>
        </p>
        <p>
          It illustrates creating the drag sources and the drop targets, using the monitors to query the current drag state, and customizing the drag previews.
        </p>
        <div style={{
          width: 500,
          height: 500,
          border: '1px solid gray'
        }}>
          <Board knightPosition={knightPosition} />
        </div>
      </div>
    );
  }
}
