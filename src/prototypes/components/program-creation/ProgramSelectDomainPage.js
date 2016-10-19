import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import SelectList from '../../../components/extended/selectList/SelectList';
import DomainSelectList from './DomainSelectList';
const _ = require('underscore');

class ProgramSelectDomainPage extends React.Component {

  static propTypes = {
    onSetDomains: React.PropTypes.func.isRequired,
  }

  onSelectChange = (id, newIsSelect, newListData) => {
    const selectedDomainIds = _.chain(newListData)
                                .filter(item => !item.isSelected)
                                .pluck('id')
                                .value();
    this.props.onSetDomains(selectedDomainIds);
  }

  render() {
    const {styles} = this.props;
    return (
      <div {...cssWithClass('vertical-box align-items-absolute-center', styles.ProgramSelectDomainPage)}>
        <h2>The skills I am looking for are in </h2>
        <div className="p-t-3 p-b-3 m-b-3">
          <DomainSelectList
            onSelectChange={this.onSelectChange}
            alignCenter={true}
          />
        </div>
      </div>
    );
  }
}


export default withStyles(({color, gradient}) => ({
  ProgramSelectDomainPage: {
    minHeight: '100vh',
  }
}))(ProgramSelectDomainPage);
