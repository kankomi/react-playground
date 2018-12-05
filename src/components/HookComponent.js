import React from 'react';
import { withNameContext } from '../context/NameContext';

const HookComponent = ({ nameContext: { name, changeName } }) => (
  <React.Fragment>
    <h1>Hello {name}</h1>
    <button className="btn" onClick={changeName}>
      Click me
    </button>
  </React.Fragment>
);

export default withNameContext(HookComponent);
