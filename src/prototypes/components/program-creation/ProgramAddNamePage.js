/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import {Avatar, Button} from 'src';

class ProgramAddName extends React.Component {
  static propTypes = {
    programName: React.PropTypes.string,
    programSlug: React.PropTypes.string,
    programTagline: React.PropTypes.string,
    onCreateProgram: React.PropTypes.func,
  }
  render() {
    const {
      programName, programSlug, programTagline,
      onSetProgramName, onSetProgramSlug, onSetProgramTagline,
    } = this.props;
    return (
      <div {...cssWithClass('container vertical-box align-items-absolute-center p-b-3', styles.ProgramAddName)}>
        <div className="text-xs-center">
          <h2 className="m-b-3">Create your first Learning Program</h2>
          <div className="vertical-box">
            <div className="m-b-1">
              <input
                type="text"
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
              <input
                type="text"
                {...css(styles.input)}
                ref={r => (this.programTaglineRef = r)}
                placeholder="Program Tagline"
                defaultValue={programTagline}
                onChange={() => onSetProgramTagline(this.programTaglineRef.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProgramAddName;

const styles = StyleSheet.create({
  ProgramAddName: {
    minHeight: '100vh',
  },
  input: {
    textAlign: 'center',
    minWidth: 120,
    padding: '8px 16px',
  },
});
