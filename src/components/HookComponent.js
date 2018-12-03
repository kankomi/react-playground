import React from 'react';
import { withNameContext } from '../context/NameContext';

class HookComponent extends React.Component {
  render() {
    const { name, changeName } = this.props.nameContext;

    return (
      <React.Fragment>
        <h1>Hello {name}</h1>
        <button onClick={changeName}>Click me</button>
      </React.Fragment>
    );
  }
}

export default withNameContext(HookComponent);
