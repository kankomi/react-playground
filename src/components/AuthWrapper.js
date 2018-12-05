import React from 'react';

const AuthWrapper = WrappedComponent => props => (
  <React.Fragment>
    {props.isLoggedIn && <WrappedComponent {...props} />}
    {!props.isLoggedIn && <p>You're not logged in :(</p>}
  </React.Fragment>
);

export default AuthWrapper;
