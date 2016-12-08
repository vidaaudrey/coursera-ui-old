import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Select} from 'src';

import VirtualizedSelectDemo from 'stories/support/select/VirtualizedSelectDemo';

storiesOf('basic.Select', module)
.addWithInfo(
  'simple usage',
  `
  A simple wrapper for React Virtualized Select. For more check:

  https://github.com/bvaughn/react-virtualized-select

  https://github.com/JedWatson/react-select
  ~~~js
  import { Select } from 'coursera-ui';

  const options = [
      { label: "One", value: 1 },
      { label: "Two", value: 2 },
      { label: "Three", value: 3, disabled: true }
  ];

  <Select
    options={options}
    onChange={(selectValue) => this.setState({ selectValue })}
    value={this.state.selectValue}
  />

  // More complex selections

  <Select
    autofocus
    clearable={clearable}
    disabled={disabled}
    labelKey="name"
    multi={multi}
    onChange={(selectedCity) => this.setState({ selectedCity })}
    options={[{name: 'Beijing'}, {name: 'San Francisco'}]}
    searchable={searchable}
    simpleValue
    value={selectedCity}
    valueKey="name"
  />

  function CountryOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, options, selectValue, style, valueArray }) {
    const flagImageUrl = ...;
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
  ~~~
  `,
  () => (
    <div className="vertical-box p-t-2">
      <VirtualizedSelectDemo />
    </div>
  ),
  { inline: false, source: false, propTables: [Select]},
);
