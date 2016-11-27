import React, { PropTypes } from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardDraggable from './CardDraggable';

// const DraggableContainer = ({}) => {
//   return (
//     <div className="bg-primary">
//       <CardDraggable text="drag me" />
//       <CardDraggable text="drag me1" />
//       <CardDraggable text="drag me2" />
//       <CardDraggable text="drag me3" />
//     </div>
//   )
// };

class DraggableContainer extends React.Component {
  render() {
    return (
      <div className="bg-primary">
        <CardDraggable id={1} text="drag me" />
        <CardDraggable id={2} text="drag me1" />
        <CardDraggable id={3} text="drag me2" />
        <CardDraggable id={4} text="drag me3" />
      </div>
    );
  }
}

module.exports = DragDropContext(HTML5Backend)(DraggableContainer);
