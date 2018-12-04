import React from 'react';
import classnames from 'classnames';
import withLogic from './logic';

export const Dropzone = ({
  onDragLeave,
  onDragOver,
  onDrop,
  dragOver,
  addImage
}) => (
  <div
    className={classnames('dropzone', {
      'dropzone-dragover': dragOver
    })}
    onDragOver={onDragOver}
    onDrop={e => {
      onDrop(e);
      addImage(e);
    }}
    onDragLeave={onDragLeave}
  >
    <div className={classnames('drop-text', { hide: !dragOver })}>
      <h2>Drop here</h2>
    </div>
  </div>
);

export default withLogic(Dropzone);
