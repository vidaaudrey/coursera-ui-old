import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, SelectList} from 'src';
import {ContentFilterList} from 'src/components/svg/material';

const _ = require('underscore');

const mockListData = [
  {
    id: 'computer-science',
    label: 'Computer Science',
    isSelected: true
  }, {
    id: 'arts-and-humanities',
    label: 'Arts & Humanities',
    isSelected: false
  }, {
    id: 'data-science',
    label: 'Data Science',
    isSelected: true
  }, {
    id: 'social-sciences',
    label: 'Social Science',
    isSelected: false
  }, {
    id: 'life-sciences',
    label: 'Life Science',
    isSelected: false
  }, {
    id: 'business',
    label: 'Business',
    isSelected: false
  }, {
    id: 'personal-development',
    label: 'Personal Development',
    isSelected: false
  }, {
    id: 'math-and-logic',
    label: 'Math & Logic',
    isSelected: false
  }, {
    id: 'physical-science-and-engineering',
    label: 'Physical Science & Engineering',
    isSelected: false
  }
];


class SearchAndDomainSelectCard extends React.Component {

  static propTypes = {
    onSetDomains: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    domainListData: mockListData,
  }

  onSelectChange = (id, newIsSelect, newListData) => {
  }

  render() {
    const {styles, domainListData} = this.props;

    return (
      <div {...css(styles.SearchAndDomainSelectCard)}>
        <div className="container vertical-box p-a-1">
          <div className="m-b-1">
            <SelectList
              listData={domainListData}
              onSelectChange={this.onSelectChange}
            />
          </div>
          <div className="horizontal-box align-items-vertical-center">
            <div className="flex-1 m-r-1">
              <input
                type="text"
                placeholder="What do you want to learn?"
                {...css(styles.searchInput)}
              />
            </div>
            <button {...css(styles.iconButton)}>
              <ContentFilterList />
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(({color, spacing}) => ({
  SearchAndDomainSelectCard: {
    backgroundColor: color.white,
    marginBottom: spacing.lg,
    borderBottom: `1px solid ${color.divider}`,
  },
  searchInput: {
    padding: 8,
    width: '100%',
    border: `1px solid ${color.divider}`,
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
  },
}))(SearchAndDomainSelectCard);
