import React, { Component, createContext } from 'react';
import { withConsumer, withProvider } from './common';

export const DropContext = createContext();

export class DropProvider extends Component {
  state = { images: [], testcontext: '' };

  addImage = imgSrc =>
    this.setState({ images: [...this.state.images, imgSrc] });

  render() {
    return (
      <DropContext.Provider value={{ ...this.state, addImage: this.addImage }}>
        {this.props.children}
      </DropContext.Provider>
    );
  }
}

export const withDropContext = WrappedComponent =>
  withConsumer(WrappedComponent, DropContext.Consumer, 'dropContext');

export const withDropProvider = WrappedComponent =>
  withProvider(WrappedComponent, DropProvider);
