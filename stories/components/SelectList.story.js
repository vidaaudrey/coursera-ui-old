import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import IconLibrary from '../support/IconLibrary';
import { SelectList, SelectListItem } from 'src';

const listData = [
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
    isSelected: true
  }, {
    id: 'business',
    label: 'Business',
    isSelected: true
  }, {
    id: 'personal-development',
    label: 'Personal Development',
    isSelected: true
  }, {
    id: 'math-and-logic',
    label: 'Math & Logic',
    isSelected: true
  }, {
    id: 'physical-science-and-engineering',
    label: 'Physical Science & Engineering',
    isSelected: true
  }
];

storiesOf('extended.SelectList', module)
  .addWithInfo(
    'SelectList default',
    `
      Usage

      ~~~js
      import { SelectListItem } from 'coursera-ui';

      <SelectList
        listData={listData}
        showSelectAll={true}
        selectAllLabel={'All Topics'}
        alignCenter={true}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container p-a-3 bg-gray">
        <SelectList
          listData={listData}
          showSelectAll={true}
          alignCenter={true}
          selectAllLabel={'All Topics'}
          onSelectChange={action('select changed')}
        />
      </div>
    ),
  )
  .addWithInfo(
    'SelectList, themeDark',
    `
      Usage

      ~~~js
      import { SelectListItem } from 'coursera-ui';

      <SelectList
        listData={listData}
        showSelectAll={true}
        selectAllLabel={'All Topics'}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container p-a-3 bg-primary">
        <SelectList
          showSelectAll={true}
          selectAllLabel={'All Topics'}
          listData={listData}
          onSelectChange={action('select changed')}
          selectListItemAttributes={{
            isDarkTheme: true,
            height: 32,
            fontSize: 'sm',
          }}
        />
      </div>
    ),
  )
  .addWithInfo(
    'SelectListItem',
    `
      Usage
      ~~~js
      import { SelectListItem } from 'coursera-ui';

      <SelectListItem
        label="light theme"
        onClick={action('clicked')}
      />

      <SelectListItem
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
          <SelectListItem
            label="light theme"
            onClick={action('clicked')}
          />
          <SelectListItem
            label="light theme, selected"
            isSelected={true}
            onClick={action('clicked')}
          />
        </div>

        <div className="m-b-3 bg-primary p-a-3">
          <SelectListItem
            label="dark theme"
            isDarkTheme={true}
            onClick={action('clicked')}
          />
          <SelectListItem
            label="dark theme, selected, height 28, fontsize xs"
            isSelected={true}
            isDarkTheme={true}
            height={28}
            fontSize={'xs'}
            onClick={action('clicked')}
          />
        </div>
      </div>
    ),
  );
