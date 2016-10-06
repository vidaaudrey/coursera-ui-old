// @flow
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({name = 'Coursera'}) => {
  const appName: string = `${name} hello flow `;

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{appName}</h2>
      </div>
    </div>
  );
};

App.propTypes = {
  name: React.PropTypes.string,
};

export default App;
