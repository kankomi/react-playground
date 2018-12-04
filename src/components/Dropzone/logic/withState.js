import { withStateHandlers } from 'recompose';

const initialState = {
  dragOver: false
};

const onDragLeave = props => event => ({ dragOver: false });

const onDragOver = props => event => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';

  return { dragOver: true };
};

const onDrop = props => event => ({ dragOver: false });

export default withStateHandlers(initialState, {
  onDragOver,
  onDragLeave,
  onDrop
});
