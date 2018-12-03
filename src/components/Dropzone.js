import React from 'react';
import classnames from 'classnames';
import { withDropContext } from '../context/DropContext';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(reader.error);
    };
  });
}

class HookComponent extends React.Component {
  state = { images: [], dragOver: false };

  setDragOver = val => this.setState({ dragOver: val });

  onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.setDragOver(true);
  };

  onDrop = e => {
    e.stopPropagation();
    e.preventDefault();

    this.setDragOver(false);

    console.log(e.dataTransfer);
    const { files } = e.dataTransfer;
    const { addImage } = this.props.dropContext;

    if (files.length > 0) {
      getBase64(files[0])
        .then(data => {
          console.log(data);
          if (data.startsWith('data:image')) {
            addImage(data);
          } else {
            console.log('not a valid image');
          }
        })
        .catch(err => console.error(err));
    } else {
      const data = e.dataTransfer.getData('text/html');
      const doc = new DOMParser().parseFromString(data, 'text/html');
      const imgNode = doc.querySelector('img');

      if (imgNode) {
        addImage(imgNode.src);
      }
    }
  };

  render() {
    const { images } = this.props.dropContext;

    return (
      <React.Fragment>
        <div
          className={classnames('dropzone', {
            'dropzone-dragover': this.state.dragOver
          })}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
          onDragLeave={e => this.setDragOver(false)}
        />
        {images.map((imgUrl, idx) => (
          <img key={idx} src={imgUrl} alt="" />
        ))}
      </React.Fragment>
    );
  }
}

export default withDropContext(HookComponent);
