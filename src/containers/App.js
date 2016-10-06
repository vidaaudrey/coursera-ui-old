import React, { PropTypes } from 'react';

const App = ({ name = 'world!', handleClick }) => {
  return (
    <div className="rc-App">
      <h1>Hello {name}!</h1>
      <button onClick={() => {handleClick(name);}}> Ask {name}</button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

export default App;
