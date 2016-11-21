import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Button} from 'src';

const Link = ({ href, children, ...rest}) => <a href={href} {...rest}>{children}</a>;
const GIT_LINK = 'https://github.com/vidaaudrey/coursera-ui';

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
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark={isThemeDark} type="primary" label={'button(default)'} tag={'button'} />
          <Button isThemeDark={isThemeDark} type="primary" label={'a(link)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} />
          <Button isThemeDark={isThemeDark} type="secondary" label={'tag func'} htmlAttributes={{href: GIT_LINK}} tag={Link} />
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
storiesOf('basic.Button', module)
.addWithInfo(
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
    <div className="container p-t-1">
      <ButtonDemo isThemeDark={false} />
      <ButtonDemo isThemeDark />
    </div>
  ),
  { inline: false, source: false, propTables: [Button]},
);
