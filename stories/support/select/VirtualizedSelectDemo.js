/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react'
import {
  cssWithClass, StyleSheet, css, color, spacing,
} from 'src/styles/theme';

import { Creatable } from 'react-select'
import Select from 'src/components/basic/Select';

import cityData from './data/cities'
import countryData from './data/countries'
import nameData from './data/names'

export default class VirtualizedSelectDemo extends Component {
  constructor(props) {
    super(props)
    const creatableOptions = [
      { label: 'Blue', value: '#00F' },
      { label: 'Green', value: '#0F0' },
      { label: 'Red', value: '#F00' }
    ];

    this.state = {
      clearable: true,
      creatableOptions,
      disabled: false,
      githubUsers: [],
      multi: false,
      searchable: true,
      selectedCreatable: null,
      selectedCity: null,
    };

    this._loadGithubUsers = this._loadGithubUsers.bind(this);
  }

  render() {
    const {
      clearable, creatableOptions, disabled, githubUsers, multi, searchable,
      selectedCity, selectedCountry, selectedCreatable, selectedGithubUser, selectedName,
    } = this.state;

    return (
      <div className="bg-gray container-fluid p-b-3">
        <div className="border-a p-a-1 m-b-1">
          <h2>Default Option Renderer</h2>
          <p>
            <i>
              Displays a list of the 1,000 largest cities in the world using the default option-renderer.
            </i>
          </p>

          <p>
            <i>
              Cities with names beginning with "y" have been disabled.
            </i>
          </p>
          <Select
            autofocus
            clearable={clearable}
            disabled={disabled}
            labelKey="name"
            multi={multi}
            onChange={(selectedCity) => this.setState({ selectedCity })}
            options={cityData}
            searchable={searchable}
            simpleValue
            value={selectedCity}
            valueKey="name"
          />

          <ul {...css(styles.optionsList)}>
            <li {...css(styles.optionListItem)}>
              <label>
                <input
                  defaultChecked={multi}
                  name="multi"
                  onChange={(event) => this.setState({ multi: event.target.checked })}
                  type="checkbox"
                />
                Multi-select?
              </label>
            </li>
            <li {...css(styles.optionListItem)}>
              <label>
                <input
                  defaultChecked={searchable}
                  name="searchable"
                  onChange={(event) => this.setState({ searchable: event.target.checked })}
                  type="checkbox"
                />
                Searchable?
              </label>
            </li>
            <li {...css(styles.optionListItem)}>
              <label>
                <input
                  defaultChecked={clearable}
                  name="clearable"
                  onChange={(event) => this.setState({ clearable: event.target.checked })}
                  type="checkbox"
                />
                Clearable?
              </label>
            </li>
            <li {...css(styles.optionListItem)}>
              <label>
                <input
                  defaultChecked={disabled}
                  name="disabled"
                  onChange={(event) => this.setState({ disabled: event.target.checked })}
                  type="checkbox"
                />
                Disabled?
              </label>
            </li>
          </ul>
        </div>

        <div className="border-a p-a-1 m-b-1">
          <h2>Custom Option Renderer</h2>
          <p>
            <i>
              Displays a list of world countries using a custom option renderer.
            </i>
          </p>

          <Select
            labelKey="name"
            onChange={(selectedCountry) => this.setState({ selectedCountry })}
            optionRenderer={CountryOptionRenderer}
            optionHeight={40}
            options={countryData}
            simpleValue
            value={selectedCountry}
            valueKey="code"
          />

        <h2>Dynamic Height Options</h2>
          <p>
            <i>
              Displays option-group headers that are sized different than regular options. Demonstrates how to use dynamic option heights feature.
            </i>
          </p>

          <Select
            labelKey="name"
            onChange={(selectedName) => this.setState({ selectedName })}
            onInputChange={() => this._customOptionHeightsSelect && this._customOptionHeightsSelect.recomputeOptionHeights()}
            optionHeight={({ option }) => option.type === 'header' ? 25 : 35}
            optionRenderer={NameOptionRenderer}
            options={nameData}
            ref={(ref) => this._customOptionHeightsSelect = ref}
            searchable={searchable}
            simpleValue
            value={selectedName}
            valueKey="name"
          />
      </div>
      <div className="border-a p-a-1 m-b-1">
        <h2>Async Options</h2>
        <p>
          <i>
            Displays an async <code>Select</code> component wired up to search for Github users.
          </i>
        </p>
        <Select
          async
          backspaceRemoves={false}
          labelKey="login"
          loadOptions={this._loadGithubUsers}
          minimumInput={1}
          onChange={(selectedGithubUser) => this.setState({ selectedGithubUser })}
          onValueClick={this._goToGithubUser}
          options={githubUsers}
          value={selectedGithubUser}
          valueKey="id"
        />
      </div>
      <div className="border-a p-a-1 m-b-1">
        <h2>Creatable Options</h2>
        <p>
          <i>
            Displays a <code>Select.Creatable</code> component that enables users to create their own options.
          </i>
        </p>
        <Select
          labelKey="label"
          multi
          onChange={(selectedCreatable) => this.setState({ selectedCreatable })}
          optionHeight={40}
          options={creatableOptions}
          selectComponent={Creatable}
          simpleValue
          value={selectedCreatable}
          valueKey="value"
        />
        </div>
      </div>
    )
  }

  _goToGithubUser (value) {
    window.open(value.html_url)
  }

  _loadGithubUsers (input) {
    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        const githubUsers = json.items

        this.setState({ githubUsers })

        return { options: githubUsers }
      })
  }
}

function CountryOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, options, selectValue, style, valueArray }) {
  const flagImageUrl = `https://rawgit.com/hjnilsson/country-flags/master/svg/${option.code.toLowerCase()}.svg`
  return (
    <div
      {...css(
        styles.countryOption,
        option === focusedOption && styles.countryOptionFocused,
        valueArray.indexOf(option) >= 0 && styles.countryOptionSelected,
      )}
      key={key}
      onClick={() => selectValue(option)}
      onMouseOver={() => focusOption(option)}
      style={style}
    >
      <label htmlFor={'Flag'} {...css(styles.countryLabel)}> {option.name} </label>
      <img
        {...css(styles.countryFlag)}
        src={flagImageUrl}
        role="presentation"
      />
    </div>
  );
}

function NameOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, optionIndex, options, selectValue, style, valueArray }) {
  if (option.type === 'header') {
    return (
      <div
        {...css(styles.nameOption, option.type === 'header' && styles.nameHeader)}
        key={key}
        style={style}
      >
        {option.name}
      </div>
    );
  }
  return (
    <div
      {...css(
        styles.nameOption,
        option.type === focusedOption && styles.nameOptionFocused,
        valueArray.indexOf(option) >= 0 && styles.nameOptionSelected,
      )}

      key={key}
      onClick={() => selectValue(option)}
      onMouseOver={() => focusOption(option)}
      style={style}
    >
      {option.name}
    </div>
  );
}


const styles = StyleSheet.create({
  header: {
    margin: '2rem 0 1rem',
  },
  optionsList: {
    display: 'flex',
    listStyle: 'none',
    margin: '1rem 0',
    padding: 0,
  },

  optionListItem: {
    display: 'flex',
    flex: '1 1 auto',
  },

  countryOption: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: '0 1rem',
  },
  countryOptionFocused: {
    backgroundColor: 'rgba(0, 126, 255, 0.1)',
  },
  countryOptionSelected: {
    fontWeight: 'bold',
  },

  countryFlag: {
    height: 25,
    width: 'auto',
    flex: '0 0 auto',
  },

  countryLabel: {
    flex: '1 1 auto',
  },

  nameOption: {
    display: 'flex',
    alignItems: 'center',
    height: 35,
    padding: '0 1rem',
    borderBottom: '1px solid #ddd',
  },

  nameHeader: {
    height: 25,
    backgroundColor: '#eee',
    fontWeight: 'bold',
    fontSize: 0.85,
  },
  nameOptionFocused: {
    backgroundColor: 'rgba(0, 126, 255, 0.1)',
  },

  nameOptionSelected: {
    fontWeight: 'bold',
  },
  //
  // :global(a.Select-value-label): {
  //   text-decoration: none;
  //  }
  // :global(a.Select-value-label):hover {
  //   text-decoration: underline;
  //   cursor: pointer;
  //  }
});
