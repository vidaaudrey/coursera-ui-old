import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import CourseMiniCard from '../program-common/CourseMiniCard';
import { ContentAddCircle, NavigationCancel } from 'src/components/svg/material'
const _ = require('underscore');

const BASE_URL = 'https://coursera.org/programs/';
const AUTO_SLUG = 'org_1'; // TODO: check with product
const AUTO_NAME = 'Learning Program'
class ProgramPreviewPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    const {selectedCourseIds, selectedS12nIds} = props;
    // Use local state to handle final selection, don't clear the global selection
    this.state = {
      finalSelectedCourseIds: selectedCourseIds,
      finalSelectedS12nIds: selectedS12nIds,
    };
  }

  onToggleCourseSelect = (courseId, isSelected) => {
    if (isSelected) {
      this.setState({
        finalSelectedCourseIds: [...this.state.finalSelectedCourseIds, courseId]
      })
    } else {
      const finalSelectedCourseIds = _.reject(this.state.finalSelectedCourseIds, (item) => item === courseId);
      this.setState({finalSelectedCourseIds});
    }
  }

  onToggleS12nSelect = (s12nId, isSelected) => {
    if (isSelected) {
      this.setState({
        finalSelectedS12nIds: [...this.state.finalSelectedS12nIds, s12nId]
      })
    } else {
      const finalSelectedS12nIds = _.reject(this.state.finalSelectedS12nIds, (item) => item === courseId);
      this.setState({finalSelectedS12nIds});
    }
  }

  getIsCourseSelected = (id) => {
    return _(this.state.finalSelectedCourseIds).contains(id);
  }

  getIsS12nSelected = (id) => {
    return _(this.state.finalSelectedS12nIds).contains(id);
  }

  getIconColor = ({courseId, s12nId}) => {
    let isSelected;
    const {color} = this.props.theme;
    if (courseId) {
      isSelected = this.getIsCourseSelected(courseId);
      return isSelected ? color.primary : color.icon;
    }
    if (s12nId) {
      isSelected = this.getIsS12nSelected(s12nId);
      return isSelected ? color.primary : color.icon;
    }
  }

  render() {
    const {
      styles, theme,
      programName,
      programSlug,
      selectedCourseIds, selectedS12nIds,
      seatLimit, currentTotalSelectCount,
    } = this.props;

    const {
      finalSelectedCourseIds, finalSelectedS12nIds,
    } = this.state;

    const leftCourseIds = _(selectedCourseIds).difference(finalSelectedCourseIds);


    const isSelected = false;
    const iconColor = isSelected ? theme.color.primary : theme.color.icon;
    const programUrl = `${BASE_URL}${programSlug || AUTO_SLUG}`;
    return (
      <div {...cssWithClass('container', styles.ProgramPreviewPage)}>
        <div className="horizontal-box align-items-absolute-center p-t-2">
          <h2 className="m-b-3">Create your first Learning Program</h2>
        </div>
        <section className="m-b-1">
          <div className="card p-a-1">
            <div className="vertical-box">
              <h3 className="text-xs-center">{programName || AUTO_NAME}</h3>
              <div className="horizontal-box align-items-vertical-center">
                <span className="label-text d-inline-block m-r-1">URL:</span>
                <a className="d-inline-block" href={programUrl} target="_blank">{programUrl}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="m-b-1">
          <h3>Current Selected</h3>
          {_(finalSelectedCourseIds).map(courseId => (
          <div className="card p-a-1 m-b-1" key={`CourseMiniCard-final-selected~${courseId}`}>
            <div className="row">
              <div className="col-xs-2 vertical-box align-items-absolute-center">
                <button
                  {...css(styles.iconButton, styles.iconButtonFocus)}
                  onClick={() => (this.onToggleCourseSelect(courseId, false))}
                  >
                  <NavigationCancel
                    size={24}
                    color={this.getIconColor({courseId})}
                    hoverColor={this.getIconColor({courseId})}
                  />
                </button>
              </div>
              <div className="col-xs-10 horizontal-box">
                <CourseMiniCard
                  id={courseId}
                  hasBorder={true}
                  type='CUSTOM_CHILDREN'
                >
                </CourseMiniCard>
              </div>
            </div>
          </div>
        ))}
        </section>

        <section className="m-b-1">
          <h3>The Rest of the Selection </h3>
          {_(leftCourseIds).map(courseId => (
          <div className="card p-a-1 m-b-1" key={`CourseMiniCard-selected~${courseId}`}>
            <div className="row">
              <div className="col-xs-2 vertical-box align-items-absolute-center">
                <button
                  {...css(styles.iconButton, styles.iconButtonFocus)}
                  onClick={() => (this.onToggleCourseSelect(courseId, true))}
                  >
                  <ContentAddCircle
                    size={24}
                    color={this.getIconColor({courseId})}
                    hoverColor={this.getIconColor({courseId})}
                  />
                </button>
              </div>
              <div className="col-xs-10 horizontal-box">
                <CourseMiniCard
                  id={courseId}
                  hasBorder={true}
                  type='CUSTOM_CHILDREN'
                >
                </CourseMiniCard>
              </div>
            </div>
          </div>
        ))}
        </section>

      </div>
    );
  }
}


export default withStyles(({color, gradient}) => ({
  ProgramPreviewPage: {
    minHeight: '100vh',
    minWidth: 400,
  },
  iconButton: {
    padding: 0,
    height: 24,
    backgroundColor: 'transparent',
    border: 'none',
  },
  iconButtonFocus: {
    ':focus' : {
      outline: 'none',
    }
  },
}))(ProgramPreviewPage);
