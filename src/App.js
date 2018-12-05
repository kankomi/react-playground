import React, { Component } from 'react';
import NameSelector from './components/Dropzone/NameSelector';
import AuthWrapper from './components/AuthWrapper';
import { withNameProvider } from './context/NameContext';
import Dropzone from './components/Dropzone';
import { withDropProvider } from './context/DropContext';
import ImageGrid from './components/ImageGrid';
import { compose } from 'recompose';

const WrappedComp = AuthWrapper(NameSelector);

class App extends Component {
  render() {
    return (
      <div className="content col">
        <WrappedComp isLoggedIn={true} />
        <WrappedComp isLoggedIn={false} />
        <div className="row">
          <Dropzone />
          <Dropzone />
        </div>
        <ImageGrid />
      </div>
    );
  }
}

export default compose(
  withDropProvider,
  withNameProvider
)(App);
