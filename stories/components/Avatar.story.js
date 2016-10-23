import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Avatar, TextFit} from 'src';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const IMAGE_URL = 'https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg';

storiesOf('basic.Avatar', module)
.addWithInfo(
  'simple usage',
  `
  Avatar with size, type, label and children
  ~~~js
  import { Avatar } from 'coursera-ui';

  <Avatar imgSrc={IMAGE_URL} size={80} />

  <Avatar backgroundColor={color.primary} color={color.white} size={80}>
    <h4>HL</h4>
  </Avatar>

  <Avatar backgroundColor={color.primary} color={color.white} size={120}>
    <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
      <TextFit
        className="border-a"
        transformOrigin="0 16px 0"
      >
        H
      </TextFit>
    </div>
  </Avatar>
  ~~~
  `,
  () => (
    <div className="vertical-box">
      <div className="m-b-2">
        <h4 className="text-uppercase text-muted m-b-1">With Image</h4>
        <Avatar imgSrc={IMAGE_URL} size={80} />
      </div>
      <div className="m-b-2">
        <h4 className="text-uppercase text-muted m-b-1">With Custom backgroundColor and Text</h4>
        <Avatar backgroundColor="#000" color="#123" size={80}>
          <h4>HL</h4>
        </Avatar>
      </div>
      <div className="m-b-2 vertical-box">
        <h4 className="text-uppercase text-muted m-b-1">With FitText</h4>
        <div className="m-b-2 horizontal-box wrap">
          <div className="vertical-box">
            <Avatar backgroundColor={color.primary} color={color.white} size={120}>
              <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
                <TextFit
                  className="border-a"
                  transformOrigin="0 16px 0"
                >
                  H
                </TextFit>
              </div>
            </Avatar>
          </div>
          <div className="vertical-box">
            <Avatar backgroundColor={color.primary} color={color.white} size={120}>
              <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
                <TextFit
                  className="border-a"
                  transformOrigin="0 20px 0"
                >
                  HI
                </TextFit>
              </div>
            </Avatar>
          </div>
          <div className="vertical-box">
            <Avatar backgroundColor={color.primary} color={color.white} size={120}>
              <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
                <TextFit
                  className="border-a"
                  transformOrigin="0 -50% 0 "
                >
                  Hola
                </TextFit>
              </div>
            </Avatar>
          </div>
          <div className="vertical-box">
            <Avatar backgroundColor={color.primary} color={color.white} size={120}>
              <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
                <TextFit
                  className="border-a"
                  text="Hello!"
                  transformOrigin="0 -50% 0 "
                />
              </div>
            </Avatar>
          </div>
          <div className="vertical-box">
            <Avatar backgroundColor={color.primary} color={color.white} size={120}>
              <div className="p-a-1 w-100 h-100 horizontal-box align-items-absolute-center">
                <TextFit
                  className="border-a"
                  containerTextAdjustmentRatio={1}
                  text="World"
                  transformOrigin="0 -50% 0 "
                />
              </div>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="m-b-2">
        <h4 className="text-uppercase text-muted m-b-1">With gradient background container</h4>
          <div className='vertical-box align-items-absolute-center'
            style={{
              width: 300,
              height: 300,
              background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,
            }}
          >
            <div
              style={{
                width: 132,
                height: 132,
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, .8)',
              }}
            >
              <Avatar imgSrc={IMAGE_URL} size={128} bordered />
            </div>
          </div>
      </div>
    </div>
  ),
);
