import React, { Component } from 'react';
import { withDropContext } from '../context/DropContext';

class ImageGrid extends Component {
  render() {
    const { images } = this.props.dropContext;
    return (
      <div className="image-grid">
        {images.map((imgSrc, idx) => (
          <div className="image-grid-cell">
            <img key={idx} className="image-grid-img" src={imgSrc} alt="" />
          </div>
        ))}
      </div>
    );
  }
}

export default withDropContext(ImageGrid);
