import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {TextFit} from 'src';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');


storiesOf('basic.TextFit', module)
.addWithInfo(
  'simple usage',
  `
  TextFit
  ~~~js
  import { TextFit } from 'coursera-ui';
  <TextFit
    className="border-a"
    containerTextAdjustmentRatio={1}
    text="World"
  />

  <TextFit
    className="border-a"
  >
    {'Love Actually'}
  </TextFit>
  ~~~
  `,
  () => (
    <div className="vertical-box">
      <div className="vertical-box">
        <div className="m-b-2">
          <h4 className="text-uppercase text-muted m-b-1">With text prop</h4>
          <TextFit
            className="border-a"
            containerTextAdjustmentRatio={1}
            text="World"
          />
        </div>
      </div>
      <div className="vertical-box">
        <div className="m-b-2">
          <h4 className="text-uppercase text-muted m-b-1">With children prop</h4>
          <TextFit
            className="border-a"
          >
            {'Love Actually'}
          </TextFit>
        </div>
      </div>
      <div className="vertical-box">
        <div className="m-b-2">
          <h4 className="text-uppercase text-muted m-b-1">
            With children and multiple paragraphs and custom style
          </h4>
          <TextFit
            className="border-a"
            containerTextAdjustmentRatio={1}
            transformOrigin="0 -50% 0 "
            textStyle={{
              textAlign: 'right',
            }}
          >
            <p>
              Oh! there are spirits of the air, <br />
              And genii of the evening breeze, <br />
              And gentle ghosts, with eyes as fair <br />
              As star-beams among twilight trees:— <br />
              Such lovely ministers to meet <br />
              Oft hast thou turned from men thy lonely feet.
            </p>
            <p>
              With mountain winds, and babbling springs,
              And moonlight seas, that are the voice
              Of these inexplicable things,
              Thou didst hold commune, and rejoice
              When they did answer thee; but they
              Cast, like a worthless boon, thy love away.

            </p>

          </TextFit>
        </div>
      </div>
    </div>
  ),
);
