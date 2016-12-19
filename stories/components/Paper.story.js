import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Paper, TextFit } from 'src';
import SvgInvitations from 'src/components/svg/coursera/common/SvgInvitations';
import { color } from 'src/styles/theme';

storiesOf('basic.Paper', module)
.addWithInfo(
  'simple usage',
  `
  A basic container that can give depth to the page with zDepth.
  ~~~js
  import { Paper } from 'coursera-ui';
  <Paper zDepth={4}> <h4 className="m-a-2">zDepth 4</h4> </Paper>

  <Paper zDepth={0}>
    <img
      src="https://d13yacurqjgara.cloudfront.net/users/730703/screenshots/3091562/owen-davey-folio-sweet-digital-mint-7-_hatch_-l_1x.jpg"
      alt="CourseraAlt"
      style={{width: 100, height: 100}}
    />
  </Paper>
  ~~~
  `,
  () => (
    <div className="container-fluid p-t-1">
      <h2>Light Theme</h2>
      <div className="p-a-2">
        <h3>zDepth</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Paper zDepth={0}> <h4 className="m-a-2">zDepth 0 </h4> </Paper>
          <Paper zDepth={1}> <h4 className="m-a-2">zDepth 1 (default)</h4> </Paper>
          <Paper zDepth={2}> <h4 className="m-a-2">zDepth 2</h4> </Paper>
          <Paper zDepth={3}> <h4 className="m-a-2">zDepth 3</h4> </Paper>
          <Paper zDepth={4}> <h4 className="m-a-2">zDepth 4</h4> </Paper>
          <Paper zDepth={5}> <h4 className="m-a-2">zDepth 5</h4> </Paper>
        </div>
        <h3>isInteractive (with rollover state)</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Paper isInteractive zDepth={0}> <h4 className="m-a-2">zDepth 0</h4> </Paper>
          <Paper isInteractive zDepth={1}> <h4 className="m-a-2">zDepth 1 (default)</h4> </Paper>
          <Paper isInteractive zDepth={2}> <h4 className="m-a-2">zDepth 2</h4> </Paper>
          <Paper isInteractive zDepth={3}> <h4 className="m-a-2">zDepth 3</h4> </Paper>
          <Paper isInteractive zDepth={4}> <h4 className="m-a-2">zDepth 4</h4> </Paper>
          <Paper isInteractive zDepth={5}> <h4 className="m-a-2">zDepth 5</h4> </Paper>
        </div>
      </div>
      <div className="p-a-2">
        <h3>different children</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Paper zDepth={0}>
            <img
              src="https://d13yacurqjgara.cloudfront.net/users/730703/screenshots/3091562/owen-davey-folio-sweet-digital-mint-7-_hatch_-l_1x.jpg"
              alt="CourseraAlt"
              style={{width: 100, height: 100}}
            />
          </Paper>
          <Paper zDepth={1} isCircle>
            <img
              src="https://d13yacurqjgara.cloudfront.net/users/730703/screenshots/3088720/owen-davey-foli5-_hatch_-l_1x.jpg"
              alt="CourseraAlt"
              style={{width: 100, height: 100, borderRadius: '50%'}}
            />
          </Paper>
          <Paper zDepth={2} isCircle>
            <div style={{width: 100, height: 100, borderRadius: '50%'}} className="horizontal-box align-items-absolute-center bg-primary">
              <h1 className="color-white">Text</h1>
            </div>
          </Paper>
          <Paper zDepth={3} isCircle>
            <div style={{width: 144, height: 144, borderRadius: '50%', margin: 2}} className="horizontal-box align-items-absolute-center bg-primary">
              <h1 className="color-white">Outline</h1>
            </div>
          </Paper>
          <Paper zDepth={3} isCircle>
            <div style={{width: 150, height: 150, borderRadius: '50%'}} className="horizontal-box align-items-absolute-center bg-primary">
              <SvgInvitations size={80} color={color.white} hoverColor={color.lightPrimary} />
            </div>
          </Paper>
        </div>
      </div>
      <div className="p-a-2">
        <h3>isRounded, isCircle, isTransitionDisabled, style</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Paper zDepth={0} isRounded> <h4 className="m-a-2"> isRounded </h4> </Paper>
          <Paper zDepth={1} isCircle> <h4 className="m-a-2"> isCircle </h4> </Paper>
          <Paper zDepth={2} isCircle>
            <div style={{width: 160, height: 160}} className="horizontal-box align-items-absolute-center text-xs-center">
              <span>isCircle, square content size</span>
            </div>
          </Paper>
          <Paper zDepth={3} isTransitionDisabled> <h4 className="m-a-2">no transition</h4> </Paper>
          <Paper zDepth={4} style={{border: '1px solid #b5c0c9', boxShadow: 'none', background: '#f2dae4'}}>
            <h4 className="m-a-2">root style overwrites</h4>
          </Paper>
        </div>
      </div>

      <h2>Dark Theme</h2>
      <div className="p-a-2" style={{backgroundColor: '#363b42'}}>
        <h3>zDepth</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Paper zDepth={0}> <h4 className="m-a-2">zDepth 0 </h4> </Paper>
          <Paper zDepth={1}> <h4 className="m-a-2">zDepth 1</h4> </Paper>
          <Paper zDepth={2}> <h4 className="m-a-2">zDepth 2</h4> </Paper>
          <Paper zDepth={3}> <h4 className="m-a-2">zDepth 3</h4> </Paper>
          <Paper zDepth={4}> <h4 className="m-a-2">zDepth 4</h4> </Paper>
        </div>
      </div>
    </div>
  ),
);
