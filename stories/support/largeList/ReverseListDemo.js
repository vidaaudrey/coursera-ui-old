/* eslint-disable no-use-before-define */
import React, {PropTypes, Component} from 'react';
import { List } from 'react-virtualized'

const styles = {
  ListExample: {

  },
  List: {

  },
};

export default class ReverseListDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this._interval = setInterval(() => this._updateFeed(), 2000)
  }

  componentWillUnmount () {
    clearInterval(this._interval)
  }


  render () {
    const { list } = this.state
    console.warn('---', list);
    return (
      <div className="vertical-box align-items-center">
        <List
          ref={r => (this.listRef = r)}
          className="horizontal-box align-items-spacebetween border-a"
          style={styles.List}
          width={300}
          height={200}
          rowHeight={60}
          rowCount={list.length}
          rowRenderer={this._rowRenderer}
          scrollTop={0}
        />
      </div>
    )
  }

  _updateFeed = () => {
    const list = [ ...this.state.list ]
    const index = list.length - 1;

    list.unshift({title: 'Audrey' + index, subtitle: 'reading a book' });

    this.setState({ list })
    console.warn('---', this.listRef);
    // If you want to scroll to the top you can do it like this
    // this.listRef.scrollTop();
  }

  _rowRenderer = ({ key, index }) => {
    const item = this.state.list[index];
    return (
      <div
        key={key}
      >
        <h2>{item.title}</h2>
        <h5>{item.subtitle}  {index}</h5>
      </div>
    );
  }
}
