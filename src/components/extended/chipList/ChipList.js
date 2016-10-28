const React = require('react');
const _ = require('underscore');
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import Chip from './Chip';

const SELECT_ALL_ID = -2;

const idType = [
  React.PropTypes.string,
  React.PropTypes.number,
];
class ChipList extends React.Component {
  static propTypes = {
    listData: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.oneOfType(idType).isRequired,
      label: React.PropTypes.string.isRequired,
      isSelected: React.PropTypes.bool,
    }).isRequired).isRequired,
    showSelectAll: React.PropTypes.bool,
    selectAllLabel: React.PropTypes.string,
    onSelectChange: React.PropTypes.func,
    selectAllId: React.PropTypes.oneOfType(idType),
    isDarkTheme: React.PropTypes.bool,
    ChipAttributes: React.PropTypes.shape({
      isDarkTheme: React.PropTypes.bool,
      height: React.PropTypes.nubmer,
      fontSize: React.PropTypes.string,
    }),
    alignCenter: React.PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);
    const {listData, showSelectAll} = props;
    // Overwrite isSelected properties
    this.state = ChipList.createLocalState(listData, showSelectAll);
  }

  static defaultProps = {
    listData: [],
    selectAllLabel: 'Select All',
    selectAllId: SELECT_ALL_ID,
  }

  componentWillReceiveProps({listData, showSelectAll}) {
    if (this.props.listData !== listData || this.props.showSelectAll !== showSelectAll) {
      this.setState(ChipList.createLocalState(listData, showSelectAll));
    }
  }

  static createLocalState(listData = [], showSelectAll) {
    let newListData = listData;

    // If the list item already has isSelected field, we'll not modify the list
    if (showSelectAll) {
      newListData = listData.map((item) => {
        const itemCopy = item;
        if (!{}.hasOwnProperty.call(itemCopy, 'isSelected')) {
          itemCopy.isSelected = false;
        }
        return itemCopy;
      });
    }
    const isAllSelected = _.every(newListData, item => item.isSelected);
    return {
      listData: newListData,
      isAllSelected,
    };
  }

  toggleSelect = (id) => {
    if (id === SELECT_ALL_ID) {
      this.toggleSelectAll();
    } else {
      let newIsSelect = false;
      const newListData = this.state.listData.map((item) => {
        const itemCopy = item;
        if (item.id === id) {
          itemCopy.isSelected = !itemCopy.isSelected;
          newIsSelect = itemCopy.isSelected;
        }
        return itemCopy;
      });
      // If every item is selected or not selected, change the all state
      const isAllSelected = _.every(newListData, ({isSelected}) => isSelected);
      const isAllNotSelected = _.every(newListData, ({isSelected}) => !isSelected);
      if (isAllSelected) {
        this.setState({ listData: newListData, isAllSelected: true});
      }
      if (isAllNotSelected) {
        this.setState({ listData: newListData, isAllSelected: false});
      }
      this.forceUpdate();

      // in case the parent component want to do some further work, pass the id, selected status and new list data back
      if (this.props.onSelectChange) {
        let allSelectedIds = _(newListData)
          .chain()
          .filter(item => !!item.isSelected)
          .pluck('id')
          .value();
        this.props.onSelectChange(id, allSelectedIds, newIsSelect, newListData);
      }
    }
  }

  toggleSelectAll = () => {
    const {isAllSelected} = this.state;
    const newIsAllSelected = !this.state.isAllSelected;
    /* eslint-disable no-param-reassign */
    const newListData = this.state.listData.map((item) => {
      item.isSelected = newIsAllSelected;
      return item;
    });

    this.setState({
      listData: newListData,
      isAllSelected: newIsAllSelected,
    });

    if (this.props.onSelectChange) {
      this.props.onSelectChange(SELECT_ALL_ID, newIsAllSelected, newListData);
    }
  }


  render() {
    const {
      style, styles, showSelectAll, selectAllLabel, selectAllId, isDarkTheme,
      ChipAttributes, alignCenter,
    } = this.props;

    const dynamicStyles = getStyles({alignCenter});
    const { isAllSelected, listData } = this.state;

    return (
      <div style={dynamicStyles}>
        {showSelectAll &&
          <Chip
            {...ChipAttributes}
            label={selectAllLabel}
            isSelected={isAllSelected}
            onClick={() => (this.toggleSelectAll(selectAllId))}
            style={{marginBottom: 32}}
          />
        }
        <div>
          {_(listData).map(item =>
            <Chip
              {...ChipAttributes}
              key={`ChipList~${item.id}`}
              label={item.label}
              isSelected={item.isSelected}
              onClick={() => (this.toggleSelect(item.id))}
              style={{margin: 8}}
            />
          )}
        </div>
      </div>
    );
  }
}


function getStyles({alignCenter}) {
  return {
    textAlign: alignCenter ? 'center' : 'left',
  };
}

export default withStyles(({color, transition, spacing}) => ({
  ChipList: {
    transition: transition.easeOut(),
    border: 'none',
    overflow: 'hidden',
    padding: '0 1rem',
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
}))(ChipList);
