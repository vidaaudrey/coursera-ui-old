import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import IconLibrary from '../support/IconLibrary';
import {Avatar, SmartScrollWrapper, SmartScrollWrapperResponsive } from 'src';
import Measure from 'react-measure';

const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

class ContainerWithSmartScrollWrapperResponsive extends React.Component {
  state = {
    containerHeight: 0,
  }

  render() {
    const {containerHeight} = this.state;
    return (
      <div className="bg-gray">
        <SmartScrollWrapper delta={50} containerHeight={containerHeight}>
          <Measure
            onMeasure={dimensions => this.setState({containerHeight: dimensions.height})}
          >
            <div className="border-a bg-primary horizontal-box align-items-spacebetween align-items-vertical-center wrap">
              <h1>Hello World</h1>
              <Avatar size={80} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
              <h2>Settings</h2>
            </div>
          </Measure>
        </SmartScrollWrapper>
        <div
          className="container border-a"
          style={{backgroundColor: color.white, minHeight: 2000, paddingTop: containerHeight + 32}}
        >
          <h1>Main Content</h1>
          <h3>The difference is the main content padding top also changes as you resize the screen.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam pariatur ducimus alias molestiae dolor odit similique dolore earum omnis non, sequi magni, id quibusdam laboriosam ipsa quia minus numquam adipisci est asperiores dolorem! Commodi voluptas modi nisi labore cumque quibusdam ipsa, corrupti deserunt delectus voluptatibus tempore ullam ratione tenetur odio expedita consectetur, aliquid officia deleniti excepturi, at! Cumque ut optio totam aut quas, eligendi excepturi accusantium itaque consectetur magnam obcaecati ipsa ullam velit blanditiis, voluptates laboriosam facere commodi eum illum mollitia labore aperiam nam inventore quasi nulla. Nostrum minus vero saepe iste sint, esse accusantium animi ex? Omnis, tenetur!</p>
        </div>
      </div>
    );
  }
}


storiesOf('extended.SmartScrollWrapper', module)
  .addWithInfo(
    'SmartScrollWrapper default',
    `
      Usage

      ~~~js
      import { SmartScrollWrapper, SmartScrollWrapperResponsive } from 'coursera-ui';


      <SmartScrollWrapper>
        <h1>Logo</h1>
        <Avatar size={40} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
      </SmartScrollWrapper>

      <SmartScrollWrapperResponsive>
        <h1>Logo</h1>
        <Avatar size={40} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
      </SmartScrollWrapperResponsive>
      ~~~
    `,
    () => (
      <div className="bg-gray">
        <SmartScrollWrapperResponsive delta={50}>
          <div className="border-a bg-primary horizontal-box align-items-spacebetween align-items-vertical-center wrap">
            <h1>Hello World</h1>
            <Avatar size={80} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
            <h2>Settings</h2>
          </div>
        </SmartScrollWrapperResponsive>
        <div className="container border-a" style={{backgroundColor: color.white, minHeight: 2000, paddingTop: 150}}>
          <h1>Main content</h1>
          <h3>Resize and Scroll to see the interaction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quaerat. In animi, nesciunt nemo. Quasi itaque eos nam ullam doloremque expedita aperiam suscipit necessitatibus cum voluptate! Autem dicta quidem totam voluptate rem quis ducimus est dolorum nemo sit veritatis vitae veniam saepe, nihil dolores possimus laborum ipsum odio illo qui modi numquam iure impedit, et, mollitia. Accusamus modi blanditiis aut dolores sequi? Laudantium iste cumque enim officiis ipsum voluptatibus architecto ab quos, temporibus in repellendus quod ipsa at quibusdam quaerat tenetur nihil atque ea eligendi. Deleniti in hic ex quam sunt nam. Atque possimus voluptates, saepe, veritatis blanditiis repellendus minima ipsa sit rerum vel, consequuntur consequatur. Error voluptatum quas, hic natus asperiores. Nobis nostrum voluptas similique optio. Accusantium itaque eos et laboriosam aut. Omnis tempore ex, soluta ut asperiores, quod magni consectetur voluptas quaerat labore architecto! Ea sunt rem placeat nulla repudiandae unde officia accusantium consequuntur reiciendis, reprehenderit perspiciatis dolorem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat corporis totam nesciunt tempore animi fugiat rem recusandae velit maiores similique, fugit hic tenetur nulla odit voluptas accusantium suscipit laboriosam dolorem vitae mollitia nemo saepe, molestiae ad corrupti! Dolores repudiandae autem ipsa quisquam quia ab cumque, adipisci voluptas ratione odio fugit rerum eligendi architecto, tempora nihil mollitia cupiditate repellendus recusandae illo cum. Amet voluptate atque alias dolorum qui eos minima sequi quasi placeat, neque numquam, molestiae optio maiores, eius nobis soluta nisi unde illum vero nostrum ratione. Consequatur atque repellat expedita libero quasi, eos ratione nobis ducimus eveniet quam animi officiis ad ab quae odio optio totam eius suscipit blanditiis cupiditate tenetur quibusdam minus alias aperiam. Cupiditate, quis? Eos, vel!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat corporis totam nesciunt tempore animi fugiat rem recusandae velit maiores similique, fugit hic tenetur nulla odit voluptas accusantium suscipit laboriosam dolorem vitae mollitia nemo saepe, molestiae ad corrupti! Dolores repudiandae autem ipsa quisquam quia ab cumque, adipisci voluptas ratione odio fugit rerum eligendi architecto, tempora nihil mollitia cupiditate repellendus recusandae illo cum. Amet voluptate atque alias dolorum qui eos minima sequi quasi placeat, neque numquam, molestiae optio maiores, eius nobis soluta nisi unde illum vero nostrum ratione. Consequatur atque repellat expedita libero quasi, eos ratione nobis ducimus eveniet quam animi officiis ad ab quae odio optio totam eius suscipit blanditiis cupiditate tenetur quibusdam minus alias aperiam. Cupiditate, quis? Eos, vel!</p>
        </div>
      </div>
    ),
  )
  .addWithInfo(
    'SmartScrollWrapper working with other components',
    `
      Usage

      ~~~js
      import { SmartScrollWrapper } from 'coursera-ui';
      import Measure from 'react-measure';

      class ContainerWithSmartScrollWrapperResponsive extends React.Component {
        state = {
          containerHeight: 0,
        }

        render() {
          const {containerHeight} = this.state;
          return (
            <div className="bg-gray">
              <SmartScrollWrapper delta={100} containerHeight={containerHeight}>
                <Measure
                  onMeasure={dimensions => this.setState({containerHeight: dimensions.height})}
                >
                  <div className="border-a bg-primary horizontal-box align-items-spacebetween align-items-vertical-center wrap">
                    <h1>Hello World</h1>
                    <Avatar size={80} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
                    <h2>Settings</h2>
                  </div>
                </Measure>
              </SmartScrollWrapper>
              <div
                className="container border-a"
                style={{backgroundColor: color.white, minHeight: 2000, paddingTop: containerHeight + 32}}
              >
                <h1>Main Content</h1>
                <h3>The difference is the main content padding top also changes as you resize the screen.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam pariatur ducimus alias molestiae dolor odit similique dolore earum omnis non, sequi magni, id quibusdam laboriosam ipsa quia minus numquam adipisci est asperiores dolorem! Commodi voluptas modi nisi labore cumque quibusdam ipsa, corrupti deserunt delectus voluptatibus tempore ullam ratione tenetur odio expedita consectetur, aliquid officia deleniti excepturi, at! Cumque ut optio totam aut quas, eligendi excepturi accusantium itaque consectetur magnam obcaecati ipsa ullam velit blanditiis, voluptates laboriosam facere commodi eum illum mollitia labore aperiam nam inventore quasi nulla. Nostrum minus vero saepe iste sint, esse accusantium animi ex? Omnis, tenetur!</p>
              </div>
            </div>
          );
        }
      }
      ~~~
    `,
    () => (
      <ContainerWithSmartScrollWrapperResponsive />
    ),
  );
