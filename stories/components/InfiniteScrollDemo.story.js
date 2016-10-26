import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import IconLibrary from '../support/IconLibrary';
// import { ChipList, Chip } from 'src';
import InfiniteScrollDemo from 'src/components/extended/InfiniteScrollDemo';

class InfiniteScrollDemoWrapper extends React.Component {

  // state = {
  //   isScrollDown: true,
  //   lastScrollPos: 0,
  // }
  //
  // handleScroll = (e) => {
  //   // const newScrollPos = e.target.scrollTop;
  //   const newScrollPos = document.body.scrollTop;
  //   const {lastScrollPos} = this.state;
  //   const isScrollDown =  lastScrollPos < newScrollPos ? true : false;
  //   this.setState({
  //     isScrollDown,
  //     lastScrollPos: newScrollPos,
  //   })
  //   console.warn('-scrolling--', newScrollPos, e, isScrollDown);
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    return (
      <div className="rc-InfiniteScrollDemoWrapper border-a"
        onScroll={this.handleScroll}
      >
        <h2>wrapper</h2>
        <div
          ref={r => (this.containerRef = r)}
          style={{overflow: 'scroll'}}
        >
          <InfiniteScrollDemo limit={60} />
        </div>
      </div>
    );
  }
}

storiesOf('extended.Demos', module)
  .addWithInfo(
    'InfiniteScrollDemo',
    `
      Usage

      ~~~js
      import { Chip } from 'coursera-ui';

      <ChipList
        listData={listData}
        showSelectAll={true}
        selectAllLabel={'All Topics'}
        alignCenter={true}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container">
        <InfiniteScrollDemoWrapper />
      </div>
    ),
  );
