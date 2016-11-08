/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {Avatar, Button, ChipList} from 'src';
import {ContentFilterList} from 'src/components/svg/material';
import DomainChipList from 'src/prototypes/components/program-creation/DomainChipList';
const _ = require('underscore');

class SearchAndDomainSelectCard extends React.Component {

  static propTypes = {
    onSetSelectedDomainIds: React.PropTypes.func.isRequired,
    onSetSearchKeyword: React.PropTypes.func.isRequired,
    selectedDomainIds: React.PropTypes.array.isRequired,
    searchKeyWord: React.PropTypes.string,
    domains: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    selectedDomainIds: [],
    domains: [],
  }

  onSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    this.props.onSetSearchKeyword(this.searchRef.value);
  }

  render() {
    const {
      domains, selectedDomainIds, onSetSearchKeyword, searchKeyWord, onSetSelectedDomainIds
    } = this.props;
    return (
      <div {...cssWithClass('p-b-1', styles.SearchAndDomainSelectCard)}>
        <div {...cssWithClass('container-fluid vertical-box p-a-1 m-b-1', styles.domainContainer)}>
          <DomainChipList
            domains={domains}
            showSelectAll={false}
            onSetSelectedDomainIds={onSetSelectedDomainIds}
            alignCenter
            selectedDomainIds={selectedDomainIds}
          />
        </div>
        <div className="container horizontal-box align-items-vertical-center">
          <form className="flex-1 m-r-1" onSubmit={this.onSubmit} >
            <input
              type="text"
              placeholder="What do you want to learn?"
              {...css(styles.searchInput)}
              ref={r => (this.searchRef = r)}
              defaultValue={searchKeyWord}
              onChange={() => (onSetSearchKeyword(this.searchRef.value))}
            />
          </form>
          <button {...css(styles.iconButton)}>
            <ContentFilterList />
          </button>
        </div>
      </div>
    );
  }
}

module.exports = SearchAndDomainSelectCard;

const styles = StyleSheet.create({
  SearchAndDomainSelectCard: {
    backgroundColor: color.white,
    marginBottom: spacing.lg,
    borderBottom: `1px solid ${color.divider}`,
  },
  domainContainer: {
    maxWidth: 1200,
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
});
