import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import IconLibrary from '../support/IconLibrary';
import { ChipList, Chip } from 'src';

const listData = [
  {
    id: 'computer-science',
    label: 'Computer Science',
    isSelected: true,
  }, {
    id: 'arts-and-humanities',
    label: 'Arts & Humanities',
    isSelected: false
  }, {
    id: 'data-science',
    label: 'Data Science',
    isSelected: true,
  }, {
    id: 'social-sciences',
    label: 'Social Science',
    isSelected: false
  }, {
    id: 'life-sciences',
    label: 'Life Science',
    isSelected: true,
  }, {
    id: 'business',
    label: 'Business',
    isSelected: true,
  }, {
    id: 'personal-development',
    label: 'Personal Development',
    isSelected: true,
  }, {
    id: 'math-and-logic',
    label: 'Math & Logic',
    isSelected: true,
  }, {
    id: 'physical-science-and-engineering',
    label: 'Physical Science & Engineering',
    isSelected: true,
  },
];

storiesOf('extended.ChipList', module)
  .addWithInfo(
    'ChipList default',
    `
      Usage

      ~~~js
      import { Chip } from 'coursera-ui';

      <ChipList
        listData={listData}
        showSelectAll
        selectAllLabel={'All Topics'}
        alignCenter={true}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container p-a-3 bg-gray">
        <ChipList
          listData={listData}
          showSelectAll
          alignCenter
          selectAllLabel={'All Topics'}
          onSelectChange={action('select changed')}
        />
      </div>
    ),
  )
  .addWithInfo(
    'ChipList, themeDark',
    `
      Usage

      ~~~js
      import { Chip } from 'coursera-ui';

      <ChipList
        listData={listData}
        showSelectAll={true}
        selectAllLabel={'All Topics'}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container p-a-3 bg-primary">
        <ChipList
          showSelectAll
          selectAllLabel={'All Topics'}
          listData={listData}
          onSelectChange={action('select changed')}
          ChipAttributes={{
            isDarkTheme: true,
            height: 32,
            fontSize: 'sm',
          }}
        />
      </div>
    ),
  )
  .addWithInfo(
    'Chip',
    `
      Usage
      ~~~js
      import { Chip } from 'coursera-ui';

      <Chip
        label="light theme"
        onClick={action('clicked')}
      />

      <Chip
        label="dark theme, selected, height 28, fontsize xs"
        isSelected={true}
        isDarkTheme={true}
        height={28}
        fontSize={'xs'}
        onClick={action('clicked')}
      />
      ~~~
    `,
    () => (
      <div className="vertical-box p-t-3">
        <div className="m-b-3">
          <Chip
            label="light theme"
            onClick={action('clicked')}
          />
          <Chip
            label="light theme, selected"
            isSelected
            onClick={action('clicked')}
          />
        </div>

        <div className="m-b-3 bg-primary p-a-3">
          <Chip
            label="dark theme"
            isDarkTheme
            onClick={action('clicked')}
          />
          <Chip
            label="dark theme, selected, height 28, fontsize xs"
            isSelected
            isDarkTheme
            height={28}
            fontSize={'xs'}
            onClick={action('clicked')}
          />
        </div>
      </div>
    ),
  );
