import React from 'react';

const redirect = {
  setLocation: path => alert(`redirecting to path${path}`),
};

/**
 * A reusable component to redirect user, show notFoundMessage or notAuthorizedMessage
 * Priority: redirectPath > notFoundMessage > notAuthorizedMessage
 */
class NotFoundOrAuthorized extends React.Component {
  static propTypes = {
    redirectPath: React.PropTypes.string,
    notFoundMessage: React.PropTypes.string,
    notAuthorizedMessage: React.PropTypes.string,
  }

  componentDidMount() {
    if (this.props.redirectPath) {
      redirect.setLocation(this.props.redirectPath);
    }
  }

  render() {
    const {notFoundMessage, notAuthorizedMessage} = this.props;
    return (
      <div className="NotFoundOrAuthorized">
        <h1>{notFoundMessage || notAuthorizedMessage }</h1>
      </div>
    );
  }
}

module.exports = NotFoundOrAuthorized;
