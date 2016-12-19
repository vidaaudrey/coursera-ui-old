import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, select, object, boolean, number } from '@kadira/storybook-addon-knobs';

import {Button} from 'src';

const Link = ({ href, children, ...rest}) => <a href={href} {...rest}>{children}</a>;
const GIT_LINK = 'https://github.com/vidaaudrey/coursera-ui';

const BUTTON_STYLE = {marginRight: '1rem', marginBottom: '1rem'};
const ButtonDemo =({ isThemeDark }) => {
  const containerStyle = isThemeDark ? {color: 'white', backgroundColor: '#363b42'} : {};
  return (
    <div className="m-b-2">
      <h2>{isThemeDark ? 'Dark Theme' : 'Light Theme'}</h2>
      <div className="p-a-1" style={containerStyle}>
        <h3>Horizontal Layout</h3>
        <h4>type</h4>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark={isThemeDark} type="primary" label={'primary'} />
          <Button isThemeDark={isThemeDark} type="secondary" label={'secondary'} />
          <Button isThemeDark={isThemeDark} type="default" label={'default'} />
          <Button isThemeDark={isThemeDark} type="noStyle" label={'noStyle'} />
          <Button isThemeDark={isThemeDark} type="link" label={'link'} />
        </div>
        <h4>size</h4>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark={isThemeDark} type="primary" size="sm" label={'sm'} />
          <Button isThemeDark={isThemeDark} type="secondary" size="md" label={'md'} />
          <Button isThemeDark={isThemeDark} type="default" size="lg" label={'lg'} />
        </div>
        <h4>disabled</h4>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark={isThemeDark} type="primary" label={'by prop'} disabled />
          <Button isThemeDark={isThemeDark} type="primary" label={'by htmlAttributes'} htmlAttributes={{disabled: true}} />
        </div>
        <h4>tag</h4>
        <p className="text-muted font-italic">
          button can be used as link(a) or accept function that generates a Link
        </p>
        <div className="m-b-2 vertical-box">
          <div className="horizontal-box align-items-spacebetween wrap">
            <Button isThemeDark={isThemeDark} type="primary" label={'a(primary)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} style={BUTTON_STYLE} />
            <Button isThemeDark={isThemeDark} type="secondary" label={'a(secondary)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} style={BUTTON_STYLE} />
            <Button isThemeDark={isThemeDark} type="default" label={'a(default)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} style={BUTTON_STYLE} />
            <Button isThemeDark={isThemeDark} type="secondary" label={'a(noStyle)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} style={BUTTON_STYLE} />
          </div>
          <div className="horizontal-box align-items-spacebetween wrap">
            <Button isThemeDark={isThemeDark} type="primary" label={'button(default)'} tag={'button'} style={BUTTON_STYLE} />
            <Button isThemeDark={isThemeDark} type="secondary" label={'tag func'} htmlAttributes={{href: GIT_LINK}} tag={Link} style={BUTTON_STYLE} />
          </div>
        </div>
        <h4>misc</h4>
        <p className="text-muted font-italic">
          htmlAttributes, style overwrites (not recommended unless absolutely needed)
        </p>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark={isThemeDark} type="primary" label={'htmlAttributes'} htmlAttributes={{'data-courselenium': 'Button', 'aria-label': 'Close'}} />
          <Button isThemeDark={isThemeDark} type="primary" label={'style overwrites'} style={{backgroundColor: 'red', color: 'white', border: 'none'}} />
        </div>
        <h3>Vertical Layout</h3>
        <div className="m-b-2 vertical-box">
          <Button isThemeDark={isThemeDark} type="primary" label={'primary'} />
          <Button isThemeDark={isThemeDark} type="secondary" label={'secondary'} />
          <Button isThemeDark={isThemeDark} type="default" label={'default'} />
          <Button isThemeDark={isThemeDark} type="disabled" label={'disabled'} />
          <Button isThemeDark={isThemeDark} type="primary" size="sm" label={'sm'} />
          <Button isThemeDark={isThemeDark} type="secondary" size="md" label={'md'} />
          <Button isThemeDark={isThemeDark} type="default" size="lg" label={'lg'} />
        </div>
      </div>
    </div>
  );
};
const stories = storiesOf('basic.Button', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'simple usage',
  `
  Button with size, type, label and children
  ~~~js
  import { Button } from 'coursera-ui';

  <Button type="primary" label={'primary'} disabled />
  <Button type="secondary" label={'secondary'} />
  <Button type="default" label={'default'} />
  <Button type="primary" size="sm" label={'sm'} />
  <Button type="secondary" size="md" label={'md'} />
  <Button type="default" size="lg" label={'lg'} />
  <Button isThemeDark={isThemeDark} type="primary" label={'a(link)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} />
  ~~~
  `,
  () => (
    <div className="container-fluid p-t-1">
      <ButtonDemo isThemeDark={false} />
      <ButtonDemo isThemeDark />
    </div>
  ),
  { inline: false, source: false, propTables: [Button]},
);

stories.addWithInfo(
  'playground',
  `
  Button playground. Change the knobs setting to see the results.
  ~~~js
  import { Button } from 'coursera-ui';

  <Button type="primary" label={'primary'} disabled />
  ~~~
  `,
  () => {
    const isThemeDark = boolean('isThemeDark', false);

    const sizeOptions = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    };
    const size1 = select('size1', sizeOptions, 'sm');
    const size2 = select('size2', sizeOptions, 'md');
    const size3 = select('size3', sizeOptions, 'lg');
    const size4 = select('size4', sizeOptions, 'md');

    const typeOptions = {
      primary: 'primary',
      secondary: 'secondary',
      default: 'default',
      noStyle: 'noStyle',
    };
    const type1 = select('type1', typeOptions, 'primary');
    const type2 = select('type2', typeOptions, 'secondary');
    const type3 = select('type3', typeOptions, 'default');
    const type4 = select('type4', typeOptions, 'noStyle');

    const disabled1 = boolean('disabled1', false);
    const disabled2 = boolean('disabled2', false);
    const disabled3 = boolean('disabled3', false);
    const disabled4 = boolean('disabled4', false);

    const label1 = text('label1', 'Hello, Coursera');
    const label2 = text('label2', 'Hello, Coursera');
    const label3 = text('label3', 'Hello, Coursera');
    const label4 = text('label4', 'Hello, Coursera');


    const style1 = object('style1(sm)', {padding: '0.3rem 0.8rem', fontSize: '0.8rem'});
    const style2 = object('style2(md)', {padding: '0.4rem 2rem', fontSize: '1rem'});
    const style3 = object('style3(lg)', {padding: '1rem 2.6rem', fontSize: '1.2rem'});
    const style4 = object('style4(custom)', {color: '#3bafda'});

    const htmlAttributes = object('htmlAttributes', {
      'aria-label': 'Enroll Button',
      'data-courselenium': 'EnrollButton',
      onClick: action('you clicked button'),
    });

    const containerStyle = isThemeDark ? {color: 'white', backgroundColor: '#363b42'} : {};

    return (
      <div className="container-fluid p-a-1 border-a" style={containerStyle}>
        <h2>Playground</h2>
        <p className="text-muted">
          <i>
            {'If you want to see the size1, replace the style1 with empty object: {}'}
          </i>
        </p>
        <div className="m-b-2 p-t-3 horizontal-box align-items-spacebetween wrap">
          <Button
            isThemeDark={isThemeDark}
            label={label1}
            disabled={disabled1}
            size={size1}
            type={type1}
            style={style1}
            htmlAttributes={htmlAttributes}
          />
          <Button
            isThemeDark={isThemeDark}
            label={label2}
            disabled={disabled2}
            size={size2}
            type={type2}
            style={style2}
            htmlAttributes={htmlAttributes}
          />
          <Button
            isThemeDark={isThemeDark}
            label={label3}
            disabled={disabled3}
            size={size3}
            type={type3}
            style={style3}
            htmlAttributes={htmlAttributes}
          />
          <Button
            isThemeDark={isThemeDark}
            label={label4}
            disabled={disabled4}
            size={size4}
            type={type4}
            style={style4}
            htmlAttributes={htmlAttributes}
          />
        </div>
      </div>
    );
  },
  { inline: false, source: true, propTables: [Button]},
);
