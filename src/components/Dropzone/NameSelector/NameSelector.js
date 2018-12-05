import React from 'react';

const NameSelector = ({ nameContext: { name, changeName } }) => (
  <React.Fragment>
    <h1>Hello {name}</h1>
    <button className="btn" onClick={changeName}>
      Click me
    </button>
  </React.Fragment>
);

export default NameSelector;
