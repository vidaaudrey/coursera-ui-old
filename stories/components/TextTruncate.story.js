import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import TextTruncate from 'src/components/extended/TextTruncate';
import NavigationChevronRight from 'src/components/svg/material/navigation/chevron-right';

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio possimus magni officiis soluta, tenetur! Nemo, maiores quis dolores quam molestias eius. Quam pariatur, nihil quis. Ratione sit voluptas repellendus, vel accusantium rerum. Nisi hic unde dolorem perspiciatis aperiam facilis! Praesentium, porro culpa fugit? Laudantium temporibus ut, nobis accusamus. Placeat pariatur repellendus commodi in quaerat! A inventore ut doloribus voluptas eius rerum maxime et temporibus eum dolor quaerat culpa cum magnam, quisquam possimus molestias ipsa, neque! Odit adipisci iusto molestias ullam, iste dicta quo sit accusamus corrupti consectetur, veritatis praesentium a eligendi numquam autem quam illum in est ut hic veniam.';
storiesOf('extended.TextTruncate', module)
  .addWithInfo(
    'Basic',
    `
      Usage

      ~~~js
      ~~~
    `,
    () => (
      <div className="container" style={{height: 500}}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3> One Line</h3>
            <TextTruncate
              line={1}
              truncateText="…"
              text={dummyText}
              textTruncateChild={<a href="#">More</a>}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3> Tree Lines</h3>
            <TextTruncate
              line={3}
              truncateText="…"
              text={dummyText}
              textTruncateChild={<a href="#">More</a>}
            />
          </div>
        </div>

      </div>
    ),
  );
