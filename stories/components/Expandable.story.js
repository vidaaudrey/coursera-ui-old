/* eslint-disable max-len */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, select, object, boolean, number } from '@kadira/storybook-addon-knobs';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import ActionFavorite from 'src/components/svg/material/action/favorite';
import SocialSentimentDissatisfied from 'src/components/svg/material/social/sentiment-dissatisfied';
import {Expandable, TextTruncate} from 'src';
import TogglableContent from 'src/components/basic/TogglableContent';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id at fugiat eligendi consequuntur, libero necessitatibus cum animi, dolores ad ipsa, assumenda doloremque! Accusamus est, blanditiis quia velit aut quas deserunt, commodi ullam totam expedita quaerat, doloremque natus incidunt, in enim debitis optio voluptate illo assumenda doloribus. Suscipit hic numquam voluptatum quidem doloremque deserunt sunt, quod similique rerum assumenda ipsum nisi repellat aperiam quam exercitationem nemo aspernatur minus, ut ab dolores, consectetur optio aliquid. Nobis sed odio praesentium expedita laborum delectus perferendis, iusto officia distinctio sint numquam eius voluptatibus dicta ratione nemo, quam illo ipsum est blanditiis. Consectetur obcaecati, error.';

const Wrapper = ({ children }) =>
  <div className="col-xs-12">
    {children}
  </div>;

class ExpandableDemo extends React.Component {
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
        <div className="row">
          <Wrapper>
            <Expandable isThemeDark={isThemeDark}>
              Default No Header {loremText}
            </Expandable>
          </Wrapper>
          <Wrapper>
            <Expandable
              header={'With string as header'}
              isThemeDark={isThemeDark}
            >
              {loremText}
            </Expandable>
          </Wrapper>
          <Wrapper>
            <Expandable
              header={
                <div className="horizontal-box align-items-spacebetween w-100">
                  <h3 className="text-primary d-inline-block m-b-0 m-r-2">With custom header</h3>
                  <span className="text-muted">And hide arrow</span>
                </div>
              }
              isThemeDark={isThemeDark}
              hideArrow
            >
              {loremText}
            </Expandable>
          </Wrapper>
          <Wrapper>
            <Expandable
              header={
                <div className="horizontal-box align-items-spacebetween">
                  <h3 className="d-inline-block m-b-0 m-r-2">isOpened by default</h3>
                </div>
              }
              isOpened
              isThemeDark={isThemeDark}
            >
              {loremText}
            </Expandable>
          </Wrapper>
          <Wrapper>
            <Expandable
              header={
                <div
                  className="horizontal-box align-items-spacebetween"
                  style={{minHeight: 48}}
                >
                  <h3 className="d-inline-block m-b-0 m-r-2">isFullBleed</h3>
                </div>
              }
              isOpened
              isFullBleed
              isThemeDark={isThemeDark}
            >
              <h3>A very long panel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, similique.</h3>
              <img className="w-100" src="https://d13yacurqjgara.cloudfront.net/users/646147/screenshots/3149424/the_dream_night.png" alt="Random design stuff" />
              <img className="w-100" src="https://d13yacurqjgara.cloudfront.net/users/21699/screenshots/3148680/bear.jpg" alt="Random design stuff" />
            </Expandable>
          </Wrapper>
          <Wrapper>
            <h3>Use for TogglableContent when content is long</h3>
            <TogglableContent
              expandableProps={{
                defaultContentHeight: 68,
                isThemeDark,
              }}
            >
              {loremText}
              {loremText}
            </TogglableContent>
          </Wrapper>
          <Wrapper>
            <h3>Use for TogglableContent when content is short (hide expand button)</h3>
            <TogglableContent
              expandableProps={{
                defaultContentHeight: 68,
                isThemeDark,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, repellendus?
            </TogglableContent>
          </Wrapper>
          <Wrapper>
            <h3>Use for TogglableContent when content is not fullBleed</h3>
            <TogglableContent
              expandableProps={{
                defaultContentHeight: 68,
                isThemeDark,
                isFullBleed: false,
              }}
            >
              {loremText}
            </TogglableContent>
          </Wrapper>
        </div>
      </div>
    );
  }
}

const stories = storiesOf('basic.Expandable', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'simple usage',
  `
  A simple toggle input
  ~~~js
  import { Expandable, TogglableContent } from 'coursera-ui';

  <Expandable isThemeDark={isThemeDark}>
    Default No Header {loremText}
  </Expandable>

  Expandable
    header={
      <div className="horizontal-box align-items-spacebetween w-100">
        <h3 className="text-primary d-inline-block m-b-0 m-r-2">With custom header</h3>
        <span className="text-muted">And hide arrow</span>
      </div>
    }
    isThemeDark={isThemeDark}
    hideArrow
  >
    {loremText}
  </Expandable>

  <Expandable
    header={
      <div
        className="horizontal-box align-items-spacebetween"
        style={{minHeight: 48}}
      >
        <h3 className="d-inline-block m-b-0 m-r-2">isFullBleed</h3>
      </div>
    }
    isOpened
    isFullBleed
    isThemeDark={isThemeDark}
  >
    <h3>A very long panel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, similique.</h3>
    <img className="w-100" src="https://d13yacurqjgara.cloudfront.net/users/21699/screenshots/3148680/bear.jpg" alt="Random design stuff" />
  </Expandable>

  <TogglableContent
    expandableProps={{
      defaultContentHeight: 68,
      isThemeDark,
    }}
  >
    {loremText}
    {loremText}
  </TogglableContent>

  ~~~
  `,
  () => (
    <div>
      <ExpandableDemo />
      <ExpandableDemo isThemeDark />
    </div>
  ),
  { inline: false, source: false, propTables: [Expandable]},
);
