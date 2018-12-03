import React from 'react';

export const withConsumer = (
  WrappedComponent,
  Consumer,
  namespace = 'context'
) => {
  return props => {
    return (
      <Consumer>
        {context => (
          <WrappedComponent {...props} {...{ [namespace]: context }} />
        )}
      </Consumer>
    );
  };
};

export const withProvider = (WrappedComponent, Provider) => {
  return props => {
    return (
      <Provider>
        <WrappedComponent {...props} />
      </Provider>
    );
  };
};
