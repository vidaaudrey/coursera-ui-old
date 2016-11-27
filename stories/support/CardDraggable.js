// Let's make <Card text='Write the docs' /> draggable!

import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';
const ItemTypes = {
  CARD: 'CARD',
};
/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text,
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    // When dropped on  a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

// const Card = ({isDragging, connectDragSource, text }) => {
//   return connectDragSource(
//     <div style={{ opacity: isDragging ? 0.5 : 1 }}>
//       {text}
//     </div>
//   );
// }
class Card extends React.Component {
  render() {
    const { isDragging, connectDragSource, text, id} = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
      </div>
    );
  }
}

Card.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
// import React, { PropTypes } from 'react';
// import { DragSource } from 'react-dnd';
// // import { ItemTypes } from './Constants';
// const ItemTypes = {
//   CARD: 'CARD',
// };
// /**
//  * Implements the drag source contract.
//  */
// const cardSource = {
//   beginDrag(props) {
//     return {
//       text: props.text,
//     };
//   },
// };
//
// /**
//  * Specifies the props to inject into your component.
//  */
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging(),
//   };
// }
//
// const propTypes = {
//   text: PropTypes.string.isRequired,
//
//   // Injected by React DnD:
//   isDragging: PropTypes.bool.isRequired,
//   connectDragSource: PropTypes.func.isRequired,
// };
//
// class Card {
//   render() {
//     const { isDragging, connectDragSource, text } = this.props;
//     return connectDragSource(
//       <div style={{ opacity: isDragging ? 0.5 : 1 }}>
//         {text}
//       </div>
//     );
//   }
// }
//
// Card.propTypes = propTypes;
//
// // Export the wrapped component:
// export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
