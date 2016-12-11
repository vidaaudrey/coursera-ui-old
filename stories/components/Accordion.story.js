/* eslint-disable max-len */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, select, object, boolean, number } from '@kadira/storybook-addon-knobs';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import { Accordion, Expandable } from 'src';
import _ from 'underscore';

const loremText = 'Lorem ipsum dolor sit amet, consectetuemque! Accusamus est, blanditiis quia velit aut quas deserunt, commodi ullam totam expedita quaerat, doloremque natus incidunt, in enim e nemo, quam illo ipsum est blanditiis. Consectetur obcaecati, error.';
const loremTitle = 'Lorem ipsum dolor sit.'

const Panel = ({ index, isThemeDark, children, ...rest }) =>
  <Expandable
    header={<b>{`Course ${index}: ${loremTitle}`}</b>}
    isThemeDark={isThemeDark}
    {...rest}
  >
    {loremText}
    {children}
    {index === 2 &&
      <img className="w-100" src="https://naturalimmix.com/wp-content/uploads/2016/06/colours_small.png" alt="Random design stuff" />
    }
  </Expandable>;


class AccordionDemo extends React.Component {
  state = {
    checked: false,
  }

  onChange = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    const { isThemeDark } = this.props;
    const containerStyle = isThemeDark ? {color: 'white', backgroundColor: '#363b42'} : {};

    return (
      <div className="container-fluid p-a-1 m-b-3" style={containerStyle}>
        <h2>{isThemeDark ? 'Dark Theme' : 'Light Theme'}</h2>
        <h3>Default (noClone), use Expandable as children</h3>
        <div className="row m-b-3">
          <Accordion isThemeDark={isThemeDark} noClone>
            <Panel index={1} isOpened isThemeDark={isThemeDark} />
            {_.range(2).map(item =>
              <Panel key={`default~${item}~${isThemeDark ? 'dark' : ''}`} index={item + 1} isThemeDark={isThemeDark} />
            )}
          </Accordion>
        </div>
        <h3>Clone children and customize Expandable by using propsForExpandable</h3>
        <div className="row m-b-3">
          <Accordion
            isThemeDark={isThemeDark}
            propsForExpandable={{
              isThemeDark,
              hideArrow: true,
              hideBorder: true,
              header: <i className="m-b-0 text-uppercase">Customized Header defined by Accordion</i>
            }}
          >
            <Panel index={1} isOpened/>
            {_.range(2).map(item =>
              <Panel key={`activeIndex~${item}~${isThemeDark ? 'dark' : ''}`} index={item + 1} />
            )}
          </Accordion>
        </div>
        <h3>Set activeIndex as 1 (will be opened by default)</h3>
        <div className="row m-b-3">
          <Accordion
            isThemeDark={isThemeDark}
            activeIndex={1}
            propsForExpandable={{
              isThemeDark,
            }}
          >
            {_.range(3).map(item =>
              <Panel key={`activeIndex~${item}~${isThemeDark ? 'dark' : ''}`} index={item + 1} />
            )}
          </Accordion>
        </div>
        <h3> Customize active Expandable props</h3>
        <div className="row m-b-3">
          <Accordion
            isThemeDark={isThemeDark}
            activeIndex={1}
            propsForExpandable={{
              isThemeDark,
            }}
            propsForActiveExpandable={{
              style: {color: color.white, backgroundColor: color.primary},
            }}
          >
            {_.range(3).map(item =>
              <Panel key={`activeIndex~${item}~${isThemeDark ? 'dark' : ''}`} index={item + 1} />
            )}
          </Accordion>
        </div>
        <h3>Allow multiple activeIndexes and set 1, 3 as active by default </h3>
        <div className="row m-b-3">
          <Accordion
            isThemeDark={isThemeDark}
            activeIndexes={[1, 3]}
            allowMultipleActive
            propsForExpandable={{
              isThemeDark,
            }}
          >
            {_.range(4).map(item =>
              <Panel key={`activeIndex~${item}~${isThemeDark ? 'dark' : ''}`} index={item + 1} />
            )}
          </Accordion>
        </div>
      </div>
    );
  }
}

const stories = storiesOf('basic.Accordion', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'simple usage',
  `
  A simple toggle input
  ~~~js
  import { Accordion, Expandable } from 'coursera-ui';

  const Panel = ({ index, isThemeDark, children, ...rest }) =>
    <Expandable
      header={index}</b>}
      isThemeDark={isThemeDark}
      {...rest}
    >
      {loremText}
    </Expandable>;

  <Accordion isThemeDark={isThemeDark} noClone>
    <Panel index={1} isOpened isThemeDark={isThemeDark} />
    {_.range(2).map(item =>
      <Panel key={item} index={item + 1} isThemeDark={isThemeDark} />
    )}
  </Accordion>

  <Accordion
    isThemeDark={isThemeDark}
    activeIndexes={[1, 3]}
    allowMultipleActive
    propsForExpandable={{
      isThemeDark,
    }}
    propsForActiveExpandable={{
      style: {color: color.white, backgroundColor: color.primary},
    }}
  >
    {_.range(4).map(item =>
      <Panel key={item} index={item + 1} />
    )}
  </Accordion>

  ~~~
  `,
  () => (
    <div>
      <AccordionDemo />
      <AccordionDemo isThemeDark />
    </div>
  ),
  { inline: false, source: false, propTables: [Accordion]},
);
