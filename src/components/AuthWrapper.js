import React, { Component } from 'react';

const AuthWrapper = WrappedComponent => {
  return class extends Component {
    render() {
      if (this.props.isLoggedIn) {
        return <WrappedComponent {...this.props} />;
      }
      return <p>Your not logged in :(</p>;
    }
  };
};

export default AuthWrapper;
