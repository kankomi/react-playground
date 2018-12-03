import React, { Component, createContext } from 'react';
import { withConsumer, withProvider } from './common';

export const NameContext = createContext();

export class NameProvider extends Component {
  state = { name: 'Mary' };
  changeName = () => {
    const names = ['Peter', 'Anna', 'Max', 'Juri'];
    const name = names[Math.floor(Math.random() * names.length)];
    this.setState({ name });
  };
  render() {
    return (
      <NameContext.Provider
        value={{ ...this.state, changeName: this.changeName }}
      >
        {this.props.children}
      </NameContext.Provider>
    );
  }
}

export const withNameContext = WrappedComponent =>
  withConsumer(WrappedComponent, NameContext.Consumer, 'nameContext');

export const withNameProvider = WrappedComponent =>
  withProvider(WrappedComponent, NameProvider);
