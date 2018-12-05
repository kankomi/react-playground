import React from 'react';
import NameSelector from './NameSelector';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<NameSelector nameContext={{ name: 'Max' }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
