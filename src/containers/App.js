import React, { PropTypes } from 'react';

class App extends React.Component {
  static defaultProps = {
    name: 'World',
    handleClick: name => console.log(`hi ${name}`),
  }

  static propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func,
  }

  render() {
    const {name, handleClick} = this.props;
    return (
      <div className="rc-App">
        <h1>Hello {name}!</h1>
        <button onClick={() => { handleClick(name); }}> Ask {name}</button>
      </div>
    );
  }
}

export default App;
