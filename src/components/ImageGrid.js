import React from 'react';
import { DropContext } from '../context/DropContext';
import { fromRenderProps } from 'recompose';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((imgSrc, idx) => (
        <div key={idx} className="image-grid-cell">
          <img className="image-grid-img" src={imgSrc} alt="" />
        </div>
      ))}
    </div>
  );
};

export default fromRenderProps(DropContext.Consumer, ({ images }) => ({
  images
}))(ImageGrid);
