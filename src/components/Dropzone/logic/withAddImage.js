import { withHandlers } from 'recompose';
import { getBase64 } from '../../../utils';

/**
 * Adds an image from a drop event to the drop context.
 * @param {*} props Properties
 * @param {*} e Drop event
 */
const addImage = async (props, e) => {
  e.stopPropagation();
  e.preventDefault();
  console.log(e.dataTransfer);
  const { files } = e.dataTransfer;
  const { addImage } = props.dropContext;

  if (files.length > 0) {
    try {
      const data = await getBase64(files[0]);
      if (data.startsWith('data:image')) {
        addImage(data);
      } else {
        console.log('not a valid image');
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    const data = e.dataTransfer.getData('text/html');
    const doc = new DOMParser().parseFromString(data, 'text/html');
    const imgNode = doc.querySelector('img');

    if (imgNode) {
      addImage(imgNode.src);
    }
  }
};

export default withHandlers({
  addImage: props => e => addImage(props, e)
});
