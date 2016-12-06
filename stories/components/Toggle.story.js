import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, select, object, boolean, number } from '@kadira/storybook-addon-knobs';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';

import {Toggle} from 'src';
import EnhancedSwitch from 'src/components/basic/EnhancedSwitch';
import Switch from 'src/components/basic/Switch';

const Link = ({ href, children, ...rest}) => <a href={href} {...rest}>{children}</a>;
const GIT_LINK = 'https://github.com/vidaaudrey/coursera-ui';

// class Test extends React.Component{
//   state = { disabled: false}
//   toggle = () => {
//     this.setState({
//       disabled: !this.state.disabled,
//     });
//   }
//
//   render() {
//     return (<div style={{margin: 20}}>
//       <Switch onChange={this.toggle}
//         disabled={this.state.disabled}
//         checkedChildren={'开'}
//         unCheckedChildren={'关'}
//       />
//       <div>
//         <button onClick={this.toggle}>toggle disabled</button>
//       </div>
//     </div>);
//   }
// }

const stories = storiesOf('basic.Toggle', module);
stories.addDecorator(withKnobs);
//
// stories.addWithInfo(
//   'playground',
//   `
//   Toggle playground. Change the knobs setting to see the results.
//   ~~~js
//   import { Toggle } from 'coursera-ui';
//
//   <Toggle type="primary" label={'primary'} disabled />
//   ~~~
//   `,
//   () => {
//     const isThemeDark = boolean('isThemeDark', false);
//
//     const sizeOptions = {
//       sm: 'sm',
//       md: 'md',
//       lg: 'lg',
//     };
//     const size1 = select('size1', sizeOptions, 'sm');
//     const size2 = select('size2', sizeOptions, 'md');
//     const size3 = select('size3', sizeOptions, 'lg');
//     const size4 = select('size4', sizeOptions, 'md');
//
//     const typeOptions = {
//       primary: 'primary',
//       secondary: 'secondary',
//       default: 'default',
//       noStyle: 'noStyle',
//     };
//     const type1 = select('type1', typeOptions, 'primary');
//     const type2 = select('type2', typeOptions, 'secondary');
//     const type3 = select('type3', typeOptions, 'default');
//     const type4 = select('type4', typeOptions, 'noStyle');
//
//     const disabled1 = boolean('disabled1', false);
//     const disabled2 = boolean('disabled2', false);
//     const disabled3 = boolean('disabled3', false);
//     const disabled4 = boolean('disabled4', false);
//
//     const label1 = text('label1', 'Hello, Coursera');
//     const label2 = text('label2', 'Hello, Coursera');
//     const label3 = text('label3', 'Hello, Coursera');
//     const label4 = text('label4', 'Hello, Coursera');
//
//
//     const style1 = object('style1(sm)', {padding: '0.3rem 0.8rem', fontSize: '0.8rem'});
//     const style2 = object('style2(md)', {padding: '0.4rem 2rem', fontSize: '1rem'});
//     const style3 = object('style3(lg)', {padding: '1rem 2.6rem', fontSize: '1.2rem'});
//     const style4 = object('style4(custom)', {color: '#3bafda'});
//
//     const htmlAttributes = object('htmlAttributes', {
//       'aria-label': 'Enroll Toggle',
//       'data-courselenium': 'EnrollToggle',
//       onClick: action('you clicked button'),
//     });
//
//     const containerStyle = isThemeDark ? {color: 'white', backgroundColor: '#363b42'} : {};
//
//     return (
//       <div className="container p-a-1 border-a" style={containerStyle}>
//         <h2>Playground</h2>
//         <p className="text-muted">
//           <i>
//             {'If you want to see the size1, replace the style1 with empty object: {}'}
//           </i>
//         </p>
//         <div className="m-b-2 p-t-3 horizontal-box align-items-spacebetween wrap">
//           <Toggle
//             isThemeDark={isThemeDark}
//             label={label1}
//             disabled={disabled1}
//             size={size1}
//             type={type1}
//             style={style1}
//             htmlAttributes={htmlAttributes}
//           />
//           <Toggle
//             isThemeDark={isThemeDark}
//             label={label2}
//             disabled={disabled2}
//             size={size2}
//             type={type2}
//             style={style2}
//             htmlAttributes={htmlAttributes}
//           />
//           <Toggle
//             isThemeDark={isThemeDark}
//             label={label3}
//             disabled={disabled3}
//             size={size3}
//             type={type3}
//             style={style3}
//             htmlAttributes={htmlAttributes}
//           />
//           <Toggle
//             isThemeDark={isThemeDark}
//             label={label4}
//             disabled={disabled4}
//             size={size4}
//             type={type4}
//             style={style4}
//             htmlAttributes={htmlAttributes}
//           />
//         </div>
//       </div>
//     );
//   },
//   { inline: false, source: true, propTables: [Toggle]},
// );


stories.addWithInfo(
  'simple usage',
  `
  Toggle with size, type, label and children
  ~~~js
  import { Toggle } from 'coursera-ui';

  <Toggle type="primary" label={'primary'} disabled />
  <Toggle type="secondary" label={'secondary'} />
  <Toggle type="default" label={'default'} />
  <Toggle type="primary" size="sm" label={'sm'} />
  <Toggle type="secondary" size="md" label={'md'} />
  <Toggle type="default" size="lg" label={'lg'} />
  <Toggle isThemeDark={isThemeDark} type="primary" label={'a(link)'} tag={'a'} htmlAttributes={{href: GIT_LINK}} />
  ~~~
  `,
  () => (
    <div className="container p-t-1">
      <div className="row">
        <Toggle
          onToggle={action('onToggleDeletedMembers')}
          onLabel={'Show Active Members'}
          offLabel={'Show Deleted Members'}
          style={{padding: 0, color: color.primary}}
        />
      </div>
      <div className="row">
        <EnhancedSwitch
          onToggle={action('onToggleDeletedMembers')}
          onLabel={'Show Active'}
          offLabel={'Show Deleted'}
          style={{padding: 0, color: color.primary}}
        />
      </div>
      <div className="row">

      </div>
    </div>
  ),
  { inline: false, source: false, propTables: [Toggle]},
);
