import React, {PropTypes} from 'react';

const Typography = () => {
  return (
    <div className="container">
      <div className="m-b-3">
        <h1>Headings</h1>
        <p className="m-b-2"><i>OpenSans-light</i></p>
        <h1>h1.Coursera-UI</h1>
        <h2>h2.Coursera-UI</h2>
        <h3>h3.Coursera-UI</h3>
        <h4>h4.Coursera-UI</h4>
        <h5>h5.Coursera-UI</h5>
        <h6>h6.Coursera-UI</h6>
      </div>
      <div className="m-b-3">
        <h1>Display Text</h1>
        <p className="m-b-2"><i>Merriweather Light, .display</i></p>
        <h1 className="display">h1.Coursera-UI</h1>
        <h2 className="display">h2.Coursera-UI</h2>
        <h3 className="display">h3.Coursera-UI</h3>
        <h4 className="display">h4.Coursera-UI</h4>
        <h5 className="display">h5.Coursera-UI</h5>
        <h6 className="display">h6.Coursera-UI</h6>
      </div>

    </div>
  );
};

module.exports = Typography;
