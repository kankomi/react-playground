import { compose, fromRenderProps } from 'recompose';

import withState from './withState';
import withAddImage from './withAddImage';
import { DropContext } from '../../../context/DropContext';

const withLogic = compose(
  fromRenderProps(DropContext.Consumer, ({ addImage }) => ({
    addImageToContext: addImage
  })),
  withState,
  withAddImage
);

export default withLogic;
