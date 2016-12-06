import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  color
} from 'src/styles/theme';
import { SvgIcon } from 'src';
import IconLibrary from '../support/IconLibrary';
import { courseraIcons } from 'src';
import withSvgStack from 'src/components/hocs/withSvgStack';

const {SvgEmail} = courseraIcons;

const SvgEmailWithStack = withSvgStack(SvgEmail);

storiesOf('basic.SvgIcon', module)
  .addWithInfo(
    'default',
    `
      simple usage
       ~~~js
       import { SvgIcon } from 'coursera-ui';
       import { courseraIcons } from 'src';
       const {SvgEmail} = courseraIcons;

        <SvgEmail />

        <SvgEmail size={128} color="red" hoverColor="blue" />

        <SvgEmail onMouseEnter={action('mouse enter')} onMouseLeave={action('mouse leave')} />

        <SvgIcon size={64} color="green" viewBox="0 0 48 48">
          <title>email</title>
          <path d="M0,6V33a9,9,0,0,0,9,9H39a9,9,0,0,0,9-9V6H0ZM46,33a7,7,0,0,1-7,7H9a7,7,0,0,1-7-7V8H46V33Z" />
          <polygon points="42.48 13.67 41.14 12.19 24 27.65 6.96 12.21 5.62 13.69 24 30.35 42.48 13.67" />
        </SvgIcon>
       ~~~
    `,
    () => (
      <div className="vertical-box">
        <div className="vertical-box m-b-1">
          <SvgEmail />
          <small className="font-sm">No props</small>
        </div>
        <div className="vertical-box m-b-1">
          <SvgEmail size={128} color="red" hoverColor="blue" />
          <small className="font-sm"> with size, color, hoverColor props</small>
        </div>

        <div className="vertical-box m-b-1">
          <SvgEmail onMouseEnter={action('mouse enter')} onMouseLeave={action('mouse leave')} />
          <small className="font-sm"> with onMouseEnter and onMouseLeave callback </small>
        </div>

        <div className="vertical-box m-b-1">
          <SvgIcon size={64} color="green" viewBox="0 0 48 48">
            <title>email</title>
            <path d="M0,6V33a9,9,0,0,0,9,9H39a9,9,0,0,0,9-9V6H0ZM46,33a7,7,0,0,1-7,7H9a7,7,0,0,1-7-7V8H46V33Z" />
            <polygon points="42.48 13.67 41.14 12.19 24 27.65 6.96 12.21 5.62 13.69 24 30.35 42.48 13.67" />
          </SvgIcon>
          <small className="font-sm"> with custom svg as children </small>
        </div>

        <div className="vertical-box m-b-1">
          <SvgEmailWithStack
            size={128}
            color={color.white}
            hoverColor={color.accent}
            onMouseEnter={action('mouse enter')}
            onMouseLeave={action('mouse leave')}
          />
          <small className="font-sm"> withSvgStack default </small>
        </div>
        <div className="vertical-box m-b-1">
          <SvgEmailWithStack
            size={64}
            color={color.white}
            hoverColor={color.accent}
            onMouseEnter={action('mouse enter')}
            onMouseLeave={action('mouse leave')}
            stackColor={color.lightPrimary}
            stackHoverColor={color.primary}
            stackBorderWidth={4}
            stackBorderRadius={'10px'}
            stackBorderColor={color.divider}
            stackToIconRatio={0.8}
          />
          <small className="font-sm">withSvgStack with customization</small>
        </div>
      </div>
    ),
    // { source: true, inline: true , propTables: [SvgIcon]},
  )
  .add('icon library', () => (
    <IconLibrary />
  ))
