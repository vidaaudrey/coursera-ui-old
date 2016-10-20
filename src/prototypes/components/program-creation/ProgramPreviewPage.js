import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import CourseMiniCard from '../program-common/CourseMiniCard';
import S12nMiniCard from '../program-common/S12nMiniCard';
import { ContentAddCircle, NavigationCancel } from 'src/components/svg/material'
const _ = require('underscore');

const BASE_URL = 'https://coursera.org/programs/';
const AUTO_SLUG = 'org_1'; // TODO: check with product
const AUTO_NAME = 'Learning Program';

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
      const finalSelectedS12nIds = _.reject(this.state.finalSelectedS12nIds, (item) => item === s12nId);
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
      programTagline,
      selectedCourseIds, selectedS12nIds,
      seatLimit, currentTotalSelectCount,
    } = this.props;

    const {
      finalSelectedCourseIds, finalSelectedS12nIds,
    } = this.state;

    const leftCourseIds = _(selectedCourseIds).difference(finalSelectedCourseIds);
    const leftS12nIds = _(selectedS12nIds).difference(finalSelectedS12nIds);


    const isSelected = false;
    const iconColor = isSelected ? theme.color.primary : theme.color.icon;
    const programUrl = `${BASE_URL}${programSlug || AUTO_SLUG}`;
    return (
      <div {...cssWithClass('container', styles.ProgramPreviewPage)}>
        <div className="horizontal-box align-items-absolute-center p-t-2">
          <h2 className="m-b-3">Preview Your Program</h2>
        </div>
        <section className="m-b-1">
          <div className="card p-a-1">
            <div className="vertical-box">
              <h3 className="text-xs-center">{programName || AUTO_NAME}</h3>
              <h5 className="text-xs-center font-italic font-weight-normal m-b-2">
                {programTagline}
              </h5>
              <div className="horizontal-box align-items-vertical-center">
                <span className="label-text d-inline-block m-r-1">URL:</span>
                <a className="d-inline-block" href={programUrl} target="_blank">{programUrl}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="m-b-1">
          <h3>Current Selected</h3>
            {_(finalSelectedS12nIds).map(s12nId => (
              <div className="card p-a-1 m-b-1" key={`S12nMiniCard-final-selected~${s12nId}`}>
                <div className="row">
                  <div className="col-xs-2 vertical-box align-items-absolute-center">
                    <button
                      {...css(styles.iconButton, styles.iconButtonFocus)}
                      onClick={() => (this.onToggleS12nSelect(s12nId, false))}
                      >
                      <NavigationCancel
                        size={24}
                        color={this.getIconColor({s12nId})}
                        hoverColor={this.getIconColor({s12nId})}
                      />
                    </button>
                  </div>
                  <div className="col-xs-10 horizontal-box">
                    <S12nMiniCard
                      id={s12nId}
                    >
                  </S12nMiniCard>
                  </div>
                </div>
              </div>
            ))}

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
                    type='CUSTOM_CHILDREN'
                  >
                  </CourseMiniCard>
                </div>
              </div>
            </div>
          ))}
        </section>
        {(_(leftS12nIds).size() > 0 || _(leftCourseIds).size() > 0) &&
          <section className="m-b-1">
            <h3> You Choices </h3>
              {_(leftS12nIds).map(s12nId => (
              <div className="card p-a-1 m-b-1" key={`S12nMiniCard-selected~${s12nId}`}>
                <div className="row">
                  <div className="col-xs-2 vertical-box align-items-absolute-center">
                    <button
                      {...css(styles.iconButton, styles.iconButtonFocus)}
                      onClick={() => (this.onToggleS12nSelect(s12nId, true))}
                      >
                      <ContentAddCircle
                        size={24}
                        color={this.getIconColor({s12nId})}
                        hoverColor={this.getIconColor({s12nId})}
                      />
                    </button>
                  </div>
                  <div className="col-xs-10 horizontal-box">
                    <S12nMiniCard
                      id={s12nId}
                    >
                    </S12nMiniCard>
                  </div>
                </div>
              </div>
            ))}

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
        }

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
