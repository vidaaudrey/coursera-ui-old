import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';

class ProgramAddName extends React.Component {

  render() {
    const {
      styles, programName, programSlug, programTagline,
      onSetProgramName, onSetProgramSlug, onSetProgramTagline,
    } = this.props;
    return (
      <div {...cssWithClass('vertical-box align-items-absolute-center p-b-3', styles.ProgramAddName)}>
        <h2 className="m-b-3">Create your first Learning Program</h2>
        <div className="vertical-box">
          <div className="m-b-1">
            <input type="text"
              {...css(styles.input)}
              ref={r => (this.programNameRef = r)}
              placeholder="Program Name"
              defaultValue={programName}
              onChange={() => onSetProgramName(this.programNameRef.value)}
            />
          </div>

         {/*
           <div className="m-b-1">
             <input type="text"
               {...css(styles.input)}
               ref={(r) => (this.programSlugRef = r)}
               placeholder="Program Slug"
               defaultValue={programSlug}
               onChange={() => onSetProgramSlug(this.programSlugRef.value)}
               />
           </div>
           */
         }

          <div className="m-b-1">
            <input type="text"
              {...css(styles.input)}
              ref={r => (this.programTaglineRef = r)}
              placeholder="Program Tagline"
              defaultValue={programTagline}
              onChange={() => onSetProgramTagline(this.programTaglineRef.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    Header: {
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  };
}

export default withStyles(({color, gradient}) => ({
  ProgramAddName: {
    minHeight: '100vh',
  },
  input: {
    textAlign: 'center',
    minWidth: 120,
    padding: '8px 16px',
  },

}))(ProgramAddName);
