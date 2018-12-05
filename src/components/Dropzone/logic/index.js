import { compose } from 'recompose';

import withState from './withState';
import withAddImage from './withAddImage';
import { withDropContext } from '../../../context/DropContext';

const withLogic = compose(
  withDropContext,
  withState,
  withAddImage
);

export default withLogic;
