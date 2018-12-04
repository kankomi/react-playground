import { withHandlers } from 'recompose';
import { getBase64 } from '../../../utils';

const addImage = (props, e) => {
  console.log(props);

  e.stopPropagation();
  e.preventDefault();
  console.log(e.dataTransfer);
  const { files } = e.dataTransfer;
  const { addImageToContext } = props;

  if (!addImageToContext) {
    console.error('addImageToContext is not in props!');
    return false;
  }

  if (files.length > 0) {
    getBase64(files[0])
      .then(data => {
        if (data.startsWith('data:image')) {
          addImageToContext(data);
        } else {
          console.log('not a valid image');
        }
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    const data = e.dataTransfer.getData('text/html');
    const doc = new DOMParser().parseFromString(data, 'text/html');
    const imgNode = doc.querySelector('img');

    if (imgNode) {
      addImageToContext(imgNode.src);
    }
  }
};

export default withHandlers({
  addImage: props => e => addImage(props, e)
});
