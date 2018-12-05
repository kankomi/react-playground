import React from 'react';
import { withDropContext } from '../context/DropContext';

const ImageGrid = ({ dropContext: { images } }) => (
  <div className="image-grid">
    {images.map((imgSrc, idx) => (
      <div key={idx} className="image-grid-cell">
        <img className="image-grid-img" src={imgSrc} alt="" />
      </div>
    ))}
  </div>
);

export default withDropContext(ImageGrid);
