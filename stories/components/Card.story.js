import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  Card, CardTitle, CardSubtitle, CardBlock, CardHeader, CardFooter, CardImage,
} from 'src/components/basic/Card';
import {spacing}  from 'src/styles/theme';

storiesOf('basic.Card', module)
.addWithInfo(
  'simple usage',
  `
  Card with size, type, label and children
  ~~~js
  import {
    Card, CardTitle, CardSubtitle, CardBlock, CardHeader, CardFooter, CardImage,
  } from 'coursera-ui';

  <Card tag="div" isCardBlock>
    <h1>tag: div</h1>
  </Card>

  <Card tagAttrributes={{zDepth: 2, isCircle: true}}>
    <div style={{width: 100, height: 100, borderRadius: '50%'}} className="horizontal-box align-items-absolute-center bg-primary text-xs-center">
      <p className="font-sm color-white">with tagAttrributes</p>
    </div>
  </Card>

  <Card isThemeDark>
    <CardImage
      maxImgHeight={200}
      imgSrc="https://d13yacurqjgara.cloudfront.net/users/181527/screenshots/3091493/livingroom_dribbble2.gif"
    />
    <CardTitle isThemeDark title="Hellas" />
    <CardSubtitle isThemeDark subtitle="Poem by Percy Bysshe Shelley" />
    <CardBlock>
      <p>
        How can I call the lone night good, <br />
        Though thy sweet wishes wing its flight? <br />
        Be it not said, thought, understood -- <br />
        Then it will be -- good night. <br />
      </p>
      <span className="text-muted font-italic">CardImage at top with imgSrc and maxImgHeight prop</span>
    </CardBlock>
  </Card>
  ~~~
  `,
  () => (
    <div className="container-fluid p-t-1">
      <h2>Light Theme</h2>
      <div className="p-a-2">
        <h3>CardBlock, CardTitle, CardSubtitle</h3>
        <div className="m-b-3 w-100">
          <div className="row">
            <div className="col-xs-6">
              <Card>
                <CardTitle title="Hellas" />
                <CardSubtitle subtitle="Poem by Percy Bysshe Shelley" />
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">with title and subtitle props</span>
                </CardBlock>
              </Card>
            </div>
            <div className="col-xs-6">
              <Card>
                <CardTitle>
                  <h3 className="p-l-1 p-r-1 p-t-1">Hellas</h3>
                </CardTitle>
                <CardSubtitle>
                  <h5 className="p-l-1 p-r-1 m-b-0">Poem by Percy Bysshe Shelley</h5>
                </CardSubtitle>
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">with children</span>
                </CardBlock>
              </Card>
            </div>
          </div>
        </div>
        <h3>CardHeader, CardFooter</h3>
        <div className="m-b-3 w-100">
          <div className="row">
            <div className="col-xs-6">
              <Card>
                <CardHeader text="Featured" />
                <CardTitle title="Hellas" />
                <CardSubtitle subtitle="Poem by Percy Bysshe Shelley" />
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">
                    CardHeader with text prop
                    CardFooter with text prop
                  </span>
                </CardBlock>
                <CardFooter text="2 Days Ago" />
              </Card>
            </div>
            <div className="col-xs-6">
              <Card>
                <CardHeader>
                  <h4 className="p-l-1 p-r-1" style={{paddingTop: spacing.sm}}>Featured</h4>
                </CardHeader>
                <CardTitle>
                  <h3 className="p-l-1 p-r-1 p-t-1">Hellas</h3>
                </CardTitle>
                <CardSubtitle>
                  <h5 className="p-l-1 p-r-1 m-b-0">Poem by Percy Bysshe Shelley</h5>
                </CardSubtitle>
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">CardHeader with children</span>
                </CardBlock>
                <CardFooter>
                  <span className="text-muted d-block" style={{padding: `0.5rem ${spacing.md}`}}>
                    2 Days Ago
                  </span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <h3>CardImage</h3>
        <div className="m-b-3 horizontal-box align-items-spacebetween wrap">
          <div className="row">
            <div className="col-xs-6">
              <Card>
                <CardImage
                  maxImgHeight={200}
                  imgSrc="https://d13yacurqjgara.cloudfront.net/users/181527/screenshots/3091493/livingroom_dribbble2.gif"
                />
                <CardTitle>
                  <h3 className="p-l-1 p-r-1 p-t-1">Hellas</h3>
                </CardTitle>
                <CardSubtitle>
                  <h5 className="p-l-1 p-r-1 m-b-0">Poem by Percy Bysshe Shelley</h5>
                </CardSubtitle>
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">CardImage at top with imgSrc and maxImgHeight prop</span>
                </CardBlock>
              </Card>
            </div>
            <div className="col-xs-6">
              <Card>
                <CardTitle>
                  <h3 className="p-l-1 p-r-1 p-t-1">Hellas</h3>
                </CardTitle>
                <CardSubtitle>
                  <h5 className="p-l-1 p-r-1 m-b-0">Poem by Percy Bysshe Shelley</h5>
                </CardSubtitle>
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">CardImage at bottom with children</span>
                </CardBlock>
                <CardImage>
                  <div
                    className="horizontal-box align-items-absolute-center"
                    style={{maxHeight: 200, overflow: 'hidden'}}
                  >
                    <img
                      src="https://d13yacurqjgara.cloudfront.net/users/515801/screenshots/3091788/capsule_animation_animation_8.gif"
                      alt="Random design"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                </CardImage>
              </Card>
            </div>
          </div>
        </div>

        <h3>tag and tagAttrributes</h3>
        <div className="m-b-3 horizontal-box align-items-spacebetween wrap">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              <Card tagAttrributes={{zDepth: 0, isRounded: true}}>
                <h1>Default tag: Paper </h1>
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4">
              <Card tag="div" isCardBlock>
                <h1>tag: div</h1>
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4">
              <div style={{width: 100}}>
                <Card tagAttrributes={{zDepth: 2, isCircle: true}}>
                  <div style={{width: 100, height: 100, borderRadius: '50%'}} className="horizontal-box align-items-absolute-center bg-primary text-xs-center">
                    <p className="font-sm color-white">with tagAttrributes</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Dark Theme</h2>
      <div className="p-a-2 border-a">
        <h3>CardImage</h3>
        <div className="m-b-3 horizontal-box align-items-spacebetween wrap">
          <div className="row">
            <div className="col-xs-6">
              <Card isThemeDark>
                <CardImage
                  maxImgHeight={200}
                  imgSrc="https://d13yacurqjgara.cloudfront.net/users/181527/screenshots/3091493/livingroom_dribbble2.gif"
                />
                <CardTitle isThemeDark title="Hellas" />
                <CardSubtitle isThemeDark subtitle="Poem by Percy Bysshe Shelley" />
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">CardImage at top with imgSrc and maxImgHeight prop</span>
                </CardBlock>
              </Card>
            </div>
            <div className="col-xs-6">
              <Card isThemeDark>
                <CardTitle isThemeDark title="Hellas" />
                <CardSubtitle isThemeDark subtitle="Poem by Percy Bysshe Shelley" />
                <CardBlock>
                  <p>
                    How can I call the lone night good, <br />
                    Though thy sweet wishes wing its flight? <br />
                    Be it not said, thought, understood -- <br />
                    Then it will be -- good night. <br />
                  </p>
                  <span className="text-muted font-italic">CardImage at bottom with children</span>
                </CardBlock>
                <CardImage>
                  <div
                    className="horizontal-box align-items-absolute-center"
                    style={{maxHeight: 200, overflow: 'hidden'}}
                  >
                    <img
                      src="https://d13yacurqjgara.cloudfront.net/users/515801/screenshots/3091788/capsule_animation_animation_8.gif"
                      alt="Random design"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                </CardImage>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);
