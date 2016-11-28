import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import DraggableContainer from 'stories/support/DraggableContainer';
import style from './Storybook.scss';
import { range, random } from 'underscore';
// import ChessApp from 'stories/support/chess/ChessApp';
// import ReverseListDemo from 'stories/support/largeList/ReverseListDemo';
import SortableListWrapper from 'stories/support/largeList/SortableListWrapper';
import SortableList from 'stories/support/largeList/SortableList';
import SortableListDemo from 'stories/support/largeList/SortableListDemo';

function getItems(count, height) {
	const heights = [65, 110, 140, 65, 90, 65];
	return range(count).map((value) => {
		return {
			value,
			height: height || heights[random(0, heights.length - 1)]
		};
	});
}

storiesOf('extended.Draggable', module)
  .add('Vertical', () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <h3 className="m-b-0">Vertical with differnt row height</h3>
            <h5 className="text-muted font-sm m-b-1">Drag card to see the change</h5>
            <SortableListWrapper
              component={SortableList}
              items={getItems(50, 59)}
              axis={'y'}
            />
          </div>
        </div>
      </div>
    );
  })
  .add('Horizontal', () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="m-b-0">Horizontal</h3>
            <h5 className="text-muted font-sm m-b-1">Drag card to see the change</h5>
            <SortableListWrapper
              component={SortableList}
              axis={'x'}
              items={getItems(50, 300)}
            />
          </div>
        </div>
      </div>
    );
  })
  .add('Grid', () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="m-b-0">Grid</h3>
            <h5 className="text-muted font-sm m-b-1">Drag card to see the change</h5>
            <SortableListWrapper
              component={SortableList}
              axis={'xy'}
              items={getItems(10, 110)}
            />
          </div>
        </div>
      </div>
    );
  })
//   .add('Grid', () => {
// 	return (
// 		<div className={style.root}>
// 			<ListWrapper component={SortableList} axis={'xy'} items={getItems(10, 110)} helperClass={style.stylizedHelper} className={classNames(style.list, style.stylizedList, style.grid)} itemClass={classNames(style.stylizedItem, style.gridItem)}/>
// 		</div>
// 	);
// })

  //  helperClass={style.stylizedHelper} className={classNames(style.list, style.stylizedList, style.horizontalList)} itemClass={classNames(style.stylizedItem, style.horizontalItem)}

  // .addWithInfo(
  //   'DraggableContainer',
  //   `
  //     Usage
  //
  //     ~~~js
  //     import { SmartScrollWrapper, SmartScrollWrapperResponsive } from 'coursera-ui';
  //     ~~~
  //   `,
  //   () => (
  //     <div className="container">
  //       <DraggableContainer />
  //     </div>
  //   ),
  // )
  // .addWithInfo(
  //   'React DnD Demo: Chess',
  //   `
  //     Usage
  //
  //     ~~~js
  //     ~~~
  //   `,
  //   () => (
  //     <div className="container" style={{height: 500}}>
  //       <ChessApp />
  //     </div>
  //   ),
  // )
  // .addWithInfo(
  //   'ReverseListDemo',
  //   `
  //     Usage
  //
  //     ~~~js
  //     ~~~
  //   `,
  //   () => (
  //     <div className="container" style={{height: 500}}>
  //       <ReverseListDemo />
  //     </div>
  //   ),
  // )
  // .addWithInfo(
  //   'SortableListDemo',
  //   `
  //     Usage
  //
  //     ~~~js
  //     ~~~
  //   `,
  //   () => (
  //     <div className="container" style={{height: 500}}>
  //       <SortableListDemo />
  //     </div>
  //   ),
  // )
